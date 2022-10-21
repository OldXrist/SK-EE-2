package admin.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;

import com.google.gson.Gson;

@WebServlet("/GetMeetingsList")
public class GetMeetingsList extends HttpServlet {
    public String AuSql(String id)
    {
        String auSql =  "SELECT data_u_vrem_sobr, nachal_podach_zaiv, okonch_podach_zaiv, \n" +
                        "nomer_dela, sobr_org.famil, sobr_org.name, sobr_org.otch, \n" +
                        "au.famil, au.\"name\", au.otch\n" +
                        "FROM sobr_org, au\n" +
                        "WHERE sobr_org.organizer_id = '" + id + "' and au.au_id ='" + id + "';";
        return auSql;
    }

    public String FlSql(String id)
    {
        String flSql =  "SELECT data_u_vrem_sobr, nachal_podach_zaiv, okonch_podach_zaiv, \n" +
                        "nomer_dela, sobr_org.famil, sobr_org.name, sobr_org.otch, \n" +
                        "fl.famil, fl.\"name\", fl.otch\n" +
                        "FROM sobr_org, fl\n" +
                        "WHERE sobr_org.organizer_id = '" + id + "' and fl.fl_id='" + id + "';";
        return flSql;
    }

    public String IpSql(String id)
    {
        String ipSql =  "SELECT data_u_vrem_sobr, nachal_podach_zaiv, okonch_podach_zaiv, \n" +
                        "nomer_dela, sobr_org.famil, sobr_org.name, sobr_org.otch, \n" +
                        "ip.famil, ip.\"name\", ip.otch\n" +
                        "FROM sobr_org, ip\n" +
                        "WHERE sobr_org.organizer_id = '" + id + "' and ip.ip_id ='" + id + "';";
        return ipSql;
    }

    public String QlSql(String id)
    {
        String qlSql =  "SELECT data_u_vrem_sobr, nachal_podach_zaiv, okonch_podach_zaiv, \n" +
                        "nomer_dela, sobr_org.famil, sobr_org.name, sobr_org.otch, \n" +
                        "ql.poln_naim\n" +
                        "FROM sobr_org, ql\n" +
                        "WHERE sobr_org.organizer_id = '" + id + "' and ql.ql_id ='" + id + "';";
        return qlSql;
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
            Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/SK", "postgres", "111");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres", "postgres", "postgresql");

            //сначала собираем роли и id организаторов
            HashMap<String, String> userRoles = new HashMap <String, String>();
            String sql = "SELECT user_role, organizer_id FROM sobr_org";
            PreparedStatement ps = c.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                userRoles.put(rs.getString(1), rs.getString(2));
            }

            //заполняем двумерный массив данными
            ArrayList<ArrayList<String>> meetingsList = new ArrayList<ArrayList<String>>();
            for (HashMap.Entry<String, String> item : userRoles.entrySet()) {
                switch (item.getKey()) {
                    case "АУ": SetMeetingsInfo(c, AuSql(item.getValue()), meetingsList);
                        break;
                    case "ФЛ": SetMeetingsInfo(c, FlSql(item.getValue()), meetingsList);
                        break;
                    case "ИП": SetMeetingsInfo(c, IpSql(item.getValue()), meetingsList);
                        break;
                    case "ЮЛ": SetMeetingsInfo(c, QlSql(item.getValue()), meetingsList);
                        break;
                }
            }

            //возвращаем данные на фронтенд в формате json
            String json = new Gson().toJson(meetingsList);
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().write(json);

            rs.close();
            ps.close();
        }
        catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}

