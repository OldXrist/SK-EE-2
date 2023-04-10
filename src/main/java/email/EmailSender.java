package email;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import java.util.Properties;
import javax.mail.Session;
import javax.mail.Authenticator;
import javax.mail.PasswordAuthentication;

import static psql.connection.connect;

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
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();
        HttpSession sesh = req.getSession();
        String email = String.valueOf(sesh.getAttribute("sessionUser"));

        try {
            Connection c = connect();

            String sql = "SELECT id,data_u_vrem_sobr FROM sobr_org WHERE email_org = ? ORDER BY id DESC LIMIT 1;";

            PreparedStatement ps = c.prepareStatement(sql);

            ps.setString(1, email);
            ResultSet rs = ps.executeQuery();

            while (rs.next()){
                meetingNum = (rs.getString(2));
            }

            rs.close();
            ps.close();
            out.close();
            c.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            Connection c = connect();

            String smtpHost = GetData(c, SmtpHostSql(), "smtp_host");
            String smtpPort = GetData(c, SmtpPortSql(), "smtp_port");
            String fromEmail = GetData(c, SmtpLoginSql(), "smtp_user_name");
            String password = GetData(c, SmtpPasswordSql(), "smtp_password");

            String toEmail = request.getParameter("email");
            String subject = "";
            String body = "";

            switch (request.getParameter("subject")) {
                case "Тест":
                    subject = "Тестовое сообщение";
                    body = "Поздравляем, тестовое сообщение успешно получено!";
                    break;
                case "Заявка допущена":
                    subject = "Регистрация в системе Собрания Кредиторов";
                    body = "Уважаемый пользователь!" +
                            "Ваш аккаунт прошёл проверку и вы зарегистрированы на платформе «Собрание кредиторов»." +
                            "Для входа перейдите по ссылке - https://sk.tenderstandart.ru/login.html";
                    break;
                case "Заявка отклонена":
                    subject = "Заявка отклонена";
                    body = "Ваша заявка на проведение собрания отклонена!";
                    break;
                case "Рассылка":
                    subject = "Уведомление о собрании";
                    body = "Уважаемый пользователь!" +
                            "Уведомляем, что на платформе Собрание Кредиторов будет проведено собрание на тему" +
                            "" +
                            "https://sk.tenderstandart.ru/lichnui_kobinetu/lk_uch/z_sobr/z_sobr_uch_2.html?sk=22" +
                            "" +
                            "" +
                            "Уведомляем, что для участия в собрании пользователь должен быть зарегистрирован на платформе." +
                            "Видео инструкции доступны по ссылки https://www.youtube.com/@tenderstandart";
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
