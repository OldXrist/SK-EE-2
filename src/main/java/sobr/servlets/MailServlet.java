        package sobr.servlets;

        import jakarta.servlet.*;
        import jakarta.servlet.http.*;
        import jakarta.servlet.annotation.*;

        import java.io.IOException;
        import java.io.PrintWriter;
        import java.sql.Connection;
        import java.sql.DriverManager;
        import java.sql.PreparedStatement;
        import java.sql.ResultSet;

@WebServlet(name = "MailServlet", value = "/MailServlet")
public class MailServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();

        HttpSession sesh = req.getSession();
        String email = String.valueOf(sesh.getAttribute("sessionUser"));

        String num = req.getParameter("num");

        try{
            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.125/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/SK", "postgres", "111");

            String sql = "SELECT id FROM sobr_org WHERE email_org = ? ORDER BY id DESC LIMIT 1;";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setString(1, email);
            ResultSet rs = ps.executeQuery();

            while (rs.next()){
                int id = rs.getInt(1);
                out.println(id);

                for (int i = 0; i < Integer.parseInt(num); i++) {
                    String sql1 = "INSERT INTO email_send VALUES (?, ?)";
                    PreparedStatement ps1 = c.prepareStatement(sql1);

                    ps1.setInt(1, id);
                    ps1.setString(2, req.getParameter("zmail" + i));

                    ps1.executeUpdate();
                    ps1.close();
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
    }
}