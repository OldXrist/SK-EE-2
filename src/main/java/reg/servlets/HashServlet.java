package reg.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.security.NoSuchAlgorithmException;

import static reg.servlets.GFG.*;

@WebServlet(name = "HashServlet", value = "/HashServlet")
public class HashServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();

        String pass = "MmFbm5h8";
        byte[] salt;
        try {
            salt = getSalt();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }

        String hash = getSecurePassword(pass, salt);
        out.println("Hash: " + hash);
        try {
            String strSalt = toHex(salt);
            out.println("Salt: " + strSalt);
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }
}
