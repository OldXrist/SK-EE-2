package id.check.servlets.cards;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Objects;

@WebServlet("/ORGCARDServlet")
public class ORGCARDServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();
        HttpSession sesh = req.getSession();
        String email = String.valueOf(sesh.getAttribute("sessionUser"));
        String role = String.valueOf(sesh.getAttribute("role"));

        try {
            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/SK", "postgres", "111");

            switch (role) {
                case "АУ": {
                    String sql = "SELECT * FROM au WHERE email = ?";
                    PreparedStatement ps = c.prepareStatement(sql);
                    ps.setString(1, email);
                    ResultSet rs = ps.executeQuery();
                    while (rs.next()) {
                        out.println(rs.getString(3));
                        out.println(rs.getLong(4));
                        out.println(rs.getString(5));
                        out.println(rs.getString(6));
                        out.println(rs.getString(7));
                    }
                    rs.close();
                    ps.close();
                    break;
                }
                case "ИП": {
                    String sql = "SELECT * FROM ip WHERE email = ?";
                    PreparedStatement ps = c.prepareStatement(sql);
                    ps.setString(1, email);
                    ResultSet rs = ps.executeQuery();
                    while (rs.next()) {
                        out.println(rs.getString(14));
                        out.println(rs.getLong(15));
                        out.println(rs.getString(18));
                    }
                    rs.close();
                    ps.close();
                    break;
                }
                case "ФЛ": {
                    String sql = "SELECT * FROM fl WHERE email = ?";
                    PreparedStatement ps = c.prepareStatement(sql);
                    ps.setString(1, email);
                    ResultSet rs = ps.executeQuery();
                    while (rs.next()) {
                        out.println(rs.getString(14));
                        out.println(rs.getLong(15));
                        out.println(rs.getString(18));
                    }
                    rs.close();
                    ps.close();
                    break;
                }
                case "ЮЛ": {
                    String sql = "SELECT * FROM ql WHERE email = ?";
                    PreparedStatement ps = c.prepareStatement(sql);
                    ps.setString(1, email);
                    ResultSet rs = ps.executeQuery();
                    while (rs.next()) {
                        out.println(rs.getLong(3));
                        out.println(rs.getLong(4));
                        out.println(rs.getString(5));
                        out.println(rs.getString(6));
                        out.println(rs.getString(7));
                        out.println(rs.getString(8));
                        out.println(rs.getString(9));
                    }
                    rs.close();
                    ps.close();
                    break;
                }
            }

            out.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
