package sobr.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.File;
import java.io.IOException;

@WebServlet(name = "RegDocsServlet", value = "/RegDocsServlet")
@MultipartConfig
public class RegDocsServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        HttpSession sesh = req.getSession();
        String user = String.valueOf(sesh.getAttribute("email"));
        String path = "C:\\Users\\manager\\Desktop\\SK-EE-2\\src\\main\\webapp\\docs\\" + user;

        new File(path).mkdirs();
        for (Part part : req.getParts()){
            part.write(path + File.separator + extractFileName(part));
        }

        sesh.removeAttribute("email");
        sesh.invalidate();
    }

    private String extractFileName(Part part) {
        String contentDisp = part.getHeader("content-disposition");
        String[] items = contentDisp.split(";");
        for (String s : items) {
            if (s.trim().startsWith("filename")) {
                return s.substring(s.indexOf("=") + 2, s.length()-1);
            }
        }
        return "";
    }
}
