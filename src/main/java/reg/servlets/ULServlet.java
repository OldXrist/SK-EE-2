package reg.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.sql.*;
import java.time.LocalDateTime;

@WebServlet("/ULServlet")
public class ULServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        String type_users = req.getParameter("type_users");
        String role_users = req.getParameter("role_users");
        String poln_naim = req.getParameter("poln_naim");
        String qr_adrs = req.getParameter("qr_adrs");
        String pocht_adres = req.getParameter("pocht_adres");
        String telephon = req.getParameter("telephon");
        String email = req.getParameter("email");
        String pass = req.getParameter("pass");

        LocalDateTime ldt = LocalDateTime.now();

        String unn = req.getParameter("unn");
        long inn = Long.parseLong(unn);

        String code_ogrn = req.getParameter("code_ogrn");
        long ogrn = Long.parseLong(code_ogrn);

        try{
            Class.forName("org.postgresql.Driver");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres2", "postgres", "postgresql");
            Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/SK", "postgres", "111");

            String sql = "INSERT INTO main Values (?, ?, ?, ?)";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setString(1, role_users);
            ps.setString(2, pass);
            ps.setString(3, email);
            ps.setString(4, type_users);

            ps.executeUpdate();

            String sql1 = "INSERT INTO ql Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            ps = c.prepareStatement(sql1);

            ps.setString(1, type_users);
            ps.setString(2, role_users);
            ps.setLong(3, inn);
            ps.setLong(4, ogrn);
            ps.setString(5, poln_naim);
            ps.setString(6, qr_adrs);
            ps.setString(7, pocht_adres);
            ps.setString(8, telephon);
            ps.setString(9, email);
            ps.setObject(10, ldt);
            ps.setObject(11, ldt);

            ps.executeUpdate();

            HttpSession sesh = req.getSession(true);
            sesh.setAttribute("email", email);

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
    }
}