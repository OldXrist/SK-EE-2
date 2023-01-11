package sobr.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

@WebServlet(name = "AnswersCheckServlet", value = "/AnswersCheckServlet")
public class AnswersCheckServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();

        HttpSession sesh = req.getSession();
        String email = String.valueOf(sesh.getAttribute("sessionUser"));

        long sk = Long.parseLong(req.getParameter("sk"));

        try {
            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/SK", "postgres", "111");

            String sql = "SELECT answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10 FROM uch WHERE id = ? AND email = ?";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setLong(1, sk);
            ps.setString(2, email);

            ResultSet rs = ps.executeQuery();

            while (rs.next()){
                out.println(rs.getString(1));
            }

            rs.close();
            ps.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}
