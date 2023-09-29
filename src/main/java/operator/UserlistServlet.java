package operator;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import static operator.getUserData.getOtherData;
import static operator.getUserData.getUlData;
import static psql.connection.connect;

@WebServlet(name = "UserlistServlet", value = "/UserlistServlet")
public class UserlistServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();

        try{
            Connection c = connect();

            String sql = "SELECT id, role_users, type_users, email FROM main;";
            PreparedStatement ps = c.prepareStatement(sql);

            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                if (!rs.getString(3).trim().equals("operator")&&!rs.getString(3).trim().equals("admin")) {
                    out.println(rs.getInt(1));
                    out.println(rs.getString(2));
                    out.println(rs.getString(3));
                    out.println(rs.getString(4));

                    if (rs.getString(2).equals("ЮЛ")) {
                        out.println(getUlData(rs.getString(4)));
                    } else {
                        out.println(getOtherData(rs.getString(4), rs.getString(2)));
                    }
                }
            }

            c.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
    }
}
