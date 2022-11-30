package sobr.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import java.sql.*;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/QServlet")
public class QServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();

        HttpSession sesh = req.getSession();
        String id = sesh.getId();
        String email = String.valueOf(sesh.getAttribute("sessionUser"));


        try {
            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/SK", "postgres", "111");

            String sql = "SELECT id FROM questions WHERE id = ? AND questions";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setString(1, id);

            ResultSet rs = ps.executeQuery();


            while (rs.next()){
                String role = rs.getString(1);
                if ("questions".equals(role)) {
                    sql = "SELECT * FROM questions WHERE id = ?";
                    ps = c.prepareStatement(sql);
                    ps.setString(1, email);
                    ResultSet rs3 = ps.executeQuery();
                    while (rs3.next()) {
                        out.println(role);
                        out.println(rs3.getLong(2));
                    }
                    rs3.close();
                    ps.close();
                }
            }


            rs.close();
            ps.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}