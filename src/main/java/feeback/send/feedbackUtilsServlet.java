package feeback.send;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;

@WebServlet(name = "feedbackUtilsServlet", value = "/feedbackUtilsServlet")
public class feedbackUtilsServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        HttpSession sesh = req.getSession();

        sesh.setAttribute("topic", req.getParameter("topic"));
        sesh.setAttribute("desc", req.getParameter("desc"));
        sesh.setAttribute("phone", req.getParameter("phone"));
        sesh.setAttribute("email", req.getParameter("email"));
    }
}
