package sobr.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import static psql.connection.connect;

@WebServlet(name = "DraftDataOrgServlet", value = "/DraftDataOrgServlet")
public class DraftDataOrgServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();
        int num = Integer.parseInt(req.getParameter("num"));

        try{
            Connection c = connect();

            String sql = "SELECT data_u_vrem_sobr, povestk_dnia, nachal_podach_zaiv, okonch_podach_zaiv, nachal_priem_bul, okonch_priem_bul, data_podpic_protakol, participants, naim_orb_suda, nomer_dela, osn_dlia_sobr, type_dolzh, famil, name, otch, pocht_adres, inn, snils, ogrnip, ogrn, poln_naum, qr_adres FROM sobr_org WHERE id = ?;";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setInt(1, num);
            ResultSet rs = ps.executeQuery();

            while (rs.next()){
                out.println(rs.getObject(1));
                out.println(rs.getObject(2));
                out.println(rs.getObject(3));
                out.println(rs.getObject(4));
                out.println(rs.getObject(5));
                out.println(rs.getObject(6));
                out.println(rs.getObject(7));
                out.println(rs.getInt(8));
                out.println(rs.getString(9));
                out.println(rs.getString(10));
                out.println(rs.getString(11));
                out.println(rs.getString(12));
                out.println(rs.getString(13));
                out.println(rs.getString(14));
                out.println(rs.getString(15));
                out.println(rs.getString(16));
                out.println(rs.getLong(17));
                out.println(rs.getLong(18));
                out.println(rs.getLong(19));
                out.println(rs.getLong(20));
                out.println(rs.getString(21));
                out.println(rs.getString(22));
            }

            rs.close();
            ps.close();

            String qSql = "SELECT questions FROM questions WHERE id = ?";
            PreparedStatement qPs = c.prepareStatement(qSql);

            qPs.setInt(1, num);
            ResultSet qRs = qPs.executeQuery();

            while (qRs.next()){
                out.println(qRs.getString(1));
            }

            qRs.close();
            qPs.close();

            String emailSql = "SELECT email FROM email_send WHERE id_sobr = ?";
            PreparedStatement emailPs = c.prepareStatement(emailSql);

            emailPs.setInt(1, num);
            ResultSet emailRs = emailPs.executeQuery();

            out.println("emails");

            while (emailRs.next()){
                out.println(emailRs.getString(1));
            }

            emailRs.close();
            emailPs.close();

            c.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
    }
}
