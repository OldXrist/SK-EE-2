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

@WebServlet("/GetOperatorInfo")
public class GetOperatorInfo extends HttpServlet {

    public String OperatorSql() {
        return "SELECT * FROM public.adminaccounts WHERE id = 2;";
    }

    public String PasswordSql() {
        return "SELECT pass FROM public.main WHERE role_users = 'operator';";
    }

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
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/SK2", "postgres", "111");
            Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres2", "postgres", "postgresql");

            //сбор данных об операторе
            ArrayList<String> operatorInfo = new ArrayList<String>();
            GetDataFromDb(c, OperatorSql(), operatorInfo);
            ArrayList<String> operatorPassword = new ArrayList<String>();
            GetDataFromDb(c, PasswordSql(), operatorPassword);

            operatorInfo.addAll(operatorPassword);

            //возвращаем данные на фронтенд в формате json
            String json = new Gson().toJson(operatorInfo);
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