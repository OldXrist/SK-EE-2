package sobr.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Types;
import java.time.LocalDate;
import java.time.LocalDateTime;

import static psql.connection.connect;

@WebServlet("/ZServlet")
public class ZServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        HttpSession sesh = req.getSession();
        String emailOrg = String.valueOf(sesh.getAttribute("sessionUser"));
        String role = String.valueOf(sesh.getAttribute("role"));

        String dateSobr = req.getParameter("dateSobr");
        String povestka = req.getParameter("povestka");
        String date1 = req.getParameter("dateZ");
        String date2 = req.getParameter("dateZ2");
        String date3 = req.getParameter("dateB");
        String date4 = req.getParameter("dateB2");
        String date5 = req.getParameter("dateP");

        //String efrsb = req.getParameter("efrsb");
        //long regEfrsb  = Long.parseLong(efrsb);

        String efrsbDate = req.getParameter("efrsbDate");

        String court = req.getParameter("court");

        String caseNum = req.getParameter("caseNum");

        String baseForSobr = req.getParameter("baseForSobr");
        String typeDol = req.getParameter("typeDol");

        String unn = req.getParameter("inn");
        long inn = Long.parseLong(unn);

        String famil = req.getParameter("famil");
        String name = req.getParameter("name");
        String otch = req.getParameter("otch");
        String post = req.getParameter("post");
        String snils = req.getParameter("snils");
        String og = req.getParameter("ogrn");
        String ogip = req.getParameter("ogrnip");
        String polnNaim = req.getParameter("polnNaim");
        String urAdr = req.getParameter("urAdr");
        String status = req.getParameter("status");
        long volume = Long.parseLong(req.getParameter("vol"));


        LocalDateTime dateS = LocalDateTime.parse(dateSobr);
        LocalDateTime dateZ = LocalDateTime.parse(date1);
        LocalDateTime dateZ2 = LocalDateTime.parse(date2);
        LocalDateTime dateB = LocalDateTime.parse(date3);
        LocalDateTime dateB2 = LocalDateTime.parse(date4);
        LocalDateTime dateP = LocalDateTime.parse(date5);
        LocalDate dateEfrsb = LocalDate.parse(efrsbDate);

        try{
            Connection c = connect();

            String sql1 = "INSERT INTO sobr_org Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            PreparedStatement ps = c.prepareStatement(sql1);

            ps.setObject(1, dateS);
            ps.setString(2, povestka);
            ps.setObject(3, dateZ);
            ps.setObject(4, dateZ2);
            ps.setObject(5, dateB);
            ps.setObject(6, dateB2);
            ps.setObject(7, dateP);
            // TODO EFRSB
            //ps.setLong(8, regEfrsb);
            //ps.setObject(9, dateEfrsb);
            ps.setLong(8, 123);
            ps.setObject(9, dateEfrsb);
            ps.setString(10, court);
            ps.setString(11, caseNum);
            ps.setString(12, baseForSobr);
            ps.setString(13, typeDol);
            ps.setString(14, emailOrg);
            ps.setString(15, role);
            ps.setString(16, famil);
            ps.setString(17, name);
            ps.setString(18, otch);
            ps.setString(19, post);
            ps.setLong(20, inn);

            if (snils != null) {
                String[] snl = snils.split(" ");
                String snil = "";
                for (int i = 0; i < 4; i++) {
                    snil += snl[i];
                }
                long isnils = Long.parseLong(snil);
                ps.setLong(21, isnils);
            } else ps.setNull(21, Types.BIGINT);

            if (ogip != null) {
                long ogrnip = Long.parseLong(ogip);
                ps.setLong(22, ogrnip);
            } else ps.setNull(22, Types.BIGINT);

            ps.setString(23, polnNaim);
            ps.setString(24, urAdr);

            if (og != null) {
                long ogrn = Long.parseLong(og);
                ps.setLong(25, ogrn);
            } else ps.setNull(25, Types.BIGINT);

            ps.setString(26, "Заочное");

            ps.setLong(27, volume);

            ps.setString(28, status);

            ps.executeUpdate();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
    }
}
