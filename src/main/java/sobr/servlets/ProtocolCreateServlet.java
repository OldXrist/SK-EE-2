package sobr.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

import static psql.connection.connect;

@WebServlet(name = "ProtocolCreateServlet", value = "/ProtocolCreateServlet")
public class ProtocolCreateServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();
        String s = req.getParameter("sk");
        long sk = Long.parseLong(s);

        String protocolName = "Протокол собрания кредиторов №" + sk + ".doc";

        try {
            Connection c = connect();

            String checkProt = "SELECT protocol FROM prot WHERE id = ?";
            PreparedStatement psCheck = c.prepareStatement(checkProt);

            psCheck.setLong(1, sk);

            ResultSet rsCheck = psCheck.executeQuery();

            boolean protocolExists = false;
            while (rsCheck.next()){
                protocolExists = true;
            }

            if (!protocolExists) {

                //String fName = "C:\\Users\\manager\\Desktop\\SK-EE-2\\src\\main\\webapp\\protocols\\" + protocolName;
                String fName = "/opt/tomcat/webapps/archive/protocols/" + protocolName;

                File protocol = new File(fName);
                //FileWriter w = new FileWriter(fName, true);

                if (!protocol.exists() && protocol.createNewFile()) {

                    String sql = "SELECT email_org, type_org, data_u_vrem_sobr, poln_naum, famil, name, otch, pocht_adres, naim_orb_suda, nomer_dela, osn_dlia_sobr  FROM sobr_org WHERE id = ?";
                    PreparedStatement ps = c.prepareStatement(sql);

                    ps.setLong(1, sk);

                    ResultSet rs = ps.executeQuery();

                    StringBuilder text = new StringBuilder();

                    while (rs.next()) {
                        String emailOrg = rs.getString(1);
                        String typeOrg = rs.getString(2);
                        switch (typeOrg) {
                            case "ЮЛ":
                                String sql1 = "SELECT poln_naim FROM ql WHERE email = ?";
                                PreparedStatement ps1 = c.prepareStatement(sql1);
                                ps1.setString(1, emailOrg);
                                ResultSet rs1 = ps1.executeQuery();
                                while (rs1.next()) {
                                    text.append("                                   ПРОТОКОЛ\n" +
                                            "                               собрания кредиторов \n" + "\n" +
                                            "Организатор ").append(rs1.getString(1)).append("\n");
                                }
                                break;
                            case "ИП":
                                String sql2 = "SELECT famil, name, otch FROM ip WHERE email = ?";
                                PreparedStatement ps2 = c.prepareStatement(sql2);
                                ps2.setString(1, emailOrg);
                                ResultSet rs2 = ps2.executeQuery();
                                while (rs2.next()) {
                                    text.append("                                   ПРОТОКОЛ\n" +
                                            "                               собрания кредиторов \n" + "\n" +
                                            "Организатор ").append(rs2.getString(1)).append(" ").append(rs2.getString(2)).append(" ").append(rs2.getString(3)).append("\n");
                                }
                                break;
                            case "ФЛ":
                                String sql3 = "SELECT famil, name, otch FROM fl WHERE email = ?";
                                PreparedStatement ps3 = c.prepareStatement(sql3);
                                ps3.setString(1, emailOrg);
                                ResultSet rs3 = ps3.executeQuery();
                                while (rs3.next()) {
                                    text.append("                                   ПРОТОКОЛ\n" +
                                            "                               собрания кредиторов \n" + "\n" +
                                            "Организатор ").append(rs3.getString(1)).append(" ").append(rs3.getString(2)).append(" ").append(rs3.getString(3)).append("\n");
                                }
                                break;
                            case "АУ":
                                String sql4 = "SELECT famil, name, otch FROM au WHERE email = ?";
                                PreparedStatement ps4 = c.prepareStatement(sql4);
                                ps4.setString(1, emailOrg);
                                ResultSet rs4 = ps4.executeQuery();
                                while (rs4.next()) {
                                    text.append("                                   ПРОТОКОЛ\n" +
                                            "                               собрания кредиторов \n" + "\n" +
                                            "Организатор ").append(rs4.getString(1)).append(" ").append(rs4.getString(2)).append(" ").append(rs4.getString(3)).append("\n");
                                }
                                break;
                        }

                        if (rs.getString(4) == null) {
                            text.append("Тип собрания: заочное.\n" + "Начало собрания: ").append(rs.getString(3)).append("\n").append("Место проведения: https://sk.tenderstandart.ru\n").append("Полное наименование должника: ").append(rs.getString(5)).append(" ").append(rs.getString(6)).append(" ").append(rs.getString(7)).append("\n").append("Место нахождения должника: ").append(rs.getString(8)).append("\n").append("Дело о несостоятельности(банкротстве): ").append(rs.getString(9)).append(" дело № ").append(rs.getString(10)).append("\n").append("Основание проведения: ").append(rs.getString(11)).append("\n\n").append("Присутствуют:\n");
                        } else {
                            text.append("Тип собрания: заочное.\n" + "Начало собрания: ").append(rs.getString(3)).append("\n").append("Место проведения: https://sk.tenderstandart.ru\n").append("Полное наименование должника: ").append(rs.getString(4)).append("\n").append("Место нахождения должника: ").append(rs.getString(8)).append("\n").append("Дело о несостоятельности(банкротстве): ").append(rs.getString(9)).append(" дело № ").append(rs.getString(10)).append("\n").append("Основание проведения: ").append(rs.getString(11)).append("\n\n").append("Присутствуют:\n");
                        }
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
                        switch (typeUch) {
                            case "ЮЛ":
                                String sql1 = "SELECT poln_naim FROM ql WHERE email = ?";
                                PreparedStatement ps1 = c.prepareStatement(sql1);
                                ps1.setString(1, emailUch);
                                ResultSet rs1 = ps1.executeQuery();
                                while (rs1.next()) {
                                    text.append(i).append(". ").append(rs1.getString(1)).append("\n");
                                    i++;
                                }
                                break;
                            case "ИП":
                                String sql2 = "SELECT famil, name, otch FROM ip WHERE email = ?";
                                PreparedStatement ps2 = c.prepareStatement(sql2);
                                ps2.setString(1, emailUch);
                                ResultSet rs2 = ps2.executeQuery();
                                while (rs2.next()) {
                                    text.append(i).append(". ").append(rs2.getString(1)).append(" ").append(rs2.getString(2)).append(" ").append(rs2.getString(3)).append("\n");
                                    i++;
                                }
                                break;
                            case "ФЛ":
                                String sql3 = "SELECT famil, name, otch FROM fl WHERE email = ?";
                                PreparedStatement ps3 = c.prepareStatement(sql3);
                                ps3.setString(1, emailUch);
                                ResultSet rs3 = ps3.executeQuery();
                                while (rs3.next()) {
                                    text.append(i).append(". ").append(rs3.getString(1)).append(" ").append(rs3.getString(2)).append(" ").append(rs3.getString(3)).append("\n");
                                    i++;
                                }
                                break;
                            case "АУ":
                                String sql4 = "SELECT famil, name, otch FROM au WHERE email = ?";
                                PreparedStatement ps4 = c.prepareStatement(sql4);
                                ps4.setString(1, emailUch);
                                ResultSet rs4 = ps4.executeQuery();
                                while (rs4.next()) {
                                    text.append(i).append(". ").append(rs4.getString(1)).append(" ").append(rs4.getString(2)).append(" ").append(rs4.getString(3)).append("\n");
                                    i++;
                                }
                                break;
                        }
                    }

                    text.append("Всего: ____кредитора(ов), что составляет ____% от общего числа голосов конкурсных кредиторов и уполномоченных органов\n\n");

                    String sql6 = "SELECT email_org, type_org FROM sobr_org WHERE id = ?";
                    PreparedStatement ps6 = c.prepareStatement(sql6);

                    ps6.setLong(1, sk);

                    ResultSet rs6 = ps6.executeQuery();

                    while (rs6.next()) {
                        String emailOrg = rs6.getString(1);
                        String typeOrg = rs6.getString(2);
                        switch (typeOrg) {
                            case "ЮЛ":
                                String sql1 = "SELECT poln_naim FROM ql WHERE email = ?";
                                PreparedStatement ps1 = c.prepareStatement(sql1);
                                ps1.setString(1, emailOrg);
                                ResultSet rs1 = ps1.executeQuery();
                                while (rs1.next()) {
                                    text.append("Кредиторы о времени и месте проведения собрания уведомлены надлежащим образом.\n" + "Собрание кредиторов правомочно, на собрании присутствуют кредиторы с числом голосов, достаточным для принятия решений в соответствии со ст.12 ФЗ «О несостоятельности (банкротстве)» от 26.10.2002г. № 127-ФЗ.\n" + "Собрание кредиторов ведет представитель ").append(rs1.getString(1)).append(" ___ФИО организатора собрания в именительном падеже_______.\n").append("Повестка собрания кредиторов:\n\n");
                                }
                                break;
                            case "ИП":
                                String sql2 = "SELECT famil, name, otch FROM ip WHERE email = ?";
                                PreparedStatement ps2 = c.prepareStatement(sql2);
                                ps2.setString(1, emailOrg);
                                ResultSet rs2 = ps2.executeQuery();
                                while (rs2.next()) {
                                    text.append("Кредиторы о времени и месте проведения собрания уведомлены надлежащим образом.\n" + "Собрание кредиторов правомочно, на собрании присутствуют кредиторы с числом голосов, достаточным для принятия решений в соответствии со ст.12 ФЗ «О несостоятельности (банкротстве)» от 26.10.2002г. № 127-ФЗ.\n" + "Собрание кредиторов ведет представитель _____указывать организацию__ ").append(rs2.getString(1)).append(" ").append(rs2.getString(2)).append(" ").append(rs2.getString(3)).append(".\n").append("Повестка собрания кредиторов:\n\n");
                                }
                                break;
                            case "ФЛ":
                                String sql3 = "SELECT famil, name, otch FROM fl WHERE email = ?";
                                PreparedStatement ps3 = c.prepareStatement(sql3);
                                ps3.setString(1, emailOrg);
                                ResultSet rs3 = ps3.executeQuery();
                                while (rs3.next()) {
                                    text.append("Кредиторы о времени и месте проведения собрания уведомлены надлежащим образом.\n" + "Собрание кредиторов правомочно, на собрании присутствуют кредиторы с числом голосов, достаточным для принятия решений в соответствии со ст.12 ФЗ «О несостоятельности (банкротстве)» от 26.10.2002г. № 127-ФЗ.\n" + "Собрание кредиторов ведет представитель _____указывать организацию__ ").append(rs3.getString(1)).append(" ").append(rs3.getString(2)).append(" ").append(rs3.getString(3)).append(".\n").append("Повестка собрания кредиторов:\n\n");
                                }
                                break;
                            case "АУ":
                                String sql4 = "SELECT famil, name, otch , naim_org FROM au WHERE email = ?";
                                PreparedStatement ps4 = c.prepareStatement(sql4);
                                ps4.setString(1, emailOrg);
                                ResultSet rs4 = ps4.executeQuery();
                                while (rs4.next()) {
                                    text.append("Кредиторы о времени и месте проведения собрания уведомлены надлежащим образом.\n" + "Собрание кредиторов правомочно, на собрании присутствуют кредиторы с числом голосов, достаточным для принятия решений в соответствии со ст.12 ФЗ «О несостоятельности (банкротстве)» от 26.10.2002г. № 127-ФЗ.\n" + "Собрание кредиторов ведет представитель ").append(rs4.getString(4)).append(" ").append(rs4.getString(1)).append(" ").append(rs4.getString(2)).append(" ").append(rs4.getString(3)).append(".\n").append("Повестка собрания кредиторов:\n\n");
                                }
                                break;
                        }
                    }

                    String sql7 = "SELECT questions FROM questions WHERE id = ?";
                    PreparedStatement ps7 = c.prepareStatement(sql7);
                    ps7.setLong(1, sk);

                    ResultSet rs7 = ps7.executeQuery();

                    i = 1;
                    while (rs7.next()) {
                        text.append(i).append(".").append(" ").append(rs7.getString(1)).append("\n");
                        i++;
                    }

                    text.append("\n");

                    ResultSet rs8 = ps7.executeQuery();

                    i = 1;
                    while (rs8.next()) {
                        text.append(i).append(" вопрос:").append(rs8.getString(1)).append("\n").append("Результат голосования:\n").append("- «ЗА»- ___голосов, что составляет ____% голосов кредиторов, присутствующих на собрании кредиторов.\n").append("-«ПРОТИВ» - ___голосов, что составляет ____% голосов кредиторов, присутствующих на собрании кредиторов. \n").append("Решение:________________________________________________\n").append("-«ВОЗДЕРЖАЛСЯ» -  ___голосов, что составляет ____% голосов кредиторов, присутствующих на собрании кредиторов.\n\n");
                        i++;
                    }

                    text.append("Окончание собрания кредиторов:___________\n" +
                            "\n" +
                            "\n" +
                            "Организатор собрания\n" +
                            "____Организация_____" +
                            "\t\t\t\t\t\t\tФ.И.О.\n");

                    try {
                        new File(fName);
                        FileWriter w = new FileWriter(fName);
                        w.write(text.toString());
                        w.flush();
                        w.close();

                    } catch (IOException e) {
                        out.println("An error occurred.");
                        e.printStackTrace();
                    }
                }

                String sqlPath = "INSERT INTO prot VALUES (?, ?)";
                PreparedStatement psPath = c.prepareStatement(sqlPath);

                psPath.setLong(1, sk);
                psPath.setString(2, fName);

                psPath.executeUpdate();
                psPath.close();
            }

            rsCheck.close();
            psCheck.close();

            String protPathSQL = "SELECT protocol FROM prot WHERE id = ?";
            PreparedStatement protPathPs = c.prepareStatement(protPathSQL);

            protPathPs.setLong(1, sk);

            ResultSet protPathRs = protPathPs.executeQuery();

            while (protPathRs.next()){
                out.println(protPathRs.getString(1).split("archive")[1]);
            }

            protPathRs.close();
            protPathPs.close();
            c.close();

        }  catch (SQLException | ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
    }
}
