package reg.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.time.LocalDateTime;

import static reg.servlets.GFG.*;

@WebServlet("/IPServlet")
public class IPServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        String type_users = req.getParameter("type_users");
        String role_users = req.getParameter("role_users");
        String pocht_adres = req.getParameter("pocht_adres");
        String famil = req.getParameter("famil");
        String name = req.getParameter("name");
        String otch = req.getParameter("otch");
        String telephon = req.getParameter("telephon");
        String email = req.getParameter("email");
        String snils = req.getParameter("snils");
        String seria = req.getParameter("seria");
        String date = req.getParameter("data");
        String nomer = req.getParameter("nomer");
        String pass = req.getParameter("pass");

        String kem_vudan = req.getParameter("kem_vidan");
        LocalDateTime ldt = LocalDateTime.now();

        String unn = req.getParameter("unn");
        long inn = Long.parseLong(unn);

        String code_ogrnip = req.getParameter("ogrnip");
        long ogrnip = Long.parseLong(code_ogrnip);

        byte[] salt;
        try {
            salt = getSalt();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
        String encryptedPass = getSecurePassword(pass, salt);

        try{
            Class.forName("org.postgresql.Driver");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres2", "postgres", "postgresql");
            Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.125/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/SK", "postgres", "111");

            String sql = "INSERT INTO main (role_users, pass, email, type_users, salt) Values (?, ?, ?, ?, ?)";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setString(1, role_users);
            ps.setString(2, encryptedPass);
            ps.setString(3, email);
            ps.setString(4, type_users);
            ps.setString(5, toHex(salt));

            ps.executeUpdate();

            String sql1 = "INSERT INTO ip Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            ps = c.prepareStatement(sql1);


            ps.setString(1, type_users);
            ps.setString(2, role_users);
            ps.setLong(3, inn);
            ps.setString(4, telephon);
            ps.setString(5, email);
            ps.setLong(6, ogrnip);
            ps.setString(7, famil);
            ps.setString(8, name);
            ps.setString(9, otch);

            String[] snl = snils.split(" ");
            String snil = "";
            for (int i = 0; i < 4; i++){
                snil += snl[i];
            }
            long isnils = Long.parseLong(snil);
            ps.setLong(10, isnils);

            ps.setString(11, pocht_adres);

            String[] s = seria.split(" ");
            String se = s[0] + s[1];
            int ser = Integer.parseInt(se);
            ps.setInt(12, ser);

            String[] n = nomer.split(" ");
            String nom = n[0] + n[1];
            int num = Integer.parseInt(nom);
            ps.setInt(13, num);

            ps.setString(14, kem_vudan);

            ps.setObject(15, ldt);
            ps.setObject(16, ldt);
            ps.setString(17, date);

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
