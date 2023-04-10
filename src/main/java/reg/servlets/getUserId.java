package reg.servlets;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import static psql.connection.connect;

public class getUserId {
    public static int getID(String email){
        int ID = 0;
        try{
            Connection c = connect();

            String sql = "SELECT id FROM main WHERE email = ?";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setString(1, email);
            ResultSet rs = ps.executeQuery();

            while (rs.next()){
                ID = Integer.parseInt(rs.getString(1));
            }

            c.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
        return ID;
    }
}
