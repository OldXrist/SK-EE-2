package sobr.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.*;

@WebServlet(name = "ProtocolUpdateServlet", value = "/ProtocolUpdateServlet")
public class ProtocolUpdateServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        long sk = Long.parseLong(req.getParameter("sk"));

        String protocolName = "Протокол собрания кредиторов №" + sk + ".doc";
        String fName = "C:\\Users\\manager\\Desktop\\SK-EE-2\\src\\main\\webapp\\protocols\\" + protocolName;
        File protocol = new File(fName);
        try {
            FileWriter w = new FileWriter(fName);

            w.write(req.getParameter("text"));
            w.close();

        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
