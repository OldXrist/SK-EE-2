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

@WebServlet(name = "ORGServlet", value = "/ORGServlet")
public class ORGServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();

        String s = req.getParameter("sk");
        long sk = Long.parseLong(s);

        try {
            Connection c = connect();

            String sql = "SELECT email_org, type_org FROM sobr_org WHERE id = ?";
            PreparedStatement ps = c.prepareStatement(sql);
            ps.setLong(1, sk);
            ResultSet rs = ps.executeQuery();

            while (rs.next()){
                String role = rs.getString(2);
                String email = rs.getString(1);
                switch (role) {
                    case "АУ": {
                        sql = "SELECT * FROM au WHERE email = ?";
                        ps = c.prepareStatement(sql);
                        ps.setString(1, email);
                        ResultSet rs2 = ps.executeQuery();
                        while (rs2.next()) {
                            out.println(role);
                            out.println(rs2.getString(7));
                            out.println(rs2.getString(8));
                            out.println(rs2.getString(9));
                            out.println(rs2.getString(4));
                            out.println(rs2.getLong(3));
                            out.println(rs2.getLong(10));
                            out.println(rs2.getLong(15));
                        }
                        rs2.close();
                        ps.close();
                        break;
                    }
                    case "ИП": {
                        sql = "SELECT * FROM ip WHERE email = ?";
                        ps = c.prepareStatement(sql);
                        ps.setString(1, email);
                        ResultSet rs3 = ps.executeQuery();
                        while (rs3.next()) {
                            out.println(role);
                            out.println(rs3.getString(7));
                            out.println(rs3.getString(8));
                            out.println(rs3.getString(9));
                            out.println(rs3.getString(11));
                            out.println(rs3.getLong(3));
                            out.println(rs3.getLong(10));
                            out.println(rs3.getLong(6));
                        }
                        rs3.close();
                        ps.close();
                        break;
                    }
                    case "ФЛ": {
                        sql = "SELECT * FROM fl WHERE email = ?";
                        ps = c.prepareStatement(sql);
                        ps.setString(1, email);
                        ResultSet rs4 = ps.executeQuery();
                        while (rs4.next()) {
                            out.println(role);
                            out.println(rs4.getString(7));
                            out.println(rs4.getString(8));
                            out.println(rs4.getString(9));
                            out.println(rs4.getString(4));
                            out.println(rs4.getLong(3));
                            out.println(rs4.getLong(10));
                        }
                        rs4.close();
                        ps.close();
                        break;
                    }
                    case "ЮЛ": {
                        sql = "SELECT * FROM ql WHERE email = ?";
                        ps = c.prepareStatement(sql);
                        ps.setString(1, email);
                        ResultSet rs5 = ps.executeQuery();
                        while (rs5.next()) {
                            out.println(role);
                            out.println(rs5.getLong(3));
                            out.println(rs5.getLong(4));
                            out.println(rs5.getString(5));
                            out.println(rs5.getString(6));
                            out.println(rs5.getString(7));
                        }
                        rs5.close();
                        ps.close();
                        break;
                    }
                }
            }

            out.close();
            rs.close();
            c.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}
