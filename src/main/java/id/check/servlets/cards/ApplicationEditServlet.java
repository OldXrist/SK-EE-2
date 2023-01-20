package id.check.servlets.cards;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

import static psql.connection.connect;

@WebServlet(name = "ApplicationEditServlet", value = "/ApplicationEditServlet")
public class ApplicationEditServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();

        String id = req.getParameter("appId");
        int appId = Integer.parseInt(id);

        try{
            Connection c = connect();

            String sql = "SELECT id, type_uch, email, status FROM uch WHERE id_uch = ?";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setInt(1, appId);

            ResultSet rs = ps.executeQuery();

            while (rs.next()){
                String type = rs.getString(2);
                String email = rs.getString(3);

                out.println(rs.getString(1));
                out.println(type);
                out.println(email);
                out.println(rs.getString(4));
                switch (type){
                    case "ЮЛ":
                        String sql1 = "SELECT poln_naim, ur_addr, pocht_adres, inn, ogrn, phone FROM ql WHERE email = ?";
                        PreparedStatement ps1 = c.prepareStatement(sql1);
                        ps1.setString(1, email);
                        ResultSet rs1 = ps1.executeQuery();
                        while (rs1.next()){
                            out.println(rs1.getString(1));
                            out.println(rs1.getString(2));
                            out.println(rs1.getString(3));
                            out.println(rs1.getLong(4));
                            out.println(rs1.getLong(5));
                            out.println(rs1.getString(6));
                            out.println(email);
                        };
                        break;
                    case "ИП":
                        String sql2 = "SELECT famil, name, otch, ser, num, date_pass, kem_vudan, inn, snils, ogrnip, pocht_adres, phone FROM ip WHERE email = ?";
                        PreparedStatement ps2 = c.prepareStatement(sql2);
                        ps2.setString(1, email);
                        ResultSet rs2 = ps2.executeQuery();
                        while (rs2.next()){
                            out.println(rs2.getString(1));
                            out.println(rs2.getString(2));
                            out.println(rs2.getString(3));
                            out.println(rs2.getInt(4));
                            out.println(rs2.getInt(5));
                            out.println(rs2.getObject(6));
                            out.println(rs2.getString(7));
                            out.println(rs2.getLong(8));
                            out.println(rs2.getLong(9));
                            out.println(rs2.getLong(10));
                            out.println(rs2.getString(11));
                            out.println(rs2.getString(12));
                            out.println(email);
                        };
                        break;
                    case "ФЛ":
                        String sql3 = "SELECT famil, name, otch, ser, num, date_pass, kem_vudan, pocht_adres, inn, snils, phone FROM fl WHERE email = ?";
                        PreparedStatement ps3 = c.prepareStatement(sql3);
                        ps3.setString(1, email);
                        ResultSet rs3 = ps3.executeQuery();
                        while (rs3.next()){
                            out.println(rs3.getString(1));
                            out.println(rs3.getString(2));
                            out.println(rs3.getString(3));
                            out.println(rs3.getInt(4));
                            out.println(rs3.getInt(5));
                            out.println(rs3.getObject(6));
                            out.println(rs3.getString(7));
                            out.println(rs3.getString(8));
                            out.println(rs3.getLong(9));
                            out.println(rs3.getLong(10));
                            out.println(rs3.getString(11));
                            out.println(email);
                        };
                        break;
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
    }
}
