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

@WebServlet("/ChangeMeetingCard")
public class ChangeMeetingCard extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        //получаем данные с фронтенда
        String meetingNumber = request.getParameter("_meetingNumber");
        String agenda = request.getParameter("_agenda");
        String meetingDate = request.getParameter("_meetingDate");
        String invoiceStartDate = request.getParameter("_invoiceStartDate");
        String invoiceEndDate = request.getParameter("_invoiceEndDate");
        String bulletinStartDate = request.getParameter("_bulletinStartDate");
        String bulletinEndDate = request.getParameter("_bulletinEndDate");

        try {
            Class.forName("org.postgresql.Driver");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres2", "postgres", "postgresql");
            Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.125/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/SK2", "postgres", "111");

            String sql = "UPDATE sobr_org " +
                         "SET data_u_vrem_sobr = '" + meetingDate + "', povestk_dnia = '" + agenda + "', " +
                         "nachal_podach_zaiv = '" + invoiceStartDate + "', okonch_podach_zaiv = '" + invoiceEndDate + "', " +
                         "nachal_priem_bul = '" + bulletinStartDate + "', okonch_priem_bul = '" + bulletinEndDate + "' " +
                         "WHERE nomer_dela = '" + meetingNumber + "';";

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
