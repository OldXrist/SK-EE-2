package sobr.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.*;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import static psql.connection.connect;
import static sobr.servlets.RegDocsServlet.extractFileName;

@WebServlet(name = "ProtocolUpdateServlet", value = "/ProtocolUpdateServlet")
@MultipartConfig
public class ProtocolUpdateServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        HttpSession sesh = req.getSession();
        long sk = Long.parseLong(String.valueOf(sesh.getAttribute("meetingID")));

        String path = "/opt/tomcat/webapps/ROOT/protocols";
        String fName = "";

        new File(path).mkdirs();
        for (Part part : req.getParts()){
            fName = extractFileName(part);
            part.write(path + File.separator + fName);
        }

        try {
            Connection c = connect();

            String sql = "UPDATE prot SET protocol = ? WHERE id = ?;";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setString(1, path + File.separator + fName);
            ps.setLong(2, sk);

            ps.executeUpdate();
            ps.close();
            c.close();

        } catch (SQLException | ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
    }
}
