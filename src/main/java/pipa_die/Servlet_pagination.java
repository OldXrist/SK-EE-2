package pipa_die;

        import jakarta.servlet.ServletException;
        import jakarta.servlet.annotation.WebServlet;
        import jakarta.servlet.http.HttpServlet;
        import jakarta.servlet.http.HttpServletRequest;
        import jakarta.servlet.http.HttpServletResponse;

        import java.io.IOException;
        import java.io.PrintWriter;
        import java.sql.Connection;
        import java.sql.PreparedStatement;
        import java.sql.ResultSet;

        import static psql.connection.connect;

@WebServlet(name = "Serpagination", value = "/Serpagination")
public class Servlet_pagination extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();

        try {
            Connection c = connect();

            String sql = "SELECT count(*) FROM sobr_org";
            PreparedStatement ps = c.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {

                rs.getInt("count");
                String Serpagination = rs.getString(1);
                out.println(Serpagination);
            }

            rs.close();
            ps.close();
            out.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}