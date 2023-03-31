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
import static reg.servlets.getUserId.getID;

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
        String inn = req.getParameter("inn");
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
        String volume = req.getParameter("vol");
        String typeSobr = req.getParameter("typeSobr");
        int demandSum = Integer.parseInt(req.getParameter("demandSum"));

        LocalDateTime dateS = null;
        LocalDateTime dateZ = null;
        LocalDateTime dateZ2 = null;
        LocalDateTime dateB = null;
        LocalDateTime dateB2 = null;
        LocalDateTime dateP = null;
        LocalDate dateEfrsb = null;

        if (!dateSobr.equals("")) {
            dateS = LocalDateTime.parse(dateSobr);
        }
        if (!date1.equals("")) {
            dateZ = LocalDateTime.parse(date1);
        }
        if (!date2.equals("")) {
            dateZ2 = LocalDateTime.parse(date2);
        }
        if (!date3.equals("")) {
            dateB = LocalDateTime.parse(date3);
        }
        if (!date4.equals("")) {
            dateB2 = LocalDateTime.parse(date4);
        }
        if (!date5.equals("")) {
            dateP = LocalDateTime.parse(date5);
        }
        if (!efrsbDate.equals("")) {
            dateEfrsb = LocalDate.parse(efrsbDate);
        }

        try{
            Connection c = connect();

            String sql1 = "INSERT INTO sobr_org" +
                    "(data_u_vrem_sobr, povestk_dnia, nachal_podach_zaiv, okonch_podach_zaiv, nachal_priem_bul, okonch_priem_bul, data_podpic_protakol, iden_nomer, data_razm_efrsb, naim_orb_suda, nomer_dela, osn_dlia_sobr, type_dolzh, email_org, type_org, famil, name, otch, pocht_adres, inn, snils, ogrnip, poln_naum, qr_adres, ogrn, type_sobr, status, participants, org_id, demand_amount) " +
                    "Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            PreparedStatement ps = c.prepareStatement(sql1);

            if (dateS != null) {
                ps.setObject(1, dateS);
            } else ps.setNull(1, Types.DATE);

            if (!povestka.equals("")) {
                ps.setString(2, povestka);
            } else ps.setNull(2, Types.VARCHAR);

            if (dateZ != null) {
                ps.setObject(3, dateZ);
            } else ps.setNull(3, Types.DATE);

            if (dateZ2 != null) {
                ps.setObject(4, dateZ2);
            } else ps.setNull(4, Types.DATE);

            if (dateB != null) {
                ps.setObject(5, dateB);
            } else ps.setNull(5, Types.DATE);

            if (dateB2 != null) {
                ps.setObject(6, dateB2);
            } else ps.setNull(6, Types.DATE);

            if (dateP != null) {
                ps.setObject(7, dateP);
            } else ps.setNull(7, Types.DATE);

            // TODO EFRSB
            //ps.setLong(8, regEfrsb);
            //ps.setObject(9, dateEfrsb);

            ps.setLong(8, 123);
            ps.setObject(9, dateEfrsb);

            if (!court.equals("")) {
                ps.setString(10, court);
            } else ps.setNull(10, Types.VARCHAR);

            if (!caseNum.equals("")) {
                ps.setString(11, caseNum);
            } else ps.setNull(11, Types.VARCHAR);

            if (!baseForSobr.equals("")) {
                ps.setString(12, baseForSobr);
            } else ps.setNull(12, Types.VARCHAR);

            if (!typeDol.equals("")) {
                ps.setString(13, typeDol);
            } else ps.setNull(13, Types.VARCHAR);

            if (!emailOrg.equals("")) {
                ps.setString(14, emailOrg);
            } else ps.setNull(14, Types.VARCHAR);

            if (!role.equals("")) {
                ps.setString(15, role);
            } else ps.setNull(15, Types.VARCHAR);

            if (famil != null) {
                if (!famil.equals("")) {
                    ps.setString(16, famil);
                } else ps.setNull(16, Types.VARCHAR);
            } else ps.setNull(16, Types.VARCHAR);

            if (name != null) {
                if (!name.equals("")) {
                    ps.setString(17, name);
                } else ps.setNull(17, Types.VARCHAR);
            } else ps.setNull(17, Types.VARCHAR);

            if (otch != null) {
                if (!otch.equals("")) {
                    ps.setString(18, otch);
                } else ps.setNull(18, Types.VARCHAR);
            } else ps.setNull(18, Types.VARCHAR);

            if (!post.equals("")) {
                ps.setString(19, post);
            } else ps.setNull(19, Types.VARCHAR);

            if (!inn.equals("")) {
                ps.setLong(20, Long.parseLong(inn));
            } else ps.setNull(20, Types.BIGINT);

            if (snils != null) {
                if (!snils.equals("")) {
                    String[] snl = snils.split(" ");
                    String snil = "";
                    for (int i = 0; i < 4; i++) {
                        snil += snl[i];
                    }
                    long isnils = Long.parseLong(snil);
                    ps.setLong(21, isnils);
                } else ps.setNull(21, Types.BIGINT);
            } else ps.setNull(21, Types.BIGINT);

            if (ogip != null) {
                if (!ogip.equals("")) {
                    long ogrnip = Long.parseLong(ogip);
                    ps.setLong(22, ogrnip);
                } else ps.setNull(22, Types.BIGINT);
            } else ps.setNull(22, Types.BIGINT);

            if (polnNaim != null) {
                if (!polnNaim.equals("")) {
                    ps.setString(23, polnNaim);
                } else ps.setNull(23, Types.VARCHAR);
            } else ps.setNull(23, Types.VARCHAR);

            if (urAdr != null) {
                if (!urAdr.equals("")) {
                    ps.setString(24, urAdr);
                } else ps.setNull(24, Types.VARCHAR);
            } else ps.setNull(24, Types.VARCHAR);

            if (og != null) {
                long ogrn = Long.parseLong(og);
                ps.setLong(25, ogrn);
            } else ps.setNull(25, Types.BIGINT);

            ps.setString(26, typeSobr);

            if (!status.equals("")) {
                ps.setString(27, status);
            } else ps.setNull(27, Types.VARCHAR);

            if (!volume.equals("")) {
                ps.setInt(28, Integer.parseInt(volume));
            } else ps.setNull(28, Types.INTEGER);

            ps.setInt(29, getID(emailOrg));
            ps.setInt(30, demandSum);

            ps.executeUpdate();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
    }
}
