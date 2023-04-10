package sobr.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.File;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import static psql.connection.connect;

@WebServlet(name = "RegDocsServlet", value = "/RegDocsServlet")
@MultipartConfig
public class RegDocsServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        HttpSession sesh = req.getSession();
        String user = String.valueOf(sesh.getAttribute("email"));
        String path = "/opt/tomcat/webapps/ROOT/docs/" + user;

        String fName = "";
        new File(path).mkdirs();
        for (Part part : req.getParts()){
            fName = extractFileName(part);
            part.write(path + File.separator + fName);
        }

        sesh.removeAttribute("email");
        sesh.invalidate();

        try {
            Connection c = connect();

            String sql = "UPDATE main SET docs = ? WHERE email = ?";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setString(1, path + File.separator + fName);
            ps.setString(2, user);

            ps.executeUpdate();

            ps.close();
            c.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }

    public static String extractFileName(Part part) {
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
