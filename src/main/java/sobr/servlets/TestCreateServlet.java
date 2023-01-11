package sobr.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

@WebServlet(name = "TestCreateServlet", value = "/TestCreateServlet")
public class TestCreateServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        try {
            new File("/opt/protocols/protocol.txt");
            FileWriter w = new FileWriter("/opt/protocols/protocol.txt");

            w.write("String written");
            w.flush();
            w.close();

        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
