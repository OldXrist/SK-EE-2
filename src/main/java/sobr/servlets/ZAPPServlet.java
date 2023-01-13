package sobr.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

@WebServlet(name = "ZAPPServlet", value = "/ZAPPServlet")
public class ZAPPServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();
        HttpSession sesh = req.getSession();
        String role = String.valueOf(sesh.getAttribute("role"));
        String email = String.valueOf(sesh.getAttribute("sessionUser"));

        try {
            Class.forName("org.postgresql.Driver");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres2", "postgres", "postgresql");
            Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.125/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/SK", "postgres", "111");

            switch (role){
                case "ЮЛ":
                    String sql1 = "SELECT poln_naim, ur_addr, pocht_adres, inn, ogrn, phone FROM ql WHERE email = ?";
                    PreparedStatement ps1 = c.prepareStatement(sql1);
                    ps1.setString(1, email);
                    ResultSet rs1 = ps1.executeQuery();
                    while (rs1.next()){
                        out.println(role);
                        out.println(rs1.getString(1));
                        out.println(rs1.getString(2));
                        out.println(rs1.getString(3));
                        out.println(rs1.getString(4));
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
                        out.println(role);
                        out.println(rs2.getString(1));
                        out.println(rs2.getString(2));
                        out.println(rs2.getString(3));
                        out.println(rs2.getLong(4));
                        out.println(rs2.getLong(5));
                        out.println(rs2.getString(6));
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
                    String sql3 = "SELECT famil, name, otch, ser, num, date_pass, kem_vudan, phone FROM fl WHERE email = ?";
                    PreparedStatement ps3 = c.prepareStatement(sql3);
                    ps3.setString(1, email);
                    ResultSet rs3 = ps3.executeQuery();
                    while (rs3.next()){
                        out.println(role);
                        out.println(rs3.getString(1));
                        out.println(rs3.getString(2));
                        out.println(rs3.getString(3));
                        out.println(rs3.getLong(4));
                        out.println(rs3.getLong(5));
                        out.println(rs3.getString(6));
                        out.println(rs3.getString(7));
                        out.println(rs3.getString(8));
                        out.println(email);
                    };
                    break;
            }

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}
