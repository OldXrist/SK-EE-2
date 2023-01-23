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

@WebServlet(name = "ZAPPRServlet", value = "/ZAPPRServlet")
public class ZAPPRServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();

        HttpSession sesh = req.getSession();
        String email1 = String.valueOf(sesh.getAttribute("sessionUser"));
        String sk = req.getParameter("sk");
        int num = Integer.parseInt(sk);

        try{
            Connection c = connect();

            String sql = "SELECT email, type_uch, status, date, id_uch FROM uch WHERE id = ? ORDER BY id_uch;";
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
                        String sql1 = "SELECT poln_naim FROM ql WHERE email = ?";
                        PreparedStatement ps1 = c.prepareStatement(sql1);
                        ps1.setString(1, email);
                        ResultSet rs1 = ps1.executeQuery();
                        while (rs1.next()){
                            out.println(rs1.getString(1));
                        };
                        break;
                    case "ИП":
                        String sql2 = "SELECT famil, name, otch FROM ip WHERE email = ?";
                        PreparedStatement ps2 = c.prepareStatement(sql2);
                        ps2.setString(1, email);
                        ResultSet rs2 = ps2.executeQuery();
                        while (rs2.next()){
                            out.println(rs2.getString(1));
                            out.println(rs2.getString(2));
                            out.println(rs2.getString(3));
                        };
                        break;
                    case "ФЛ":
                        String sql3 = "SELECT famil, name, otch FROM fl WHERE email = ?";
                        PreparedStatement ps3 = c.prepareStatement(sql3);
                        ps3.setString(1, email);
                        ResultSet rs3 = ps3.executeQuery();
                        while (rs3.next()){
                            out.println(rs3.getString(1));
                            out.println(rs3.getString(2));
                            out.println(rs3.getString(3));
                        };
                        break;
                    case "АУ":
                        String sql4 = "SELECT famil, name, otch FROM au WHERE email = ?";
                        PreparedStatement ps4 = c.prepareStatement(sql4);
                        ps4.setString(1, email);
                        ResultSet rs4 = ps4.executeQuery();
                        while (rs4.next()){
                            out.println(rs4.getString(1));
                            out.println(rs4.getString(2));
                            out.println(rs4.getString(3));
                        };
                        break;
                }
                out.println(rs.getString(5));
            }

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
    }
}
