package sobr.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import static psql.connection.connect;

@WebServlet(name = "CheckSobrStatusServlet", value = "/CheckSobrStatusServlet")
public class CheckSobrStatusServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();

        String s = req.getParameter("sk");
        long sk = Long.parseLong(s);

        try {
            Connection c = connect();

            String sql = "SELECT status FROM sobr_org WHERE id = ?;";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setLong(1, sk);

            ResultSet rs = ps.executeQuery();

            while (rs.next()){
                out.println(rs.getString(1));
            }

            ps.close();
            c.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}
