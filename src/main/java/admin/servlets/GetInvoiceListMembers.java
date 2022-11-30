package admin.servlets;

import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.sql.*;
import java.util.ArrayList;
import java.util.HashSet;

@WebServlet("/GetInvoiceListMembers")
public class GetInvoiceListMembers extends HttpServlet {
    public String FlSql(String email)
    {
        String flSql =  "SELECT sobr_org.type_sobr, sobr_org.email_org, nomer_dela, data_u_vrem_sobr, status, fl.famil, fl.\"name\", fl.otch \n" +
                "FROM sobr_org, fl\n" +
                "WHERE sobr_org.email_org = '" + email + "' and fl.email= '" + email + "' and sobr_org.type_org = 'ФЛ' and fl.type_users = 'участник';";
        return flSql;
    }

    public String IpSql(String email)
    {
        String ipSql =  "SELECT sobr_org.type_sobr, sobr_org.email_org, nomer_dela, data_u_vrem_sobr, status, ip.famil, ip.\"name\", ip.otch \n" +
                "FROM sobr_org, ip\n" +
                "WHERE sobr_org.email_org = '" + email + "' and ip.email = '" + email + "' and sobr_org.type_org = 'ИП' and ip.type_users = 'участник';";
        return ipSql;
    }

    public String QlSql(String email)
    {
        String qlSql =  "SELECT sobr_org.type_sobr, sobr_org.email_org, nomer_dela, data_u_vrem_sobr, status, ql.poln_naim \n" +
                "FROM sobr_org, ql\n" +
                "WHERE sobr_org.email_org =  '" + email + "'  and ql.email = '" + email + "' and sobr_org.type_org = 'ЮЛ' and ql.type_users = 'участник';";
        return qlSql;
    }

    public void GetRolesAndOrganizerEmails(Connection _c, HashSet _userRoles) {
        try {
            String sql = "SELECT type_org, email_org FROM sobr_org";
            PreparedStatement ps = _c.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            ResultSetMetaData meta = rs.getMetaData();
            int columnCount = meta.getColumnCount();
            while (rs.next()) {
                ArrayList<String> row = new ArrayList<String>();
                for (int i = 1; i <= columnCount; ++i)
                {
                    Object value = rs.getObject(i);
                    row.add(String.valueOf(value));
                }
                _userRoles.add(row);
            }
            rs.close();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }

    public void SetInvoicesInfo(Connection _c, String _sql, ArrayList<ArrayList<String>> _meetingsList)
    {
        try {
            PreparedStatement ps = _c.prepareStatement(_sql);
            ResultSet rs = ps.executeQuery();
            ResultSetMetaData meta = rs.getMetaData();
            int columnCount = meta.getColumnCount();
            while (rs.next()) {
                ArrayList<String> bankruptcyProcedureInfo = new ArrayList<String>();
                for (int i = 1; i <= columnCount; ++i)
                {
                    Object value = rs.getObject(i);
                    bankruptcyProcedureInfo.add(String.valueOf(value));
                }
                _meetingsList.add(bankruptcyProcedureInfo);
            }
            rs.close();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            Class.forName("org.postgresql.Driver");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/SK", "postgres", "111");
            Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres", "postgres", "postgresql");

            //сначала собираем роли и id организаторов
            HashSet<ArrayList<String>> userRoles = new HashSet<ArrayList<String>>();
            GetRolesAndOrganizerEmails(c, userRoles);

            //заполняем массив данными
            ArrayList<ArrayList<String>> invoicesListMembers = new ArrayList<ArrayList<String>>();
            for (ArrayList<String> item : userRoles) {
                switch (item.get(0)) {
                    case "ФЛ": SetInvoicesInfo(c, FlSql(item.get(1)), invoicesListMembers);
                        break;
                    case "ИП": SetInvoicesInfo(c, IpSql(item.get(1)), invoicesListMembers);
                        break;
                    case "ЮЛ": SetInvoicesInfo(c, QlSql(item.get(1)), invoicesListMembers);
                        break;
                }
            }

            //возвращаем данные на фронтенд в формате json
            String json = new Gson().toJson(invoicesListMembers);
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().write(json);
        }
        catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}
