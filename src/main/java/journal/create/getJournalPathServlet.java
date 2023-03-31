package journal.create;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.SQLException;

import static journal.create.checkForJournal.journalExists;

@WebServlet(name = "getJournalPathServlet", value = "/getJournalPathServlet")
public class getJournalPathServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        int id = Integer.parseInt(req.getParameter("sk"));
        PrintWriter out = res.getWriter();
        try {
            out.println(journalExists(id));
        } catch (SQLException | ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
    }
}
