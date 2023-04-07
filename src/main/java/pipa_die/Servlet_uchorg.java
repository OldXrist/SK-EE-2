package pipa_die;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import static psql.connection.connect;
import static reg.servlets.GFG.fromHex;
import static reg.servlets.GFG.getSecurePassword;

@WebServlet(name = "Seruchorg", value = "/Seruchorg")
public class Servlet_uchorg extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();

        try {
            Connection c = connect();

            String sql = "SELECT COUNT(type_users) FROM main WHERE type_users = 'участник'";
            PreparedStatement ps = c.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {

                rs.getInt("count");
                String elemo = rs.getString(1);
                out.println(elemo);
            }

            rs.close();
            ps.close();
            out.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}