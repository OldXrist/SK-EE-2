package email;

import jakarta.servlet.annotation.*;
import java.util.Properties;
import jakarta.mail.Message;
import jakarta.mail.MessagingException;
import jakarta.mail.PasswordAuthentication;
import jakarta.mail.internet.*;
import jakarta.mail.*;

@WebServlet(name = "email", value = "/email")
public class email {



    public static void main(String[] args) {

        Properties p = new Properties();
        p.put("mail.smtp.host", "smtp.gmail.com");
        p.put("mail.smtp.socketFactory.port", 587);
        p.put("mail.smtp.socketFactory.class", "jakarta.net.ssl.SSLSocketFactory");
        p.put("mail.smtp.auth", "true");
        p.put("mail.smtp.port", 587);




        Session s = Session.getInstance(p,

                new jakarta.mail.Authenticator(){


                    protected PasswordAuthentication getPasswordAuthentication(){

                        return new PasswordAuthentication("mackcik228225@gmail.com", "chndipgjwleldyfj");

                    }


                }
        );


        Message message = new MimeMessage(s);
        try {
            message.setFrom(new InternetAddress("mackcik228225@gmail.com"));
            message.setRecipient(Message.RecipientType.TO, new InternetAddress("max260902@mail.ru"));
            message.setSubject("Тема письма");
            message.setText("Сообщение в письме");

            Transport.send(message);

            System.out.println("Письмо успешно отправлено");

        } catch (MessagingException e) {
            System.out.println("Письмо не отправилось");
            e.printStackTrace();
        }

    }

}
