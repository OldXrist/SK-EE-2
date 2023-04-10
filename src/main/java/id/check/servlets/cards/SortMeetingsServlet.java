package id.check.servlets.cards;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

import static psql.connection.connect;

@WebServlet(name = "SortMeetingsServlet", value = "/SortMeetingsServlet")
public class SortMeetingsServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();

        String sort = req.getParameter("param");
        String param = "";

        String sqlTemp = "SELECT id, data_u_vrem_sobr,nachal_podach_zaiv, okonch_podach_zaiv, type_dolzh, famil, name, otch, poln_naum, email_org, type_org, type_sobr, status FROM sobr_org WHERE status NOT IN ('Черновик') ORDER BY ";
        String sql = "";

        switch (sort){
            case "num":
                param = "id LIMIT 4;";
                sql = sqlTemp + param;
                break;
            case "date":
                param = "data_u_vrem_sobr LIMIT 4;";
                sql = sqlTemp + param;
                break;
            case "status":
                param = "status LIMIT 4;";
                sql = sqlTemp + param;
                break;
        }

        try{
            Connection c = connect();

            PreparedStatement ps = c.prepareStatement(sql);

            ResultSet rs = ps.executeQuery();

            while (rs.next()){
                out.println(rs.getInt(1));
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
                        String sql1 = "SELECT poln_naim FROM ql WHERE email = ?";
                        PreparedStatement ps1 = c.prepareStatement(sql1);
                        ps1.setString(1, email);
                        ResultSet rs1 = ps1.executeQuery();
                        while (rs1.next()){
                            out.println(rs1.getString(1));
                            out.println("null");
                            out.println("null");
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
                out.println(rs.getString(13));
            }

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
    }
}
