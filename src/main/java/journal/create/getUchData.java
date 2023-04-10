package journal.create;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import static psql.connection.connect;

public class getUchData {
    public static ResultSet getCreds(String type, int meetingId) throws SQLException, ClassNotFoundException {
        String sql = "";
        Connection c = connect();

        switch (type.trim()){
            case "ЮЛ":
                sql = "SELECT date, poln_naim, uch_status, ur_addr, uch.demand_amount, sobr_org.demand_amount FROM uch, ql, sobr_org WHERE uch.id = ? AND ql.email = uch.email AND sobr_org.id = ?;";
                break;

            case "ФЛ":
                sql = "SELECT date, fl.famil, fl.name, fl.otch, uch_status, ser, num, date_pass, kem_vudan, uch.demand_amount, sobr_org.demand_amount FROM uch, fl, sobr_org WHERE uch.id = ? AND fl.email = uch.email AND sobr_org.id = ?;";
                break;

            case "ИП":
                sql = "SELECT date, ip.famil, ip.name, ip.otch, uch_status, ser, num, date_pass, kem_vudan, uch.demand_amount, sobr_org.demand_amount FROM uch, ip, sobr_org WHERE uch.id = ? AND ip.email = uch.email AND sobr_org.id = ?;";
                break;
        }

        PreparedStatement ps = c.prepareStatement(sql);

        ps.setLong(1, meetingId);
        ps.setInt(2, meetingId);

        return ps.executeQuery();
    }

    public static ResultSet getMeetingInf(int meetingId) throws SQLException, ClassNotFoundException {
        Connection c = connect();
        String sql = "SELECT poln_naum, famil, name, otch, data_u_vrem_sobr, nachal_podach_zaiv, okonch_podach_zaiv FROM sobr_org WHERE id = ?";

        PreparedStatement ps = c.prepareStatement(sql);

        ps.setInt(1, meetingId);

        c.close();

        return ps.executeQuery();
    }
}
