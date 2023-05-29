package index.stats;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;

import static index.stats.statUlils.*;
import static psql.connection.connect;
import static reg.servlets.GFG.toHex;
import static reg.servlets.getUserId.getID;

@WebServlet(name = "indexStatsServlet", value = "/indexStatsServlet")
public class indexStatsServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();

        out.println(getParticipantCount());
        out.println(getOrganizersCount());
        out.println(getMeetingsCount());
    }
}
