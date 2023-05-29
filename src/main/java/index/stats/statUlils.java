package index.stats;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import static psql.connection.connect;

public class statUlils {
    public static String getParticipantCount(){
        String participants = null;
        
        try{
            Connection c = connect();

            String sql = "SELECT count(id) FROM main WHERE type_users = 'участник';";
            PreparedStatement ps = c.prepareStatement(sql);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                participants = rs.getString(1);
            }

            c.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
        return participants;
    }

    public static String getOrganizersCount(){
        String organizers = null;

        try{
            Connection c = connect();

            String sql = "SELECT count(id) FROM main WHERE type_users = 'организатор';";
            PreparedStatement ps = c.prepareStatement(sql);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                organizers = rs.getString(1);
            }

            c.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
        return organizers;
    }

    public static String getMeetingsCount(){
        String meetings = null;

        try{
            Connection c = connect();

            String sql = "SELECT count(id) FROM sobr_org WHERE status = 'Завершено';";
            PreparedStatement ps = c.prepareStatement(sql);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                meetings = rs.getString(1);
            }

            c.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
        return meetings;
    }
}
