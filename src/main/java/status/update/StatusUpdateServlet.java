package status.update;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

import static psql.connection.connect;
import static status.update.timeUpdate.timeUpd;

@WebServlet(name = "StatusUpdateServlet", value = "/StatusUpdateServlet")
public class StatusUpdateServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        try {
            Connection c = connect();

            String sql = "SELECT id FROM sobr_org WHERE status NOT IN (?, ?, ?)";

            PreparedStatement ps = c.prepareStatement(sql);

            ps.setString(1, "Отменено организатором");
            ps.setString(2, "Завершено");
            ps.setString(3, "Не состоялось");

            ResultSet rs = ps.executeQuery();

            timeUpd(rs);

            rs.close();
            ps.close();
            c.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}
