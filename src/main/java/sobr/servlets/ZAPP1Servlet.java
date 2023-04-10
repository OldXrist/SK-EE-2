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

import static psql.connection.connect;

@WebServlet(name = "ZAPP1Servlet", value = "/ZAPP1Servlet")
public class ZAPP1Servlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();
        HttpSession sesh = req.getSession();
        String sk = req.getParameter("sk");
        String email = String.valueOf(sesh.getAttribute("sessionUser"));

        try {
            Connection c = connect();

             String sql = "SELECT id FROM uch WHERE email = ? AND id = ?";
             PreparedStatement ps = c.prepareStatement(sql);
             ps.setString(1, email);
            ps.setString(2, sk);
             ResultSet rs = ps.executeQuery();

             if (rs.next()){
                out.println(1);
             }

             rs.close();
             ps.close();
            c.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}
