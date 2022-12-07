package sobr.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

@WebServlet(name = "ProtocolCreateServlet", value = "/ProtocolCreateServlet")
public class ProtocolCreateServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();
        String sk = req.getParameter("sk");

        String protocolName = "protocol" + sk + ".doc";

        try {
            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/SK", "postgres", "111");

            String sql = "SELECT data_u_vrem_sobr, poln_naum, famil, name, otch, pocht_adres, naim_orb_suda, nomer_dela, osn_dlia_sobr  FROM sobr_org, uch WHERE sobr_org.id = ? AND uch.id = ?";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setString(1, sk);

            ResultSet rs = ps.executeQuery();

            File protocol = new File("C:\\Users\\manager\\Desktop\\SK-EE-2\\src\\main\\webapp\\protocols\\" + protocolName);
            FileWriter w = new FileWriter("C:\\Users\\manager\\Desktop\\SK-EE-2\\src\\main\\webapp\\protocols\\" + protocolName);

            w.write("                                   ПРОТОКОЛ\n" +
                    "                               собрания кредиторов \n" +
                    "\n" +
                    "Организатор __________________________\n" +
                    "Тип собрания: заочное.\n" +
                    "Начало собрания ______________________\n" +
                    "Место проведения: https://sk.tenderstandart.ru\n" +
                    "Полное наименование должника_______________________\n" +
                    "Сокращенное наименование должника__________________\n" +
                    "Место нахождения должника_______________________\n" +
                    "Дело о несостоятельности(банкротстве)__________(указать арбитражный суд какой области\\города) дело №_________\n" +
                    "Основание проведения: _______________________\n" +
                    "Присутствуют:\n" +
                    "№\tНаименование кредитора\tПредставитель, полномочия\n" +
                    "\t\t\n" +
                    "\t\t\n" +
                    "Всего: ____кредитора(ов), что составляет ____% от общего числа голосов конкурсных кредиторов и уполномоченных органов\n" +
                    "\n" +
                    "Кредиторы о времени и месте проведения собрания уведомлены надлежащим образом.\n" +
                    "Собрание кредиторов правомочно, на собрании присутствуют кредиторы с числом голосов, достаточным для принятия решений в соответствии со ст.12 ФЗ «О несостоятельности (банкротстве)» от 26.10.2002г. № 127-ФЗ.\n" +
                    "Собрание кредиторов ведет представитель _____указывать организацию__ ___ФИО организатора собрания в именительном падеже_______.\n" +
                    "Повестка собрания кредиторов:\n" +
                    "1.\n" +
                    "2.\n" +
                    "3.\n" +
                    "\n" +
                    "1 вопрос:_______________\n" +
                    "Результат голосования:\n" +
                    "- «ЗА»- ___голосов, что составляет ____% голосов кредиторов, присутствующих на собрании кредиторов.\n" +
                    "-«ПРОТИВ» - ___голосов, что составляет ____% голосов кредиторов, присутствующих на собрании кредиторов. \n" +
                    "Решение:________________________________________________\n" +
                    "-«ВОЗДЕРЖАЛСЯ» -  ___голосов, что составляет ____% голосов кредиторов, присутствующих на собрании кредиторов.\n" +
                    "\n" +
                    "__ вопрос: ________________\n" +
                    "Результат голосования:\n" +
                    "- «ЗА»- ___голосов, что составляет ____% голосов кредиторов, присутствующих на собрании кредиторов.\n" +
                    "-«ПРОТИВ» - ___голосов, что составляет ____% голосов кредиторов, присутствующих на собрании кредиторов. \n" +
                    "Решение:\n" +
                    "\n" +
                    "Окончание собрания кредиторов:___________\n" +
                    "\n" +
                    "\n" +
                    "Организатор собрания\n" +
                    "____Организация_____                                             \n" +
                    "                                                           Ф.И.О.\n");

            w.close();
        } catch (IOException e) {
            out.println("An error occurred.");
            e.printStackTrace();
        } catch (SQLException | ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
    }
}
