package bbb;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import static psql.connection.connect;

public class VotingRights {
    public static String canVote(String email, String id){
        String result = "";
        try{
            Connection c = connect();
            String sql = "SELECT canvote FROM uch WHERE email = ? AND id = ?";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setString(1, email);
            ps.setInt(2, Integer.parseInt(id));

            ResultSet rs = ps.executeQuery();

            while (rs.next()){
                if (rs.getString(1).trim().equals("С правом голоса")){
                    result = "1";
                } else if (rs.getString(1).trim().equals("Без права голоса")) {
                    result = "0";
                }
            }

            rs.close();
            ps.close();
            c.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
        return result;
    }
}
