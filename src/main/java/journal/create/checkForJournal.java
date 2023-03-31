package journal.create;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import static psql.connection.connect;

public class checkForJournal {
    public static String journalExists(int id) throws SQLException, ClassNotFoundException {
        Connection c = connect();

        String sql = "SELECT journal_path FROM journals WHERE meeting_id = ?;";
        PreparedStatement ps = c.prepareStatement(sql);

        ps.setInt(1, id);

        ResultSet rs = ps.executeQuery();
        String path = null;

        while (rs.next()){
            path = rs.getString(1);
        }

        return path;
    }
}
