package pwd.change;

import java.security.NoSuchAlgorithmException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import static psql.connection.connect;
import static reg.servlets.GFG.fromHex;

public class getSalt {
    public static byte[] getUserSalt(String email){
        byte[] salt = null;

        try {
            Connection c = connect();
            String sql = "SELECT salt FROM main WHERE email = ?";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setString(1, email);

            ResultSet rs = ps.executeQuery();

            while (rs.next()){
                salt = fromHex(rs.getString(1));
            }
            c.close();

        } catch (SQLException | ClassNotFoundException | NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }

        return salt;
    }
}
