package id.check.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;

@WebServlet("/FILTERServlet")
public class FILTERServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        HttpSession sesh = req.getSession();
        String role = String.valueOf(sesh.getAttribute("role"));
        String type = String.valueOf(sesh.getAttribute("type"));

        if (type.equals("участник")){
            switch (role) {
                case "ЮЛ":
                    res.sendRedirect("/Sobr/lichnui_kobinetu/lk_uch/lk_uch_ql/lk_uch.html");
                    break;
                case "ИП":
                    res.sendRedirect("/Sobr/lichnui_kobinetu/lk_uch/lk_uch_ip/lk_uch.html");
                    break;
                case "ФЛ":
                    res.sendRedirect("/Sobr/lichnui_kobinetu/lk_uch/lk_uch_fl/lk_uch.html");
                    break;
            }
        }  else if (type.equals("организатор")){
            switch (role) {
                case "ЮЛ":
                    res.sendRedirect("/Sobr/lichnui_kobinetu/lk_org/lk_org_ql/lk_org.html");
                    break;
                case "ИП":
                    res.sendRedirect("/Sobr/lichnui_kobinetu/lk_org/lk_org_ip/lk_org.html");
                    break;
                case "ФЛ":
                    res.sendRedirect("/Sobr/lichnui_kobinetu/lk_org/lk_org_fl/lk_org.html");
                    break;
                case "АУ":
                    res.sendRedirect("/Sobr/lichnui_kobinetu/lk_org/lk_org_ay/lk_org.html");
                    break;
            }
        }
        else if (type.equals("admin")){
            if ("admin".equals(role)) {
                res.sendRedirect("/Sobr/lichnui_kobinetu/lk_admin/lk_admina.html");
            }
        }
        else if (type.equals("operator")){
            if ("operator".equals(role)) {
                res.sendRedirect("/Sobr/lichnui_kobinetu/lk_oper/lk_oper.html");
            }
        }
    }
}
