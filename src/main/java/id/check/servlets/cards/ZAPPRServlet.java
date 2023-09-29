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

import static id.check.servlets.cards.LKUCHServlet.getIdentity;
import static psql.connection.connect;

@WebServlet(name = "ZAPPRServlet", value = "/ZAPPRServlet")
public class ZAPPRServlet extends HttpServlet {

    public static String getIdentityUl(String sql, String email){
        String data = null;

        try{
            Connection c = connect();

            PreparedStatement ps = c.prepareStatement(sql);
            ps.setString(1, email);
            ResultSet rs = ps.executeQuery();
            if (rs.next()){
                data = rs.getString(1);
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

        String sk = req.getParameter("sk");
        int num = Integer.parseInt(sk);

        try{
            Connection c = connect();

            String sql = "SELECT email, type_uch, status, date, application_id FROM uch WHERE id = ? ORDER BY application_id;";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setInt(1, num);
            ResultSet rs = ps.executeQuery();

            while (rs.next()){
                String email = rs.getString(1);
                String type = rs.getString(2);
                out.println(type);
                out.println(rs.getString(3));
                out.println(rs.getString(4));
                switch (type){
                    case "ЮЛ":
                        out.println(getIdentityUl("SELECT poln_naim FROM ql WHERE email = ?;", email));
                        break;
                    case "ИП":
                        out.println(getIdentity("SELECT famil, name, otch FROM ip WHERE email = ?", email));
                        break;
                    case "ФЛ":
                        out.println(getIdentity("SELECT famil, name, otch FROM fl WHERE email = ?", email));
                        break;
                    case "АУ":
                        out.println(getIdentity("SELECT famil, name, otch FROM au WHERE email = ?", email));
                        break;
                }
                out.println(rs.getString(5));

                c.close();
            }

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
    }
}
