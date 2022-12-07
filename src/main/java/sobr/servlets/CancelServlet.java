package sobr.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

@WebServlet(name = "CancelServlet", value = "/CancelServlet")
public class CancelServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        String cause = req.getParameter("cause");
        String s = req.getParameter("sk");
        long sk = Long.parseLong(s);
        String status = "Отменено организатором";

        try {
            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/SK", "postgres", "111");

            String sql = "UPDATE sobr_org SET cancel = ? AND status = ? WHERE id = ?";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setString(1, cause);
            ps.setString(2, status);
            ps.setLong(3, sk);

            ps.executeUpdate();

            ps.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}
