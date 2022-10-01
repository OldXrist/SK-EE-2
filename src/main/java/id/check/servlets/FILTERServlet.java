package id.check.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/FILTERServlet")
public class FILTERServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();
        HttpSession sesh = req.getSession();
        String role = String.valueOf(sesh.getAttribute("role"));
        String type = String.valueOf(sesh.getAttribute("type"));

        if (type.equals("участник")){
            switch (role) {
                case "ЮЛ":
                    res.sendRedirect("http://localhost:8080/Sobr/lichnui_kobinetu/lk_uch/lk_uch_ql/lk_uch.html");
                    break;
                case "ИП":
                    res.sendRedirect("http://localhost:8080/Sobr/lichnui_kobinetu/lk_uch/lk_uch_ip/lk_uch.html");
                    break;
                case "ФЛ":
                    res.sendRedirect("http://localhost:8080/Sobr/lichnui_kobinetu/lk_uch/lk_uch_fl/lk_uch.html");
                    break;
            }
        }  else if (type.equals("организатор")){
            switch (role) {
                case "ЮЛ":
                    res.sendRedirect("http://localhost:8080/Sobr/lichnui_kobinetu/lk_org/lk_org_ql/lk_org.html");
                    break;
                case "ИП":
                    res.sendRedirect("http://localhost:8080/Sobr/lichnui_kobinetu/lk_org/lk_org_ip/lk_org.html");
                    break;
                case "ФЛ":
                    res.sendRedirect("http://localhost:8080/Sobr/lichnui_kobinetu/lk_org/lk_org_fl/lk_org.html");
                    break;
                case "АУ":
                    res.sendRedirect("http://localhost:8080/Sobr/lichnui_kobinetu/lk_org/lk_org_ay/lk_org.html");
                    break;
            }
        }
    }
}
