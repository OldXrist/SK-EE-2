package id.check.servlets.lk;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

@WebServlet(name = "ApplicationUpdServlet", value = "/ApplicationUpdServlet")
public class ApplicationUpdServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        String status = req.getParameter("status");
        String id = req.getParameter("appId");
        String canvote = req.getParameter("canVote");
        int appId = Integer.parseInt(id);

        try{
            Class.forName("org.postgresql.Driver");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres2", "postgres", "postgresql");
            Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/SK", "postgres", "111");

            String sql = "UPDATE uch SET status = ?, canvote = ? WHERE id_uch = ?";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setString(1, status);
            ps.setString(2, canvote);
            ps.setInt(3, appId);

            ps.executeUpdate();

            ps.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
    }
}
