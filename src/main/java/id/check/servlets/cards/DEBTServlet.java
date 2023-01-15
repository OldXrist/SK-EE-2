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
            Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.125/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/SK", "postgres", "111");

            String sql = "SELECT naim_orb_suda, nomer_dela, osn_dlia_sobr, type_dolzh, famil, name, otch, pocht_adres, inn, snils, ogrnip, poln_naum, qr_adres, ogrn, type_sobr " +
                    "FROM sobr_org WHERE id = ?";
            PreparedStatement ps = c.prepareStatement(sql);
            ps.setLong(1, sk);

            ResultSet rs = ps.executeQuery();

            while (rs.next()){
                out.println(rs.getString(1));
                out.println(rs.getString(2));
                out.println(rs.getString(3));
                out.println(rs.getString(4));
                out.println(rs.getString(5));
                out.println(rs.getString(6));
                out.println(rs.getString(7));
                out.println(rs.getString(8));
                out.println(rs.getLong(9));
                out.println(rs.getLong(10));
                out.println(rs.getLong(11));
                out.println(rs.getString(12));
                out.println(rs.getString(13));
                out.println(rs.getLong(14));
                out.println(rs.getString(15));
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
