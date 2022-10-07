package login.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

@WebServlet("/LOGOUTServlet")
public class LOGOUTServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();
        HttpSession sesh = req.getSession(true);
        String email = String.valueOf(sesh.getAttribute("sessionUser"));
        sesh.removeAttribute("email");
        sesh.removeAttribute("role");
        sesh.removeAttribute("type");
        sesh.invalidate();
        res.sendRedirect("http://localhost:8080/Sobr/index2.html");
    }
}
