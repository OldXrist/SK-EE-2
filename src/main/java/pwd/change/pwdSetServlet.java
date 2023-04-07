package pwd.change;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import javax.naming.ldap.PagedResultsControl;
import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import static psql.connection.connect;
import static pwd.change.getSalt.getUserSalt;
import static reg.servlets.GFG.*;

@WebServlet(name = "pwdSetServlet", value = "/pwdSetServlet")
public class pwdSetServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        String pwd = req.getParameter("pwd");
        String email = req.getParameter("email");
        String checksum = req.getParameter("checksum");

        String checkEmail = getSecurePassword(email, getUserSalt(email));

        if (checksum.equals(checkEmail)){
            byte[] salt;
            try {
                salt = getSalt();
            } catch (NoSuchAlgorithmException e) {
                throw new RuntimeException(e);
            }
            String encryptedPass = getSecurePassword(pwd, salt);

            try {
                Connection c = connect();

                String sql = "UPDATE main SET pass = ?, salt = ? WHERE email = ?;";
                PreparedStatement ps = c.prepareStatement(sql);

                ps.setString(1, encryptedPass);
                ps.setString(2, toHex(salt));
                ps.setString(3, email);

                ps.executeUpdate();

                ps.close();
                c.close();

            } catch (SQLException | ClassNotFoundException | NoSuchAlgorithmException e) {
                throw new RuntimeException(e);
            }
        }
    }
}
