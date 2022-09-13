package reg.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@WebServlet("/ULServ")
public class ULServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        String type_users = req.getParameter("type_users");
        String role_users = req.getParameter("role_users");

        String unn = req.getParameter("unn");
        long inn = Long.parseLong(unn);

        try{
            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres", "postgres", "postgresql");

            String sql = "INSERT INTO reg Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            PreparedStatement ps = c.prepareStatement(sql);


            ps.setString(1, type_users);
            ps.setString(2, role_users);
            ps.setLong(3, inn);

            String snils = req.getParameter("snils");
            if (snils != null) {
                String[] snl = snils.split(" ");
                String snil = "";
                for (int i = 0; i < 4; i++){
                    snil += snl[i];
                }
                long isnils = Long.parseLong(snil);
                ps.setLong(4, isnils);
            } else ps.setNull(4, Types.BIGINT);


            String reg_nomer_ay = req.getParameter("reg_nomer_au");
            if (reg_nomer_ay != null) {
                String[] r_n = reg_nomer_ay.split(" ");
                String reg = r_n[0] + r_n[1];
                int reg_nom = Integer.parseInt(reg);
                ps.setInt(5, reg_nom);
            } else ps.setNull(5, Types.BIGINT);


            String code_ogrn = req.getParameter("code_ogrn");
            if (code_ogrn != null) {
                 long ogrn = Long.parseLong(code_ogrn);
                ps.setLong(6, ogrn);
            } else ps.setNull(6, Types.BIGINT);

            String code_ogrnip = req.getParameter("code_ogrnip");
            if (code_ogrnip != null) {
                long ogrnip = Long.parseLong(code_ogrnip);
                ps.setLong(7, ogrnip);
            } else ps.setNull(7, Types.BIGINT);

            String famil = req.getParameter("famil");
            if(famil != null) {
                ps.setString(8, famil);
            } else ps.setNull(8, Types.VARCHAR);

            String name = req.getParameter("name");
            if (name != null) {
                ps.setString(9, name);
            } else ps.setNull(9, Types.VARCHAR);

            String otch = req.getParameter("otch");
            if (otch != null) {
                ps.setString(10, otch);
            } else ps.setNull(10, Types.VARCHAR);

            String poln_naim = req.getParameter("poln_naim");
            if (poln_naim != null) {
                ps.setString(11, poln_naim);
            } else ps.setNull(11, Types.VARCHAR);

            String qr_adrs = req.getParameter("qr_adrs");
            if (qr_adrs != null) {
                ps.setString(12, qr_adrs);
            } else ps.setNull(12, Types.VARCHAR);

            String pocht_adres = req.getParameter("pocht_adres");
            if (pocht_adres != null) {
                ps.setString(13, pocht_adres);
            } else ps.setNull(13, Types.VARCHAR);

            String telephon = req.getParameter("telephon");
            if (telephon != null) {
                ps.setString(14, telephon);
            } else ps.setNull(14, Types.VARCHAR);

            String naim_org = req.getParameter("naim_org");
            if (naim_org != null){
                ps.setString(15, naim_org);
            } else ps.setNull(15, Types.VARCHAR);

            String email = req.getParameter("email");
            if (email != null) {
                ps.setString(16, email);
            } else ps.setNull(16, Types.VARCHAR);

            String seria = req.getParameter("seria");
            if (seria != null) {
                String[] s = seria.split(" ");
                String se = s[0] + s[1];
                int ser = Integer.parseInt(se);
                ps.setInt(17, ser);
            } else ps.setNull(17, Types.BIGINT);

            String nomer = req.getParameter("nomer");
            if (nomer != null) {
                String[] n = nomer.split(" ");
                String nom = n[0] + n[1];
                int num = Integer.parseInt(nom);
                ps.setInt(18, num);
            } else ps.setNull(18, Types.BIGINT);

            LocalDate ld = LocalDate.now();
            ps.setObject(19, ld);

            String kem_vudan = req.getParameter("kem_vidan");
            if (kem_vudan != null) {
                ps.setString(20, kem_vudan);
            } else ps.setNull(20, Types.VARCHAR);

            ps.setString(21, "pass");

            LocalDateTime ldt = LocalDateTime.now();
            ps.setObject(22, ldt);

            ps.setObject(23, ldt);

            ps.executeUpdate();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
    }
}