package feeback.send;

import javax.mail.Message;
import javax.mail.Multipart;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import java.io.File;
import java.io.IOException;

public class feedbackSend {
    public static void sendEmail(Session session, String fromEmail, String toEmail, String subject, String body, String filePath) {
        try {
            //Отправка текстового сообщения
            MimeMessage msg = new MimeMessage(session);
            msg.addHeader("Content-type", "text/HTML; charset=UTF-8");
            msg.addHeader("format", "flowed");
            msg.addHeader("Content-Transfer-Encoding", "8bit");
            msg.setFrom(new InternetAddress(fromEmail, "ТендерСтандарт"));
            //msg.setReplyTo(InternetAddress.parse("AlexMitra93@yandex.ru", false));
            msg.setSubject(subject);

            Multipart multipart = new MimeMultipart();

            MimeBodyPart attachmentPart = new MimeBodyPart();

            MimeBodyPart textPart = new MimeBodyPart();

            try {

                //File f = new File("C:\\Users\\manager\\Desktop\\SK-EE-2\\src\\main\\webapp\\feedbackFiles" + File.separator + filePath);
                File f = new File("/opt/tomcat/webapps/ROOT/feedbackFiles" + File.separator + filePath);

                attachmentPart.attachFile(f);
                textPart.setText(body);
                multipart.addBodyPart(textPart);
                multipart.addBodyPart(attachmentPart);

            } catch (IOException e) {

                e.printStackTrace();

            }

            msg.setContent(multipart);

            msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(toEmail, false));
            Transport.send(msg);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
