package sobr.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;

@WebServlet(name = "AddMeetingNumServlet", value = "/AddMeetingNumServlet")
public class AddMeetingNumServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        HttpSession sesh = req.getSession();
        sesh.setAttribute("meetingID", req.getParameter("sk"));
    }
}
