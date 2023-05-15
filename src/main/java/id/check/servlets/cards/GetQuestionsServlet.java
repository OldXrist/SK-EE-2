package id.check.servlets.cards;

import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;

import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.math.NumberUtils;

import java.io.IOException;
import java.sql.*;
import java.util.ArrayList;
import java.util.HashSet;

import static psql.connection.connect;

@WebServlet("/GetQuestionsServlet")
public class GetQuestionsServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        if (StringUtils.isNumeric(request.getParameter("meetingNumber"))){
            int meetingNumber = Integer.parseInt(request.getParameter("meetingNumber"));

            try {
                Connection c = connect();

                //собираем вопросы
                ArrayList<String> questionsList = new ArrayList<String>();

                String sql = "SELECT questions FROM questions WHERE id = ?;";
                PreparedStatement ps = c.prepareStatement(sql);

                ps.setInt(1, meetingNumber);
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

                c.close();

            } catch (Exception e) {
                e.printStackTrace();
                System.err.println(e.getClass().getName() + ": " + e.getMessage());
                System.exit(0);
            }
        }
    }
}
