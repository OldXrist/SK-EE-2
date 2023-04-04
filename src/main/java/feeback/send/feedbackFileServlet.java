package feeback.send;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.File;
import java.io.IOException;

import static sobr.servlets.RegDocsServlet.extractFileName;

@WebServlet(name = "feedbackFileServlet", value = "/feedbackFileServlet")
@MultipartConfig
public class feedbackFileServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        HttpSession sesh = req.getSession();

        String fName = "";
        new File("C:\\Users\\manager\\Desktop\\SK-EE-2\\src\\main\\webapp\\feedbackFiles").mkdirs();
        for (Part part : req.getParts()){
            fName = extractFileName(part);
            part.write("C:\\Users\\manager\\Desktop\\SK-EE-2\\src\\main\\webapp\\feedbackFiles" + File.separator + fName);
        }

        sesh.setAttribute("fName", fName);
    }
}
