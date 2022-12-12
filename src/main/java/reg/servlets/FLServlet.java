package reg.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.time.LocalDateTime;

@WebServlet("/FLServlet")
public class FLServlet extends HttpServlet {
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
        String nomer = req.getParameter("nomer");
        String kem_vudan = req.getParameter("kem_vidan");
        String pass = req.getParameter("pass");

        String date = req.getParameter("data");
        LocalDateTime ldt = LocalDateTime.now();

        String unn = req.getParameter("unn");
        long inn = Long.parseLong(unn);

        try{
            Class.forName("org.postgresql.Driver");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/SK", "postgres", "111");
            Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres2", "postgres", "postgresql");

            String sql = "INSERT INTO main Values (?, ?, ?, ?)";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setString(1, role_users);
            ps.setString(2, pass);
            ps.setString(3, email);
            ps.setString(4, type_users);

            ps.executeUpdate();

            String sql1 = "INSERT INTO fl Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            ps = c.prepareStatement(sql1);


            ps.setString(1, type_users);
            ps.setString(2, role_users);
            ps.setLong(3, inn);
            ps.setString(4, pocht_adres);
            ps.setString(5, telephon);
            ps.setString(6, email);
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

            String[] s = seria.split(" ");
            String se = s[0] + s[1];
            int ser = Integer.parseInt(se);
            ps.setInt(11, ser);

            String[] n = nomer.split(" ");
            String nom = n[0] + n[1];
            int num = Integer.parseInt(nom);
            ps.setInt(12, num);

            ps.setString(13, kem_vudan);

            ps.setObject(14, ldt);
            ps.setObject(15, ldt);
            ps.setString(16, date);

            ps.executeUpdate();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
    }
}
