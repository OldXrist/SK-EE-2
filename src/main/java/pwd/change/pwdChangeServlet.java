package pwd.change;

import email.EmailUtil;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import javax.mail.Authenticator;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import java.io.IOException;
import java.io.PrintWriter;
import java.security.NoSuchAlgorithmException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Properties;

import static psql.connection.connect;
import static pwd.change.getSalt.getUserSalt;
import static reg.servlets.GFG.*;

@WebServlet(name = "pwdChangeServlet", value = "/pwdChangeServlet")
public class pwdChangeServlet extends HttpServlet {
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
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        String email = req.getParameter("email");
        String baseResetURL = "https://sk.tenderstandart.ru/pwd_change.html?";
        String ecryptedEmail = getSecurePassword(email, getUserSalt(email));
        String resetURL = baseResetURL + "email=" + email + "&checksum=" + ecryptedEmail;

        try {
            Connection c = connect();

            String smtpHost = GetData(c, SmtpHostSql(), "smtp_host");
            String smtpPort = GetData(c, SmtpPortSql(), "smtp_port");
            String fromEmail = GetData(c, SmtpLoginSql(), "smtp_user_name");
            String password = GetData(c, SmtpPasswordSql(), "smtp_password");

            String subject = "Смена пароля";
            String body = "Здравствуйте,\n\nНедавно Вы запросили сброс пароля на платформе \"Собрание кредиторов\".\n\nПожалуйста, перейдите по ссылке ниже чтобы продолжить:\n\n" + resetURL + "\n\nЕсли вы не запрашивали смену пароля, то игнорируйте это сообщение.";


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
            EmailUtil.sendEmail(session, fromEmail, email, subject, body);
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}
