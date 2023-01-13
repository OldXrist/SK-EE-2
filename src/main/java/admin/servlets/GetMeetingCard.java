package admin.servlets;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

import java.io.IOException;
import java.sql.*;
import java.util.*;
import com.google.gson.Gson;

@WebServlet("/GetMeetingCard")
public class GetMeetingCard extends HttpServlet {
    public String SobrOrgSql(String _meetingNumber)
    {
        String sql =  "SELECT type_org, email_org, \n" +
                      "data_u_vrem_sobr, povestk_dnia, \n" +
                      "nachal_podach_zaiv, okonch_podach_zaiv, nachal_priem_bul, okonch_priem_bul, data_podpic_protakol,\n" +
                      "iden_nomer, data_razm_efrsb,\n" +
                      "naim_orb_suda, nomer_dela, osn_dlia_sobr,\n" +
                      "type_dolzh, famil, name, otch, pocht_adres, inn, snils, ogrnip, poln_naum, qr_adres, ogrn\n" +
                      "FROM public.sobr_org\n" +
                      "WHERE nomer_dela = '" + _meetingNumber + "';";
        return sql;
    }

    public String AuSql(String email)
    {
        String sql =  "SELECT famil, name, otch, pocht_adres, inn, snils, reg_nomer_au, phone\n" +
                      "FROM au\n" +
                      "WHERE email = '" + email + "';";
        return sql;
    }

    public String FlSql(String email)
    {
        String sql =  "SELECT famil, name, otch, pocht_adres, inn, snils, phone\n" +
                      "FROM fl\n" +
                      "WHERE email = '" + email + "';";
        return sql;
    }

    public String IpSql(String email)
    {
        String sql =  "SELECT famil, name, otch, pocht_adres, inn, snils, ogrnip, phone\n" +
                      "FROM ip\n" +
                      "WHERE email = '" + email + "';";
        return sql;
    }

    public String QlSql(String email)
    {
        String sql =  "SELECT inn, ogrn, poln_naim, ur_addr, pocht_adres, phone\n" +
                      "FROM ql\n" +
                      "WHERE email = '" + email + "';";
        return sql;
    }

    public void GetDataFromDb(Connection _c, String _sql, ArrayList<String> array)
    {
        try {
            PreparedStatement ps = _c.prepareStatement(_sql);
            ResultSet rs = ps.executeQuery();
            ResultSetMetaData meta = rs.getMetaData();
            int columnCount = meta.getColumnCount();
            while (rs.next()) {
                for (int i = 1; i <= columnCount; ++i)
                {
                    Object value = rs.getObject(i);
                    array.add(String.valueOf(value));
                }
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

        String meetingNumber = request.getParameter("num");

        try {
            Class.forName("org.postgresql.Driver");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/SK2", "postgres", "111");
            Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.125/postgres", "postgres", "postgresql");

            //сбор данных о собрании
            ArrayList<String> meetingInfo = new ArrayList<String>();
            GetDataFromDb(c, SobrOrgSql(meetingNumber), meetingInfo);

            //в зависимости от роли собираем данные об организаторе
            ArrayList<String> organizerInfo = new ArrayList<String>();
            switch (meetingInfo.get(0)) {
                case "АУ": GetDataFromDb(c, AuSql(meetingInfo.get(1)), organizerInfo);
                    break;
                case "ФЛ": GetDataFromDb(c, FlSql(meetingInfo.get(1)), organizerInfo);
                    break;
                case "ИП": GetDataFromDb(c, IpSql(meetingInfo.get(1)), organizerInfo);
                    break;
                case "ЮЛ": GetDataFromDb(c, QlSql(meetingInfo.get(1)), organizerInfo);
                    break;
            }
            meetingInfo.addAll(organizerInfo);

            //возвращаем данные на фронтенд в формате json
            String json = new Gson().toJson(meetingInfo);
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().write(json);

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}
