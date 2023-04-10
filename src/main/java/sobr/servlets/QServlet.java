package sobr.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import java.sql.*;
import java.io.IOException;
import java.io.PrintWriter;

import static psql.connection.connect;

@WebServlet("/QServlet")
public class QServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();

        long sk = Long.parseLong(req.getParameter("sk"));

        try {
            Connection c = connect();

            String sql = "SELECT questions FROM questions WHERE id = ?";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setLong(1, sk);

            ResultSet rs = ps.executeQuery();

            while (rs.next()){
                out.println(rs.getString(1));
            }

            rs.close();
            ps.close();
            c.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}