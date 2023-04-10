package sobr.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.sql.*;

import static psql.connection.connect;

@WebServlet(name = "SendAnswersServlet", value = "/SendAnswersServlet")
public class SendAnswersServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        HttpSession sesh = req.getSession();
        String email = String.valueOf(sesh.getAttribute("sessionUser"));

        long sk = Long.parseLong(req.getParameter("sk"));

        try {
            Connection c = connect();

            String sql = "UPDATE uch SET answer1 = ?, answer2 = ?, answer3 = ?, answer4 = ?, answer5 = ?, answer6 = ?, answer7 = ?, answer8 = ?, answer9 = ?, answer10 = ? WHERE id = ? and email = ?;";
            PreparedStatement ps = c.prepareStatement(sql);

            for (int i = 1; i < 11; i++) {
                if (req.getParameter("answer"+(i)) != null){
                    ps.setString(i, req.getParameter("answer"+i));
                } else ps.setNull(i, Types.VARCHAR);
            }

            ps.setLong(11, sk);
            ps.setString(12, email);

            ps.executeUpdate();
            c.close();
            ps.close();

            } catch (SQLException | ClassNotFoundException e) {
            throw new RuntimeException(e);
        }

    }
}

