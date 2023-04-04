package feeback.send;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import javax.mail.Session;
import java.io.File;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Properties;

import static psql.connection.connect;

@WebServlet(name = "feedbackServlet", value = "/feedbackServlet")
@MultipartConfig
public class feedbackServlet extends HttpServlet {
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

    public String meetingNum = "";
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
        HttpSession sesh = req.getSession();


        String topic = (String) sesh.getAttribute("topic");
        String desc = (String) sesh.getAttribute("desc");
        String phone = (String) sesh.getAttribute("phone");
        String email = (String) sesh.getAttribute("email");
        String fName = (String) sesh.getAttribute("fName");

        String content = desc + "\n\nДанны отправителя: \n\n" + phone + "\n" + email;

        try {
            Connection c = connect();

            String smtpHost = GetData(c, SmtpHostSql(), "smtp_host");
            String smtpPort = GetData(c, SmtpPortSql(), "smtp_port");
            String fromEmail = GetData(c, SmtpLoginSql(), "smtp_user_name");
            String password = GetData(c, SmtpPasswordSql(), "smtp_password");

            String toEmail = "igor.sperik@bk.ru";

            Properties props = new Properties();
            props.put("mail.smtp.host", smtpHost); //SMTP Host
            props.put("mail.smtp.socketFactory.port", smtpPort); //SSL Port
            props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory"); //SSL Factory Class
            props.put("mail.smtp.auth", "true"); //Enabling SMTP Authentication
            props.put("mail.smtp.port", smtpPort); //SMTP Port

            javax.mail.Authenticator auth = new javax.mail.Authenticator() {
                protected javax.mail.PasswordAuthentication getPasswordAuthentication() {
                    return new javax.mail.PasswordAuthentication(fromEmail, password);
                }
            };
            javax.mail.Session session = Session.getDefaultInstance(props, auth);
            feedbackSend.sendEmail(session, fromEmail, toEmail, topic, content, fName);

            //File rm = new File("C:\\Users\\manager\\Desktop\\SK-EE-2\\src\\main\\webapp\\feedbackFiles" + File.separator + fName);
            File rm = new File("/opt/tomcat/webapps/ROOT/feedbackFiles" + File.separator + fName);
            rm.delete();

            sesh.removeAttribute("topic");
            sesh.removeAttribute("desc");
            sesh.removeAttribute("phone");
            sesh.removeAttribute("email");
            sesh.removeAttribute("fName");


        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}
