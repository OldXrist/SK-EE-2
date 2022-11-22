package email;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.sql.*;
import java.util.Properties;
import javax.mail.Session;
import javax.mail.Authenticator;
import javax.mail.PasswordAuthentication;

@WebServlet("/EmailSender")
public class EmailSender extends HttpServlet {
    public String SmtpHostSql() {
        return "SELECT smtp_host FROM systemsettings";
    }
    public String SmtpPortSql() {
        return "SELECT smtp_port FROM systemsettings";
    }
    public String SmtpLoginSql() {
        return "SELECT smtp_user_name FROM systemsettings";
    }
    public String SmtpPasswordSql() {
        return "SELECT smtp_password FROM systemsettings";
    }

    public String GetData(Connection _c, String _sql) {
        String result = "";
        try {
            PreparedStatement ps = _c.prepareStatement(_sql);
            ResultSet rs = ps.executeQuery();
            if (rs.next())
                result = rs.getString("smtp_host");

            rs.close();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
        return result;
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/SK", "postgres", "111");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres", "postgres", "postgresql");

            String smtpHost = GetData(c, SmtpHostSql());
            String smtpPort = GetData(c, SmtpPortSql());
            String fromEmail = GetData(c, SmtpLoginSql());
            String password = GetData(c, SmtpPasswordSql());

            String toEmail = request.getParameter("toEmail");
            String subject = request.getParameter("subject");
            String body = request.getParameter("body");

//            String fromEmail = "AlexMitra93@yandex.ru";
//            String password = "pzbdqheouzwxocgz";
//            String toEmail = "alexmitradev5@gmail.com";
//            String subject = "";
//            String body = "";


            Properties props = new Properties();
            props.put("mail.smtp.host", smtpHost); //SMTP Host
            props.put("mail.smtp.socketFactory.port", smtpPort); //SSL Port
            props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory"); //SSL Factory Class
            props.put("mail.smtp.auth", "true"); //Enabling SMTP Authentication
            props.put("mail.smtp.port", smtpPort); //SMTP Port

            Authenticator auth = new Authenticator() {
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication(fromEmail, password);
                }
            };
            Session session = Session.getDefaultInstance(props, auth);
            EmailUtil.sendEmail(session, toEmail, subject, body);
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}
