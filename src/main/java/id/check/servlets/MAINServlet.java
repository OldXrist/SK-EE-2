package id.check.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

@WebServlet("/MAINServlet")
public class MAINServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();
        HttpSession sesh = req.getSession();
        String id = sesh.getId();
        String email = String.valueOf(sesh.getAttribute("sessionUser"));
        String role = String.valueOf(sesh.getAttribute("role"));
        String type = String.valueOf(sesh.getAttribute("type"));

        try {
            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres", "postgres", "postgresql");

            String sql = "SELECT name, poln_naim FROM reg WHERE session_id = ? AND email = ?";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setString(1, id);
            ps.setString(2, email);
            ResultSet rs = ps.executeQuery();

            while (rs.next()){
                if (role.equals("ЮЛ")) {
                    String naim = rs.getString("poln_naim");
                    out.println(naim);
                } else {
                    String name = rs.getString("name");
                    out.println(name);
                }
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
