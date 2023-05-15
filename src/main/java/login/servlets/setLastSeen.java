package login.servlets;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;

import static psql.connection.connect;

public class setLastSeen {
    public static void setLastSeenDate(String email, String type) throws SQLException, ClassNotFoundException {
        Connection c = connect();

        ZonedDateTime nowZoned = ZonedDateTime.now(ZoneId.of("Europe/Moscow"));
        LocalDateTime now = nowZoned.toLocalDateTime();

        switch (type.trim()){
            case "ФЛ":
                type = "fl";
                break;
            case "ИП":
                type = "ip";
                break;
            case "ЮЛ":
                type = "ql";
                break;
            case "АУ":
                type = "au";
                break;
            default:
                type = null;
                break;
        }

        if (type != null) {
            String sql = "UPDATE " + type + " SET last_login = ? WHERE email = ?;";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setObject(1, now);
            ps.setString(2, email);

            ps.executeUpdate();

            ps.close();
            c.close();
        }
    }
}
