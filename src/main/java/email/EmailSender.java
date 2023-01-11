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
        return "SELECT smtp_host FROM public.systemsettings";
    }
    public String SmtpPortSql() {
        return "SELECT smtp_port FROM public.systemsettings";
    }
    public String SmtpLoginSql() {
        return "SELECT smtp_user_name FROM public.systemsettings";
    }
    public String SmtpPasswordSql() {
        return "SELECT smtp_password FROM public.systemsettings";
    }

    public String GetData(Connection _c, String _sql, String _columnName) {
        String result = "";
        try {
            PreparedStatement ps = _c.prepareStatement(_sql);
            ResultSet rs = ps.executeQuery();
            if (rs.next())
                result = rs.getString(_columnName);

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
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/SK", "postgres", "111");
            Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres2", "postgres", "postgresql");

            String smtpHost = GetData(c, SmtpHostSql(), "smtp_host");
            String smtpPort = GetData(c, SmtpPortSql(), "smtp_port");
            String fromEmail = GetData(c, SmtpLoginSql(), "smtp_user_name");
            String password = GetData(c, SmtpPasswordSql(), "smtp_password");

            String toEmail = request.getParameter("email");
            String subject = "";
            String body = "";

            switch (request.getParameter("subject")) {
                case "Регистрация":
                    subject = "Регистрация";
                    body = "Поздравляем, вы успешно зарегестрированы!";
                    break;
                case "Тест":
                    subject = "Тестовое сообщение";
                    body = "Поздравляем, тестовое сообщение успешно получено!";
                    break;
                case "Заявка допущена":
                    subject = "Заявка допущена";
                    body = "Ваша заявка на проведение собрания допущена!";
                    break;
                case "Заявка отклонена":
                    subject = "Заявка отклонена";
                    body = "Ваша заявка на проведение собрания отклонена!";
                    break;
                case "Рассылка":
                    subject = "Заявка отклонена";
                    body = "Ваша заявка на проведение собрания отклонена!";
                    break;
            }

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
            EmailUtil.sendEmail(session, fromEmail, toEmail, subject, body);
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}
