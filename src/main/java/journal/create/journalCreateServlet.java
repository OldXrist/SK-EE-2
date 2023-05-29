package journal.create;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.URISyntaxException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import static journal.create.checkForJournal.journalExists;
import static psql.connection.connect;


@WebServlet(name = "journalCreateServlet", value = "/journalCreateServlet")
public class journalCreateServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        int id = Integer.parseInt(req.getParameter("sk"));
        PrintWriter out = res.getWriter();

        try {
            if (journalExists(id) == null) {
                Connection c = connect();
                String journalPath = journalUtils.main(id);

                String sql = "INSERT INTO journals VALUES (?, ?);";
                PreparedStatement ps = c.prepareStatement(sql);

                ps.setInt(1, id);
                ps.setString(2, journalPath);

                ps.executeUpdate();

                ps.close();
                c.close();
                out.println(journalPath);
            } else out.println(journalExists(id));

        } catch (URISyntaxException | ClassNotFoundException | SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
