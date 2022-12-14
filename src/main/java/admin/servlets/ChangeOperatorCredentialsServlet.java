package admin.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

@WebServlet("/ChangeOperatorCredentialsServlet")
public class ChangeOperatorCredentialsServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {

        String lastName = req.getParameter("lastName");
        String firstName = req.getParameter("firstName");
        String middleName = req.getParameter("middleName");
        String phone = req.getParameter("phone");
        String email = req.getParameter("email");
        String login = req.getParameter("login");
        String password = req.getParameter("password");

        try{
            Class.forName("org.postgresql.Driver");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres2", "postgres", "postgresql");
            Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/SK", "postgres", "111");

            String sql1 = "UPDATE adminaccounts SET firstname = '" + firstName + "' WHERE id = 2";
            PreparedStatement ps1 = c.prepareStatement(sql1);
            ps1.executeUpdate();

            String sql2 = "UPDATE adminaccounts SET middlename = '" + middleName + "' WHERE id = 2";
            PreparedStatement ps2 = c.prepareStatement(sql2);
            ps2.executeUpdate();

            String sql3 = "UPDATE adminaccounts SET lastname = '" + lastName + "' WHERE id = 2";
            PreparedStatement ps3 = c.prepareStatement(sql3);
            ps3.executeUpdate();

            String sql4 = "UPDATE adminaccounts SET phonenumber = '" + phone + "' WHERE id = 2";
            PreparedStatement ps4 = c.prepareStatement(sql4);
            ps4.executeUpdate();

            String sql5 = "UPDATE adminaccounts SET email = '" + email + "' WHERE id = 2";
            PreparedStatement ps5 = c.prepareStatement(sql5);
            ps5.executeUpdate();

            String sql6 = "UPDATE adminaccounts SET username = '" + login + "' WHERE id = 2";
            PreparedStatement ps6 = c.prepareStatement(sql6);
            ps6.executeUpdate();

            String sql7 = "UPDATE main SET pass = '" + password + "' WHERE role_users = 'operator'";
            PreparedStatement ps7 = c.prepareStatement(sql7);
            ps7.executeUpdate();

            String sql8 = "UPDATE main SET email = '" + email + "' WHERE role_users = 'operator'";
            PreparedStatement ps8 = c.prepareStatement(sql8);
            ps8.executeUpdate();

            ps1.close();
            ps2.close();
            ps3.close();
            ps4.close();
            ps5.close();
            ps6.close();
            ps7.close();
            ps8.close();
            c.close();
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
    }
}


