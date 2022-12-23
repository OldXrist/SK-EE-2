package sobr.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

@WebServlet(name = "DocsUploadServlet", value = "/DocsUploadServlet")
@MultipartConfig
public class DocsUploadServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        HttpSession sesh = req.getSession();
        String user = String.valueOf(sesh.getAttribute("sessionUser"));
        long sk = Long.parseLong(String.valueOf(sesh.getAttribute("sk")));

        String path = "C:\\Users\\manager\\Desktop\\SK-EE-2\\src\\main\\webapp\\meetings\\meeting"+sk+"\\" + user;

        Part p = req.getPart("file");
        String ext = p.getSubmittedFileName().split("\\.")[1];

        new File(path).mkdirs();
        for (Part part : req.getParts()){
            part.write(path + File.separator + "Доверенность." + ext);
        }
    }
}
