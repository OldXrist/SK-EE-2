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
import java.time.LocalDateTime;

import static psql.connection.connect;

@WebServlet(name = "NEWAPPServlet", value = "/NEWAPPServlet")
public class NEWAPPServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        HttpSession sesh = req.getSession();
        String role = String.valueOf(sesh.getAttribute("role"));
        String email = String.valueOf(sesh.getAttribute("sessionUser"));
        String s = req.getParameter("snum");
        long sk = Long.parseLong(s);
        String uchStatus = req.getParameter("status");
        String behalf = req.getParameter("beh");
        String appStatus = req.getParameter("appStatus");
        LocalDateTime ldt = LocalDateTime.now();

        try {
            Connection c = connect();

            String sql = "INSERT INTO uch VALUES (?, ?, ?, ?, ?, ?, ?)";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setLong(1, sk);
            ps.setString(2, email);
            ps.setString(3, role);
            ps.setString(4, appStatus);
            ps.setString(5, behalf);
            ps.setString(6, uchStatus);
            ps.setObject(7, ldt);

            ps.executeUpdate();

            ps.close();
            c.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}
