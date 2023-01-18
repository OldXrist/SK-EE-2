package login.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import java.sql.*;
import java.io.IOException;
import java.io.PrintWriter;

import reg.servlets.GFG.*;

import static reg.servlets.GFG.*;

@WebServlet("/AUTHServ")
public class AUTHServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();

        String email = req.getParameter("email");
        String pass = req.getParameter("pwd");

        try {
            Class.forName("org.postgresql.Driver");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres2", "postgres", "postgresql");
            Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.125/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/SK", "postgres", "111");

            String sql = "SELECT pass, salt, role_users, type_users FROM main WHERE email = ? AND auth = true";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setString(1, email);

            ResultSet rs = ps.executeQuery();
            /*
            if (rs.next()) {
                HttpSession sesh = req.getSession(true);
                sesh.removeAttribute("email");
                sesh.removeAttribute("role");
                sesh.removeAttribute("type");
                sesh.setAttribute("sessionUser", email);
                sesh.setAttribute("role", rs.getString("role_users"));
                sesh.setAttribute("type", rs.getString("type_users"));
                out.println("JSESSIONID = " + sesh.getId());
                out.println(1);
            }

             */

            while (rs.next()){
                String hash = rs.getString(1);
                String salt = rs.getString(2);

                byte[] newSalt = fromHex(salt);
                String newHash = getSecurePassword(pass, newSalt);
                out.println(hash);
                out.println(newHash);
                if (hash.equals(newHash)){
                    HttpSession sesh = req.getSession(true);
                    sesh.removeAttribute("email");
                    sesh.removeAttribute("role");
                    sesh.removeAttribute("type");
                    sesh.setAttribute("sessionUser", email);
                    sesh.setAttribute("role", rs.getString("role_users"));
                    sesh.setAttribute("type", rs.getString("type_users"));
                    out.println(true);
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
