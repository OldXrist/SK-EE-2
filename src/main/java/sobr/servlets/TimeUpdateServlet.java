package sobr.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@WebServlet(name = "TimeUpdateServlet", value = "/TimeUpdateServlet")
public class TimeUpdateServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();

        long sk = Long.parseLong(req.getParameter("sk"));

        try {
            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/SK", "postgres", "111");

            String sql = "SELECT data_u_vrem_sobr, nachal_podach_zaiv, okonch_podach_zaiv, nachal_priem_bul, okonch_priem_bul, data_podpic_protakol FROM sobr_org WHERE id = ? AND status NOT IN (?, ?, ?)";

            PreparedStatement ps = c.prepareStatement(sql);

            ps.setLong(1, sk);
            ps.setString(2, "Отменено организатором");
            ps.setString(3, "Завершено");
            ps.setString(4, "Не состоялось");

            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                String mainTime = rs.getString(1);
                String appStart = rs.getString(2);
                String appEnd = rs.getString(3);
                String bulStart = rs.getString(4);
                String bulEnd = rs.getString(5);
                String protocolDate = rs.getString(6);

                LocalDateTime now = LocalDateTime.now();
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
                String status = null;


                assert mainTime != null;
                LocalDateTime main = LocalDateTime.parse(mainTime, formatter);

                LocalDateTime applicationsStart = LocalDateTime.parse(appStart, formatter);

                LocalDateTime applicationsEnd = LocalDateTime.parse(appEnd, formatter);

                LocalDateTime bulletinsStart = LocalDateTime.parse(bulStart, formatter);

                LocalDateTime bulletinsEnd = LocalDateTime.parse(bulEnd, formatter);

                LocalDateTime protocol = LocalDateTime.parse(protocolDate, formatter);

                if (now.isBefore(applicationsStart)) {
                    status = "На рассмотрении";
                } else if (now.isAfter(applicationsStart) && now.isBefore(applicationsEnd)) {
                    status = "Приём заявок";
                } else if (now.isAfter(applicationsEnd) && now.isBefore(bulletinsStart)) {
                    status = "Обработка заявок";
                } else if (now.isAfter(bulletinsStart) && now.isBefore(bulletinsEnd)) {
                    status = "В стадии проведения";
                } else if (now.isAfter(bulletinsEnd) && now.isBefore(protocol)) {
                    status = "Подведение итогов";
                    // TODO Не состоялось если нет проголосовавших
                } else if (now.isAfter(protocol)){
                    status = "Завершено";
                }

                out.println("Status = "+ status);

                String sqlUpd = "UPDATE sobr_org SET status = ? WHERE id = ?";
                PreparedStatement psUpd = c.prepareStatement(sqlUpd);

                psUpd.setString(1, status);
                psUpd.setLong(2, sk);

                psUpd.executeUpdate();

                psUpd.close();
            }

            rs.close();
            ps.close();
            out.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}
