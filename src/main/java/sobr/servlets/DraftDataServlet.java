package sobr.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import static psql.connection.connect;

@WebServlet(name = "DraftDataServlet", value = "/DraftDataServlet")
public class DraftDataServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();
        int num = Integer.parseInt(req.getParameter("num"));

        try{
            Connection c = connect();

            String sql = "SELECT behalf, uch_status, doks FROM uch WHERE application_id = ?;";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setInt(1, num);
            ResultSet rs = ps.executeQuery();

            while (rs.next()){
                out.println(rs.getString(1));
                out.println(rs.getString(2));
                out.println(rs.getString(3));
            }

            rs.close();
            ps.close();
            c.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
    }
}
