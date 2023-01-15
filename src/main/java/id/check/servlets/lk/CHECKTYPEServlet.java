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

@WebServlet(name = "CHECKTYPEServlet", value = "/CHECKTYPEServlet")
public class CHECKTYPEServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();
        HttpSession sesh = req.getSession();
        String type = String.valueOf(sesh.getAttribute("type"));
        String email = String.valueOf(sesh.getAttribute("sessionUser"));
        String s = req.getParameter("sk");
        long sk = Long.parseLong(s);

        try {
            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres", "postgres", "111");

            String sql1 = "SELECT * FROM sobr_org WHERE email_org = ? and id = ?";
            PreparedStatement ps1 = c.prepareStatement(sql1);

            ps1.setString(1, email);
            ps1.setLong(2, sk);

            ResultSet rs1 = ps1.executeQuery();

            while (rs1.next()){
                out.println('y'); // TODO: 09.11.2022 проверить для левых оргов
            }
            rs1.close();
            ps1.close();
            out.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}
