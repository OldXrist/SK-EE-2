package admin.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import static psql.connection.connect;

@WebServlet("/ChangeInvoiceStatus")
public class ChangeInvoiceStatus  extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String email = request.getParameter("email");
        String meetingStatus = request.getParameter("meetingStatus");

        try {
            Connection c = connect();

            String sql = "UPDATE main SET auth = '" + meetingStatus + "' WHERE email = '" + email + "';";
            PreparedStatement ps = c.prepareStatement(sql);
            ps.executeUpdate();
            ps.close();
            c.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}
