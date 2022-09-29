package login.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import java.sql.*;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/AUTHServ")
public class AUTHServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();

        String email = req.getParameter("email");
        String pwd = req.getParameter("pwd");

        try {
            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres", "postgres", "postgresql");

            String sql = "SELECT email, type_users, role_users, pass FROM reg WHERE email = ? AND pass = ?";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setString(1, email);
            ps.setString(2, pwd);

            ResultSet rs = ps.executeQuery();

            //String role = rs.getString("role_users");
            //String type = rs.getString("type_users");

            if (rs.next()) {
                HttpSession sesh = req.getSession(true);
                sesh.setAttribute("sessionUser", email);
                //sesh.setAttribute("role", role);
                //sesh.setAttribute("type", type);
                out.println("JSESSIONID = " + sesh.getId());
                String upd = "UPDATE reg SET session_id = ? WHERE email = ?";
                PreparedStatement prs = c.prepareStatement(upd);
                prs.setString(1, sesh.getId());
                prs.setString(2, email);
                prs.executeUpdate();
                out.println(1);
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
