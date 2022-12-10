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
        String s = req.getParameter("sk");
        long sk = Long.parseLong(s);

        String protocolName = "protocol" + sk + ".doc";

        try {
            String fName = "C:\\Users\\manager\\Desktop\\SK-EE-2\\src\\main\\webapp\\protocols\\" + protocolName;
            File protocol = new File(fName);
            //FileWriter w = new FileWriter(fName, true);

            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/SK", "postgres", "111");

            String sql = "SELECT email_org, type_org, data_u_vrem_sobr, poln_naum, famil, name, otch, pocht_adres, naim_orb_suda, nomer_dela, osn_dlia_sobr  FROM sobr_org WHERE id = ?";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setLong(1, sk);

            ResultSet rs = ps.executeQuery();

            while (rs.next()){
                String emailOrg = rs.getString(1);
                String typeOrg = rs.getString(2);
                switch (typeOrg){
                    case "ЮЛ":
                        String sql1 = "SELECT poln_naim FROM ql WHERE email = ?";
                        PreparedStatement ps1 = c.prepareStatement(sql1);
                        ps1.setString(1, emailOrg);
                        ResultSet rs1 = ps1.executeQuery();
                        while (rs1.next()){
                            FileWriter w = new FileWriter(fName, true);
                            w.write("                                   ПРОТОКОЛ\n" +
                                    "                               собрания кредиторов \n" +
                                    "\n" +
                                    "Организатор " + rs1.getString(1) + "\n");
                            w.close();
                        }
                        break;
                    case "ИП":
                        String sql2 = "SELECT famil, name, otch FROM ip WHERE email = ?";
                        PreparedStatement ps2 = c.prepareStatement(sql2);
                        ps2.setString(1, emailOrg);
                        ResultSet rs2 = ps2.executeQuery();
                        while (rs2.next()){
                            FileWriter w2 = new FileWriter(fName, true);
                            w2.write("                                   ПРОТОКОЛ\n" +
                                    "                               собрания кредиторов \n" +
                                    "\n" +
                                    "Организатор " + rs2.getString(1) + " " + rs2.getString(2) + " " + rs2.getString(3) + "\n");
                            w2.close();
                        }
                        break;
                    case "ФЛ":
                        String sql3 = "SELECT famil, name, otch FROM fl WHERE email = ?";
                        PreparedStatement ps3 = c.prepareStatement(sql3);
                        ps3.setString(1, emailOrg);
                        ResultSet rs3 = ps3.executeQuery();
                        while (rs3.next()){
                            FileWriter w3 = new FileWriter(fName, true);
                            w3.write("                                   ПРОТОКОЛ\n" +
                                    "                               собрания кредиторов \n" +
                                    "\n" +
                                    "Организатор " + rs3.getString(1) + " " + rs3.getString(2) + " " + rs3.getString(3) + "\n");
                            w3.close();
                        }
                        break;
                    case "АУ":
                        String sql4 = "SELECT famil, name, otch FROM au WHERE email = ?";
                        PreparedStatement ps4 = c.prepareStatement(sql4);
                        ps4.setString(1, emailOrg);
                        ResultSet rs4 = ps4.executeQuery();
                        while (rs4.next()){
                            FileWriter w4 = new FileWriter(fName, true);
                            w4.write("                                   ПРОТОКОЛ\n" +
                                    "                               собрания кредиторов \n" +
                                    "\n" +
                                    "Организатор " + rs4.getString(1) + " " + rs4.getString(2) + " " + rs4.getString(3) + "\n");
                            w4.close();
                        }
                        break;
                }
                FileWriter w = new FileWriter(fName, true);

                if (rs.getString(4).equals("null")){
                    w.write("Тип собрания: заочное.\n" +
                            "Начало собрания: "+ rs.getString(3) +"\n" +
                            "Место проведения: https://sk.tenderstandart.ru\n" +
                            "Полное наименование должника: "+ rs.getString(5) + " " + rs.getString(6) + " " + rs.getString(7) + "\n" +
                            "Место нахождения должника: "+ rs.getString(8) +"\n" +
                            "Дело о несостоятельности(банкротстве): "+ rs.getString(9) +" дело № "+ rs.getString(10) +"\n" +
                            "Основание проведения: "+ rs.getString(11) +"\n");
                } else {
                    w.write("Тип собрания: заочное.\n" +
                            "Начало собрания: "+ rs.getString(3) +"\n" +
                            "Место проведения: https://sk.tenderstandart.ru\n" +
                            "Полное наименование должника: "+ rs.getString(4) + "\n" +
                            "Место нахождения должника: "+ rs.getString(8) +"\n" +
                            "Дело о несостоятельности(банкротстве): "+ rs.getString(9) +" дело № "+ rs.getString(10) +"\n" +
                            "Основание проведения: "+ rs.getString(11) +"\n" +
                            "Присутствуют:\n");
                }

                w.close();
            }

            ps.close();
            rs.close();

            String sql5 = "SELECT email, type_uch FROM uch WHERE id = ? AND status = ?";
            PreparedStatement ps5 = c.prepareStatement(sql5);

            ps5.setLong(1, sk);
            ps5.setString(2, "Допущена");

            ResultSet rs5 = ps5.executeQuery();

            int i = 1;
            while (rs5.next()) {
                String emailUch = rs5.getString(1);
                String typeUch = rs5.getString(2);
                switch (typeUch){
                    case "ЮЛ":
                        String sql1 = "SELECT poln_naim FROM ql WHERE email = ?";
                        PreparedStatement ps1 = c.prepareStatement(sql1);
                        ps1.setString(1, emailUch);
                        ResultSet rs1 = ps1.executeQuery();
                        while (rs1.next()){
                            FileWriter w = new FileWriter(fName, true);
                            w.write(i + ". " + rs1.getString(1) + "\n");
                            i++;
                            w.close();
                        }
                        break;
                    case "ИП":
                        String sql2 = "SELECT famil, name, otch FROM ip WHERE email = ?";
                        PreparedStatement ps2 = c.prepareStatement(sql2);
                        ps2.setString(1, emailUch);
                        ResultSet rs2 = ps2.executeQuery();
                        while (rs2.next()){
                            FileWriter w2 = new FileWriter(fName, true);
                            w2.write(i + ". " + rs2.getString(1) + " " + rs2.getString(2) + " " + rs2.getString(3) + "\n");
                            i++;
                            w2.close();
                        }
                        break;
                    case "ФЛ":
                        String sql3 = "SELECT famil, name, otch FROM fl WHERE email = ?";
                        PreparedStatement ps3 = c.prepareStatement(sql3);
                        ps3.setString(1, emailUch);
                        ResultSet rs3 = ps3.executeQuery();
                        while (rs3.next()){
                            FileWriter w3 = new FileWriter(fName, true);
                            w3.write(i + ". " + rs3.getString(1) + " " + rs3.getString(2) + " " + rs3.getString(3) + "\n");
                            i++;
                            w3.close();
                        }
                        break;
                    case "АУ":
                        String sql4 = "SELECT famil, name, otch FROM au WHERE email = ?";
                        PreparedStatement ps4 = c.prepareStatement(sql4);
                        ps4.setString(1, emailUch);
                        ResultSet rs4 = ps4.executeQuery();
                        while (rs4.next()){
                            FileWriter w4 = new FileWriter(fName, true);
                            w4.write(i + ". " + rs4.getString(1) + " " + rs4.getString(2) + " " + rs4.getString(3) + "\n");
                            i++;
                            w4.close();
                        }
                        break;
                }
            }

            FileWriter w = new FileWriter(fName, true);

            w.write("");
/*
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

 */

        } catch (IOException e) {
            out.println("An error occurred.");
            e.printStackTrace();
        } catch (SQLException | ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
    }
}
