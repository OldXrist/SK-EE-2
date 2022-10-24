package admin.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import java.io.IOException;
import java.sql.*;
import java.util.*;
import com.google.gson.Gson;

@WebServlet("/GetMeetingsList")
public class GetMeetingsList extends HttpServlet {
    public String AuSql(String email)
    {
        String auSql =  "SELECT data_u_vrem_sobr, nachal_podach_zaiv, okonch_podach_zaiv, \n" +
                        "nomer_dela, sobr_org.famil, sobr_org.name, sobr_org.otch, \n" +
                        "au.famil, au.\"name\", au.otch, type_sobr\n" +
                        "FROM sobr_org, au\n" +
                        "WHERE sobr_org.email_org = '" + email + "' and au.email = '" + email + "' and sobr_org.type_org = 'АУ';";
        return auSql;
    }

    public String FlSql(String email)
    {
        String flSql =  "SELECT data_u_vrem_sobr, nachal_podach_zaiv, okonch_podach_zaiv, \n" +
                        "nomer_dela, sobr_org.famil, sobr_org.name, sobr_org.otch, \n" +
                        "fl.famil, fl.\"name\", fl.otch, type_sobr\n" +
                        "FROM sobr_org, fl\n" +
                        "WHERE sobr_org.email_org = '" + email + "' and fl.email= '" + email + "' and sobr_org.type_org = 'ФЛ';";
        return flSql;
    }

    public String IpSql(String email)
    {
        String ipSql =  "SELECT data_u_vrem_sobr, nachal_podach_zaiv, okonch_podach_zaiv, \n" +
                        "nomer_dela, sobr_org.famil, sobr_org.name, sobr_org.otch, \n" +
                        "ip.famil, ip.\"name\", ip.otch, type_sobr\n" +
                        "FROM sobr_org, ip\n" +
                        "WHERE sobr_org.email_org = '" + email + "' and ip.email = '" + email + "' and sobr_org.type_org = 'ИП';";
        return ipSql;
    }

    public String QlSql(String email)
    {
        String qlSql =  "SELECT data_u_vrem_sobr, nachal_podach_zaiv, okonch_podach_zaiv, \n" +
                        "nomer_dela, sobr_org.famil, sobr_org.name, sobr_org.otch, \n" +
                        "ql.poln_naim, type_sobr\n" +
                        "FROM sobr_org, ql\n" +
                        "WHERE sobr_org.email_org =  '" + email + "'  and ql.email = '" + email + "' and sobr_org.type_org = 'ЮЛ';";
        return qlSql;
    }

    public void GetRolesAndOrganizerIds(Connection _c, HashSet _userRoles) {
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

    public void SetMeetingsInfo(Connection _c, String _sql, ArrayList<ArrayList<String>> _meetingsList)
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
            Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/SK2", "postgres", "111");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres", "postgres", "postgresql");

            //сначала собираем роли и id организаторов
            //ArrayList<ArrayList<String>> userRoles = new ArrayList<ArrayList<String>>();
            HashSet<ArrayList<String>> userRoles = new HashSet<ArrayList<String>>();
            GetRolesAndOrganizerIds(c, userRoles);

            //заполняем массив данными
            ArrayList<ArrayList<String>> meetingsList = new ArrayList<ArrayList<String>>();
            for (ArrayList<String> item : userRoles) {
                switch (item.get(0)) {
                    case "АУ": SetMeetingsInfo(c, AuSql(item.get(1)), meetingsList);
                        break;
                    case "ФЛ": SetMeetingsInfo(c, FlSql(item.get(1)), meetingsList);
                        break;
                    case "ИП": SetMeetingsInfo(c, IpSql(item.get(1)), meetingsList);
                        break;
                    case "ЮЛ": SetMeetingsInfo(c, QlSql(item.get(1)), meetingsList);
                        break;
                }
            }

            //возвращаем данные на фронтенд в формате json
            String json = new Gson().toJson(meetingsList);
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

