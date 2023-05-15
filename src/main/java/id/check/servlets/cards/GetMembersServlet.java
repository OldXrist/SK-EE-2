package id.check.servlets.cards;

import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;

import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.commons.lang3.StringUtils;

import java.io.IOException;
import java.sql.*;
import java.util.ArrayList;
import java.util.HashSet;

import static psql.connection.connect;

@WebServlet("/GetMembersServlet")
public class GetMembersServlet extends HttpServlet {
    public String FlSql(String meetingNumber)
    {
        String flSql =  "SELECT DISTINCT uch.type_uch, fl.famil, fl.name, fl.otch, uch.answer1,  uch.answer2, uch.answer3, uch.answer4, uch.answer5, uch.answer6, uch.answer7, uch.answer8, uch.answer9, uch.answer10\n" +
                        "FROM public.uch\n" +
                        "INNER JOIN public.fl ON uch.email = fl.email and fl.type_users = 'участник' and uch.id = '" + meetingNumber + "';";
        return flSql;
    }

    public String IpSql(String meetingNumber)
    {
        String ipSql =  "SELECT DISTINCT uch.type_uch, ip.famil, ip.name, ip.otch, uch.answer1,  uch.answer2, uch.answer3, uch.answer4, uch.answer5, uch.answer6, uch.answer7, uch.answer8, uch.answer9, uch.answer10\n" +
                        "FROM public.uch\n" +
                        "INNER JOIN public.ip ON uch.email = ip.email and ip.type_users = 'участник' and uch.id = '" + meetingNumber + "';";
        return ipSql;
    }

    public String QlSql(String meetingNumber)
    {
        String qlSql =  "SELECT DISTINCT uch.type_uch, ql.poln_naim, uch.answer1,  uch.answer2, uch.answer3, uch.answer4, uch.answer5, uch.answer6, uch.answer7, uch.answer8, uch.answer9, uch.answer10\n" +
                        "FROM public.uch\n" +
                        "INNER JOIN public.ql ON uch.email = ql.email and ql.type_users = 'участник' and uch.id = '" + meetingNumber + "';";
        return qlSql;
    }

    public void GetRolesAndOrganizerEmails(Connection _c, HashSet _userRoles, String _meetingNumber) {
        try {
            String sql = "SELECT type_uch, email FROM uch WHERE id = ?;";
            PreparedStatement ps = _c.prepareStatement(sql);
            ps.setInt(1, Integer.parseInt(_meetingNumber));

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

    public void SetMembersInfo(Connection _c, String _sql, HashSet<ArrayList<String>> _membersList)
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
                _membersList.add(bankruptcyProcedureInfo);
            }
            rs.close();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        if (StringUtils.isNumeric(request.getParameter("meetingNumber"))) {
            String meetingNumber = request.getParameter("meetingNumber");

            try {
                Connection c = connect();

                //собираем роли
                HashSet<ArrayList<String>> userRoles = new HashSet<ArrayList<String>>();
                GetRolesAndOrganizerEmails(c, userRoles, meetingNumber);

                //собираем имена участников
                HashSet<ArrayList<String>> membersList = new HashSet<ArrayList<String>>();
                for (ArrayList<String> item : userRoles) {
                    switch (item.get(0)) {
                        case "ФЛ": SetMembersInfo(c, FlSql(meetingNumber), membersList);
                            break;
                        case "ИП": SetMembersInfo(c, IpSql(meetingNumber), membersList);
                            break;
                        case "ЮЛ": SetMembersInfo(c, QlSql(meetingNumber), membersList);
                            break;
                    }
                }

                //возвращаем данные на фронтенд в формате json
                String json = new Gson().toJson(membersList);
                response.setContentType("application/json");
                response.setCharacterEncoding("UTF-8");
                response.getWriter().write(json);
                c.close();

            } catch (Exception e) {
                e.printStackTrace();
                System.err.println(e.getClass().getName() + ": " + e.getMessage());
                System.exit(0);
            }
        }
    }
}
