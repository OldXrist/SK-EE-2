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

@WebServlet("/ChangeSystemSettings")
public class ChangeSystemSettings extends HttpServlet {
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {

        String issuer = req.getParameter("issuer");
        String senderEmail = req.getParameter("senderEmail");
        String smtpHost = req.getParameter("smtpHost");
        String smtpPort = req.getParameter("smtpPort");
        String smtpUsername = req.getParameter("smtpUsername");
        String smtpPassword = req.getParameter("smtpPassword");
        String attempts = req.getParameter("attempts");
        String url = req.getParameter("url");
        String forbiddenOids = req.getParameter("forbiddenOids");
        String cert = req.getParameter("cert");
        String phone = req.getParameter("phone");
        String companies = req.getParameter("companies");
        String siteName1 = req.getParameter("siteName1");
        String recovery = req.getParameter("recovery");
        String siteName2 = req.getParameter("siteName2");
        String isCheckOid = req.getParameter("isCheckOid");
        String isCheckCert = req.getParameter("isCheckCert");
        String invoicePeriod = req.getParameter("invoicePeriod");
        String operatingMode = req.getParameter("operatingMode");
        String footer = req.getParameter("footer");
        String documents = req.getParameter("documents");
        String sizeLimit1 = req.getParameter("sizeLimit1");
        String sizeLimit2 = req.getParameter("sizeLimit2");
        String efrsb1 = req.getParameter("efrsb1");
        String efrsb2 = req.getParameter("efrsb2");
        String efrsbLogin = req.getParameter("efrsbLogin");
        String efrsbPassword = req.getParameter("efrsbPassword");

        try {
            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.125/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/SK", "postgres", "111");

            String sql = "UPDATE systemsettings " +
                        "SET issuer = '" + issuer + "', " +
                        "sender_email = '" + senderEmail + "', " +
                        "smtp_host = '" + smtpHost + "', " +
                        "smtp_port = '" + smtpPort + "', " +
                        "smtp_user_name = '" + smtpUsername + "', " +
                        "smtp_password = '" + smtpPassword + "', " +
                        "attempts = '" + attempts + "', " +
                        "url = '" + url + "', " +
                        "forbidden_oids = '" + forbiddenOids + "', " +
                        "cert = '" + cert + "', " +
                        "phone = '" + phone + "', " +
                        "campanies = '" + companies + "', " +
                        "site_name1 = '" + siteName1 + "', " +
                        "recovery_theme = '" + recovery + "', " +
                        "site_name2 = '" + siteName2 + "', " +
                        "check_oid = '" + isCheckOid + "', " +
                        "check_sert = '" + isCheckCert + "', " +
                        "invoice_period = '" + invoicePeriod + "', " +
                        "operating_mode = '" + operatingMode + "', " +
                        "footer = '" + footer + "', " +
                        "documents = '" + documents + "', " +
                        "reg_size_limit = '" + sizeLimit1 + "', " +
                        "invoice_size_limit = '" + sizeLimit2 + "', " +
                        "efrsb = '" + efrsb1 + "', " +
                        "efrsb_service = '" + efrsb2 + "', " +
                        "efrsb_login = '" + efrsbLogin + "', " +
                        "efrsb_password = '" + efrsbPassword + "' WHERE id = 1;";
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
