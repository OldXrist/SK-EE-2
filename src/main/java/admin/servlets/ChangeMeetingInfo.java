package admin.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

@WebServlet("/ChangeMeetingInfo")
public class ChangeMeetingInfo extends HttpServlet {

//    public String setAuOrgSql() {
//        String setOrgSql = "UPDATE au SET firstname = '" + firstName + "' WHERE id = 1";
//        return setOrgSql;
//    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        //получаем данные с фронтенда
        String meetingNumber = request.getParameter("_meetingNumber");
        String orgFullName = request.getParameter("_orgFullName");
        String[] arrFromOrgFullName = orgFullName.split(" ");
        String orgFirstName = arrFromOrgFullName[1];
        String orgSecondName = arrFromOrgFullName[0];
        String orgMiddleName = arrFromOrgFullName[2];
//        String orgStatus = request.getParameter("_orgStatus");
//        String orgStatusShort;
//        switch (orgStatus) {
//            case "Арбитражный управляющий": orgStatusShort = "АУ";
//                break;
//            case "Физическое лицо": orgStatusShort = "ФЛ";
//                break;
//            case "Индивидуальный предприниматель": orgStatusShort = "ИП";
//                break;
//            case "Юридическое лицо": orgStatusShort = "ЮЛ";
//                break;
//        }
        String frsNumber = request.getParameter("_frsNumber");
        String sroName = request.getParameter("_sroName");
        String orgPhone = request.getParameter("_orgPhone");
//        String orgEmail = request.getParameter("_orgEmail");
        String efrsbNumber = request.getParameter("_efrsbNumber");
        String debtorFullName = request.getParameter("_debtorFullname");
        String[] arrFromDebtorFullName = orgFullName.split(" ");
        String debtorFirstName = arrFromDebtorFullName[1];
        String debtorSecondName = arrFromDebtorFullName[0];
        String debtorMiddleName = arrFromDebtorFullName[2];
        String debtorInn = request.getParameter("_debtorInn");
        String debtorOgrn = request.getParameter("_debtorOgrn");
        String courtName = request.getParameter("_courtName");
        String caseNumber = request.getParameter("_caseNumber");
        String basis = request.getParameter("_basis");

        try {
            Class.forName("org.postgresql.Driver");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres2", "postgres", "postgresql");
            Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/SK2", "postgres", "111");


//            PreparedStatement ps1 = c.prepareStatement(setAuOrgSql());
//            ps1.executeUpdate();

//            ps1.close();
            c.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}
