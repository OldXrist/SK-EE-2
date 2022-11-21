package email;

import java.io.IOException;
import java.util.*;
import jakarta.mail.*;
import jakarta.mail.internet.*;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class email
 */
@WebServlet("/email")
public class email extends HttpServlet {
    private static final long serialVersionUID = 1L;


    public email() {
        super();
        // TODO Auto-generated constructor stub
    }


    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // TODO Auto-generated method stub

    }


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // TODO Auto-generated method stub
        try
        {
            Properties props = new Properties();
            props.put("mail.smtp.host", "smtp.gmail.com");
            props.put("mail.smtp.socketFactory.port", "465");
            props.put("mail.smtp.socketFactory.class", "jakarta.net.ssl.SSLSocketFactory");
            props.put("mail.smtp.auth", "true");
            props.put("mail.smtp.port", "465");

            Session session = Session.getDefaultInstance(props,
                    new jakarta.mail.Authenticator() {
                        protected PasswordAuthentication getPasswordAuthentication() {
                            return new PasswordAuthentication("mackcik228225@gmail.com","ywvhajgacbnwxxmh");
                        }
                    });

            Message message=new MimeMessage(session);
            message.setFrom(new InternetAddress("mackcik228225@gmail.com"));
            message.setRecipients(Message.RecipientType.TO,InternetAddress.parse("max260902@mail.ru"));
            message.setSubject("Agro Test");
            message.setContent("xyi\n", "text/html");
            Transport.send(message);
            System.out.println("message sent....");
        } catch(Exception ex)
        {
            ex.printStackTrace();
        }
    }

}
