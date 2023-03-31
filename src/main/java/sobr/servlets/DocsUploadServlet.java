package sobr.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;

import static psql.connection.connect;

@WebServlet(name = "DocsUploadServlet", value = "/DocsUploadServlet")
@MultipartConfig
public class DocsUploadServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        HttpSession sesh = req.getSession();
        String user = String.valueOf(sesh.getAttribute("sessionUser"));
        long sk = Long.parseLong(String.valueOf(sesh.getAttribute("sk")));

        //String path = "C:\\Users\\manager\\Desktop\\SK-EE-2\\src\\main\\webapp\\meetings\\meeting" + sk + "\\" + user;
        String path = "../../../meetings/meeting"+sk+"/" + user;

        Part p = req.getPart("file");
        String ext = p.getSubmittedFileName().split("\\.")[1];

        File nFile = new File(path);
        if (nFile.mkdirs()) {
            for (Part part : req.getParts()) {
                part.write(path + File.separator + "Доверенность." + ext);
            }
        }

        try {
            Connection c = connect();

            String sql = "UPDATE uch SET doks = ? WHERE email = ? AND id = ?";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setString(1, path + File.separator + "Доверенность." + ext);
            ps.setString(2, user);
            ps.setLong(3, sk);

            ps.executeUpdate();

            ps.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}
