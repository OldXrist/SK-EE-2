package sobr.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import javax.xml.transform.Result;
import java.io.File;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import static psql.connection.connect;

@MultipartConfig
@WebServlet(name = "SobrDocsUploadServlet", value = "/SobrDocsUploadServlet")
public class SobrDocsUploadServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        try {
            Connection c = connect();

            //String sql = "INSERT INTO meeting_docs VALUES (?, ?)";
            String sql = "SELECT id FROM sobr_org ORDER BY id DESC LIMIT 1";
            PreparedStatement ps = c.prepareStatement(sql);

            ResultSet rs = ps.executeQuery();

            long sk = 0;
            while (rs.next()){
                sk = rs.getLong(1);
            }

            rs.close();
            ps.close();

            String path = "C:\\Users\\manager\\Desktop\\SK-EE-2\\src\\main\\webapp\\meetings\\meeting" + sk;
            //String path = "../../../meetings/meeting"+sk+"/" + user;

            //Part p = req.getPart("file");
            String ext;

            File nFile = new File(path);
            if (nFile.mkdirs()) {
                for (Part part : req.getParts()) {
                    ext = part.getSubmittedFileName().split("\\.")[1];
                    part.write(path + File.separator + "Приложение№"+ part.getName().split("e")[1] + "." + ext);
                }
            }

            String sqlDocs = "INSERT INTO meeting_docs VALUES (?, ?)";
            PreparedStatement psDocs = c.prepareStatement(sqlDocs);

            psDocs.setLong(1, sk);
            psDocs.setString(2, path);

            psDocs.executeUpdate();

            psDocs.close();
            c.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}
