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

@WebServlet(name = "LKQLServlet", value = "/LKQLServlet")
public class LKQLServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();
        HttpSession sesh = req.getSession();
        String email = String.valueOf(sesh.getAttribute("sessionUser"));

        try {
            Class.forName("org.postgresql.Driver");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres", "postgres", "postgresql");
            Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres", "postgres", "111");

            String sql = "SELECT * FROM ql WHERE email = ?";

           /*
           switch (role) {
                case "ЮЛ":
                    sql = "SELECT * FROM ql WHERE email = ?";
                    break;
                case "ИП":
                    sql = "SELECT * FROM ip WHERE email = ?";
                    break;
                case "ФЛ":
                    sql = "SELECT * FROM fl WHERE email = ?";
                    break;
                case "АУ":
                    sql = "SELECT * FROM au WHERE email = ?";
                    break;
                // TODO: 04.10.2022 default redirect to 404
            }

            */

            PreparedStatement ps = c.prepareStatement(sql);

            ps.setString(1, email);
            ResultSet rs = ps.executeQuery();

            while (rs.next()){
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
            out.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}
