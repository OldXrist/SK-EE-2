package id.check.servlets.lk;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import static psql.connection.connect;

@WebServlet(name = "EmailCheckServlet", value = "/EmailCheckServlet")
public class EmailCheckServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();

        String email = req.getParameter("email");

        try {
            Connection c = connect();

            String sql = "SELECT email FROM main WHERE email = ?";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setString(1, email);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                out.println("Почта уже существует");
            }

            rs.close();
            ps.close();
            out.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}
