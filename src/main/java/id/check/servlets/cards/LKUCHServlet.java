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

import static psql.connection.connect;

@WebServlet(name = "LKUCHServlet", value = "/LKUCHServlet")
public class LKUCHServlet extends HttpServlet {

    public static String getIdentity(String sql, String email){
        String data = null;

        try{
            Connection c = connect();

            PreparedStatement ps = c.prepareStatement(sql);
            ps.setString(1, email);
            ResultSet rs = ps.executeQuery();
            if (rs.next()){
                data = rs.getString(1) + "\n" + rs.getString(2) + "\n" + rs.getString(3);
            };

            c.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
        return data;
    }

    public static String getIdentityUl(String sql, String email){
        String data = null;

        try{
            Connection c = connect();

            PreparedStatement ps = c.prepareStatement(sql);
            ps.setString(1, email);
            ResultSet rs = ps.executeQuery();
            if (rs.next()){
                data = rs.getString(1) + "\nnull" + "\nnull";
            };

            c.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
        return data;
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();

        HttpSession sesh = req.getSession();
        String email1 = String.valueOf(sesh.getAttribute("sessionUser"));

        try{
            Connection c = connect();

            String sql = "SELECT id, data_u_vrem_sobr,nachal_podach_zaiv, okonch_podach_zaiv, type_dolzh, famil, name, otch, poln_naum, email_org, type_org, type_sobr, status\n" +
                    "FROM sobr_org\n" +
                    "WHERE id IN (SELECT id FROM uch WHERE email = ?)" +
                    "ORDER BY id;";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setString(1, email1);
            ResultSet rs = ps.executeQuery();

            while (rs.next()){
                int id = rs.getInt(1);
                out.println(id);
                out.println(rs.getObject(2));
                out.println(rs.getObject(3));
                out.println(rs.getObject(4));
                out.println(rs.getString(5));
                out.println(rs.getString(6));
                out.println(rs.getString(7));
                out.println(rs.getString(8));
                out.println(rs.getString(9));
                String email = rs.getString(10);
                String type = rs.getString(11);
                out.println(rs.getString(12));
                out.println(type);
                switch (type){
                    case "ЮЛ":
                        out.println(getIdentityUl("SELECT poln_naim FROM ql WHERE email = ?;", email));
                        break;
                    case "ИП":
                        out.println(getIdentity("SELECT famil, name, otch FROM ip WHERE email = ?;", email));
                        break;
                    case "ФЛ":
                        out.println(getIdentity("SELECT famil, name, otch FROM fl WHERE email = ?;", email));
                        break;
                    case "АУ":
                        out.println(getIdentity("SELECT famil, name, otch FROM au WHERE email = ?;", email));
                        break;
                }
                String sql5 = "SELECT status FROM uch WHERE email = ? AND id = ?;";
                PreparedStatement ps5 = c.prepareStatement(sql5);

                ps5.setString(1, email1);
                ps5.setInt(2, id);

                ResultSet rs5 = ps5.executeQuery();
                while (rs5.next()){
                    out.println(rs5.getString(1));
                }
                rs5.close();
                ps5.close();

                out.println(rs.getString(13));
                c.close();
            }

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
    }
}
