package sobr.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

@WebServlet("/CRServlet")
public class CRServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try{
            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/SK", "postgres", "111");

            String sql = "SELECT id FROM sobr_org";
            PreparedStatement ps = c.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();

            String id = null;
            while (rs.next()){
                id = rs.getString(1);
            }

            File nwDir = new File("C:\\Users\\manager\\Desktop\\SK-EE-2\\src\\main\\webapp\\lichnui_kobinetu\\lk_org\\sk"+ id);
            if (!nwDir.exists()){
                nwDir.mkdirs();
            }
            PrintWriter pw = new PrintWriter("C:\\Users\\manager\\Desktop\\SK-EE-2\\src\\main\\webapp\\lichnui_kobinetu\\lk_org\\sk"+ id +"\\sobr.txt");
            pw.println("poopa");

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
    }
}
