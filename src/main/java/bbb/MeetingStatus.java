package bbb;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import static psql.connection.connect;

public class MeetingStatus {
    public static String meetingStatus(String id){
        String status = "";

        try {
            Connection c = connect();
            String sql = "SELECT status FROM sobr_org WHERE id = ?";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setInt(1, Integer.parseInt(id));

            ResultSet rs = ps.executeQuery();

            while (rs.next()){
                status = rs.getString(1);
            }

            c.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
        return status;
    }
}
