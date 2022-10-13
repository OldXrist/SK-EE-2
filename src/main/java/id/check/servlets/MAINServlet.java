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

        try {
            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/SK", "postgres", "111");
            // TODO: 03.10.2022

            String sql = "";
            switch (role) {
                case "ЮЛ":
                    sql = "SELECT poln_naim FROM ql WHERE email = ?";
                    break;
                case "ИП":
                    sql = "SELECT name FROM ip WHERE email = ?";
                    break;
                case "ФЛ":
                    sql = "SELECT name FROM fl WHERE email = ?";
                    break;
                case "АУ":
                    sql = "SELECT name FROM au WHERE email = ?";
                    break;
                case "admin":
                    sql = "SELECT firstname FROM adminaccounts WHERE email = ?";
                    break;
                case "operator":
                    sql = "SELECT firstname FROM adminaccounts WHERE email = ?";
                    break;
                default:
                    sql = "SELECT poln_naim FROM ql WHERE email = ?";
                    break;
            }

            PreparedStatement ps = c.prepareStatement(sql);

            ps.setString(1, email);
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                if (role.equals("ЮЛ")) {
                    String naim = rs.getString("poln_naim");
                    out.println(naim);
                } else if (role.equals("admin") || role.equals("operator")){
                    String name = rs.getString("firstname");
                    out.println(name);
                }
                else {
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
