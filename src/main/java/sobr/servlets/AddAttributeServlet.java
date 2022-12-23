package sobr.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;

@WebServlet(name = "AddAttributeServlet", value = "/AddAttributeServlet")
public class AddAttributeServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        HttpSession sesh = req.getSession();
        long sk = Long.parseLong(req.getParameter("sk"));
        sesh.setAttribute("sk", sk);
    }
}
