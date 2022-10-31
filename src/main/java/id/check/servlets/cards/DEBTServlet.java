package id.check.servlets.cards;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

@WebServlet(name = "DEBTServlet", value = "/DEBTServlet")
public class DEBTServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();

        String s = req.getParameter("sk");
        long sk = Long.parseLong(s);

        try {
            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/SK", "postgres", "111");

            String sql = "SELECT naim_orb_suda, nomer_dela, osn_dlia_sobr, type_dolzh, email_org, type_org, famil, name, otch, pocht_adres, inn, snils, ogrnip, poln_naum, qr_adres, ogrn, type_sobr " +
                    "FROM sobr_org WHERE id = ?";
            PreparedStatement ps = c.prepareStatement(sql);
            ps.setLong(1, sk);

            ResultSet rs = ps.executeQuery();

            while (rs.next()){
                out.println(rs.getString(5));
                out.println(rs.getString(6));
            }

            out.close();
            rs.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}
