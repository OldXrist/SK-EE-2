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

@WebServlet("/GetSystemSettings")
public class GetSystemSettings extends HttpServlet {

    public String SystemSettingsSql() { return "SELECT * FROM public.systemsettings"; }

    public void GetDataFromDb(Connection _c, String _sql, ArrayList<String> array) {
        try {
            PreparedStatement ps = _c.prepareStatement(_sql);
            ResultSet rs = ps.executeQuery();
            ResultSetMetaData meta = rs.getMetaData();
            int columnCount = meta.getColumnCount();
            while (rs.next()) {
                for (int i = 1; i <= columnCount; ++i) {
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

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String meetingNumber = request.getParameter("num");
        try {
            Class.forName("org.postgresql.Driver");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/SK", "postgres", "111");
            Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.125/postgres2", "postgres", "postgresql");

            //сбор данных
            ArrayList<String> systemSettings = new ArrayList<String>();
            GetDataFromDb(c, SystemSettingsSql(), systemSettings);

            //возвращаем данные на фронтенд в формате json
            String json = new Gson().toJson(systemSettings);
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
