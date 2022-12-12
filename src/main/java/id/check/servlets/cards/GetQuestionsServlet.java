package id.check.servlets.cards;

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

@WebServlet("/GetQuestionsServlet")
public class GetQuestionsServlet extends HttpServlet {

    public String QuestionsSql(String meetingNumber) {
        return "SELECT questions FROM public.questions WHERE id = '" + meetingNumber + "';";
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String meetingNumber = request.getParameter("number");

        try {
            Class.forName("org.postgresql.Driver");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/SK", "postgres", "111");
            Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres2", "postgres", "postgresql");

            //собираем вопросы
            ArrayList<String> questionsList = new ArrayList<String>();

            PreparedStatement ps = c.prepareStatement(QuestionsSql(meetingNumber));
            ResultSet rs = ps.executeQuery();
            ResultSetMetaData meta = rs.getMetaData();
            int columnCount = meta.getColumnCount();
            while (rs.next()) {
                for (int i = 1; i <= columnCount; ++i)
                {
                    Object value = rs.getObject(i);
                    questionsList.add(String.valueOf(value));
                }
            }
            rs.close();
            ps.close();

            //возвращаем данные на фронтенд в формате json
            String json = new Gson().toJson(questionsList);
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
