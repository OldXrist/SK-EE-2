package login.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import java.sql.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;


@WebServlet("/AUTHServ")
public class AUTHServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter pw = new PrintWriter("C:\\Users\\manager\\Desktop\\SK_EE\\src\\main\\webapp\\scripts\\popa.txt", StandardCharsets.UTF_8);

        String email = req.getParameter("email");
        String pwd = req.getParameter("pwd");

        try {
            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres", "postgres", "postgresql");

            String sql = "SELECT email, pass FROM reg WHERE email = ? AND pass = ?";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setString(1, email);
            ps.setString(2, pwd);

            ResultSet rs = ps.executeQuery();

            res.setContentType("text/html");

            if (rs.next()) {
                pw.println(rs.getString(1));
                pw.println(rs.getString(2));
                pw.println("success");
                HttpSession sesh = req.getSession(true);
                sesh.setAttribute("currentSessionUser", email);
                res.sendRedirect("/Sobr");
                pw.println(sesh);
            } else {
                pw.println("denied");
                res.sendRedirect("/Sobr/login.html");
            }

            rs.close();
            ps.close();
            pw.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}
