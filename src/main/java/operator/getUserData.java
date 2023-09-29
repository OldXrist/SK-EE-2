package operator;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import static psql.connection.connect;

public class getUserData {

    public static String userdata(String sql, String email){
        String data = null;
        try{
            Connection c = connect();

            PreparedStatement ps = c.prepareStatement(sql);
            ps.setString(1, email);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                data = rs.getLong(1) +"\n"+rs.getString(2)+" "+rs.getString(3)+" "+rs.getString(4)+"\n-";
            }

            c.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
        return data;
    }
    public static String getUlData(String email){
        String data = null;

        try{
            Connection c = connect();

            String sql = "SELECT inn, poln_naim FROM ql WHERE email = ?;";
            PreparedStatement ps = c.prepareStatement(sql);
            ps.setString(1, email);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                data = rs.getLong(1) +"\n-\n"+rs.getString(2);
            }

            c.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
        return data;
    }

    public static String getOtherData(String email, String role){
        String data = null;
        String sql = null;

        switch (role.trim()){
            case "ИП":
                sql = "SELECT inn, famil, name, otch FROM ip WHERE email = ?;";
                data = userdata(sql, email);
                break;
            case "ФЛ":
                sql = "SELECT inn, famil, name, otch FROM fl WHERE email = ?;";
                data = userdata(sql, email);
                break;
            case "АУ":
                sql = "SELECT inn, famil, name, otch FROM au WHERE email = ?;";
                data = userdata(sql, email);
                break;
        }

        return data;
    }
}
