package status.update;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

import static psql.connection.connect;

public class timeUpdate {
    public static void timeUpd(ResultSet ids) throws SQLException {
        try {
            Connection c = connect();
            while (ids.next()){
                    String sql = "SELECT data_u_vrem_sobr, nachal_podach_zaiv, okonch_podach_zaiv, nachal_priem_bul, okonch_priem_bul, data_podpic_protakol FROM sobr_org WHERE id = ? AND status NOT IN (?, ?, ?)";

                    PreparedStatement ps = c.prepareStatement(sql);

                    ps.setLong(1, ids.getLong(1));
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

                        ZonedDateTime nowZone = ZonedDateTime.now(ZoneId.of("Europe/Moscow"));
                        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
                        DateTimeFormatter ZDTformatter = DateTimeFormatter.ISO_ZONED_DATE_TIME;
                        LocalDateTime now = LocalDateTime.parse(nowZone.toString(), ZDTformatter);
                        String status = null;


                        assert mainTime != null;
                        //LocalDateTime main = LocalDateTime.parse(mainTime, formatter);

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

                        String sqlUpd = "UPDATE sobr_org SET status = ? WHERE id = ?";
                        PreparedStatement psUpd = c.prepareStatement(sqlUpd);

                        psUpd.setString(1, status);
                        psUpd.setLong(2, ids.getLong(1));

                        psUpd.executeUpdate();

                        psUpd.close();
                    }
                rs.close();
                ps.close();
            }

                c.close();

            } catch (Exception e) {
                e.printStackTrace();
                System.err.println(e.getClass().getName() + ": " + e.getMessage());
                System.exit(0);
            }
    }
}
