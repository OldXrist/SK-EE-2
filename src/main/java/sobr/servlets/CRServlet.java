package sobr.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;
import java.sql.*;

@WebServlet("/CRServlet")
public class CRServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection("jdbc:postgresql://192.168.1.115/postgres2", "postgres", "postgresql");
            //Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/SK", "postgres", "111");

            String sql = "SELECT id FROM sobr_org";
            PreparedStatement ps = c.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();

            String id = null;
            while (rs.next()) {
                id = rs.getString(1);
            }

            File nwDir = new File("C:\\Users\\manager\\Desktop\\SK-EE-2\\out\\artifacts\\Sobr\\lichnui_kobinetu\\lk_org\\sk" + id);
            if (!nwDir.exists()) {
                nwDir.mkdirs();
            }

            String path = "C:\\Users\\manager\\Desktop\\SK-EE-2\\out\\artifacts\\Sobr\\lichnui_kobinetu\\lk_org\\sk" + id;
            PrintWriter pw = new PrintWriter(path + "\\info.html", StandardCharsets.UTF_8);
            pw.print("<!DOCTYPE html>\n" +
                    "<html lang=\"en\">\n" +
                    "<head>\n" +
                    "    <meta charset=\"UTF-8\">\n" +
                    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n" +
                    "    <link rel=\"stylesheet\" type=\"text/css\" href=\"../../../style/shared.css\">\n" +
                    "    <link rel=\"stylesheet\" type=\"text/css\" href=\"../../../style/z_sobr_uch_1.css\">\n" +
                    "    <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Exo+2\">\n" +
                    "    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx\" crossorigin=\"anonymous\">\n" +
                    "    <title>SK_JS</title>\n" +
                    "</head>\n" +
                    "<body>\n" +
                    "<div class=\"menu\">\n" +
                    "    <ul>\n" +
                    "        <li class=\"logo\"><a href=\"../../../help/contacts.html\"><img src=\"../../../img/Logo.svg\" /></a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../index.html\">Главная</a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../reestr.html\">Реестр собраний</a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../help/help_1.html\">Помощь</a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../help/contacts.html\">Контакты</a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../lichnui_kobinetu/lk_uch/lk_uch_ip2/lk_uch.html\"><p class=\"nav_login\">Зинаида И.</p></a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../signin.html\"><span id=\"clock\" style=\"color:#ffffff;\"></span></a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../help/contacts.html\"><img src=\"../../../img/logout%201%20(Traced).png\" /></a></li>\n" +
                    "    </ul>\n" +
                    "</div>\n" +
                    "<div class=\"container\">\n" +
                    "    <div class=\"content\">\n" +
                    "\n" +
                    "        <div class=\"ogl\">\n" +
                    "            <nav aria-label=\"breadcrumb\">\n" +
                    "                <ol class=\"breadcrumb\">\n" +
                    "                    <li class=\"breadcrumb-item\"><a class=\"anti_tekst\"  href=\"/index.html\">Главная</a></li>\n" +
                    "                    <li class=\"breadcrumb-item\"><a class=\"anti_tekst\"  href=\"#\">Личный кабинет организатора</a></li>\n" +
                    "                    <li class=\"breadcrumb-item\"><a class=\"anti_tekst\"  href=\"#\">Организация собраний</a></li>\n" +
                    "                    <li class=\"breadcrumb-item active\" aria-current=\"page\">Карточка собрания</li>\n" +
                    "                </ol>\n" +
                    "            </nav>\n" +
                    "        </div>\n" +
                    "\n" +
                    "        <p class=\"heading\">Карточка собрания: 1014-заочное</p>\n" +
                    "\n" +
                    "        <div class=\"stats\">\n" +
                    "            <ul>\n" +
                    "                <li class=\"stats_item\"><a><b>Общая информация</b></a></li>\n" +
                    "                <li class=\"stats_item\"><a class=\"txtr\" href=\"z_sobr_org_3.html\">Повестка дня</a></li>\n" +
                    "                <li class=\"stats_item\"><a class=\"txtr\" href=\"z_sobr_org_4.html\">Документы</a></li>\n" +
                    "                <li class=\"stats_item\"><a class=\"txtr\" href=\"z_sobr_org_5.html\">Заявки</a></li>\n" +
                    "                <li class=\"stats_item\"><a class=\"txtr\" href=\"z_sobr_org_7.html\">Бюллетени</a></li>\n" +
                    "            </ul>\n" +
                    "        </div>\n" +
                    "\n" +
                    "        <div class=\"ep\">\n" +
                    "            <p>Организатор собрания</p>\n" +
                    "            <ul>\n" +
                    "                <li>Наименование</li>\n" +
                    "                <li><input type=\"text\" placeholder=\"Иванов Иван Иванович\" class=\"oneline\"/></li>\n" +
                    "            </ul>\n" +
                    "            <ul class=\"inline first\">\n" +
                    "                <li>Статус</li>\n" +
                    "                <li><input type=\"text\" placeholder=\"Арбитражный управляющий\"/></li>\n" +
                    "            </ul>\n" +
                    "            <ul class=\"inline second\">\n" +
                    "                <li>Регистрационный номер ФРС</li>\n" +
                    "                <li><input type=\"text\" placeholder=\"000 000 000 00\" class=\"frs\"/></li>\n" +
                    "            </ul>\n" +
                    "            <ul>\n" +
                    "                <li>Наименование СРО АУ</li>\n" +
                    "                <li><input type=\"text\" placeholder=\"Ассоциация «Гильдия управляющих»\" class=\"oneline\"/></li>\n" +
                    "            </ul>\n" +
                    "            <ul class=\"inline first\">\n" +
                    "                <li>Телефон*</li>\n" +
                    "                <li><input type=\"text\" placeholder=\"+7 (900) 000-12-34\" class=\"phone\"/></li>\n" +
                    "            </ul>\n" +
                    "            <ul class=\"inline second\">\n" +
                    "                <li>Электронная почта*</li>\n" +
                    "                <li><input type=\"text\" placeholder=\"ivanova12@mail.ru\"/></li>\n" +
                    "            </ul>\n" +
                    "            <p>ЕФРСБ</p>\n" +
                    "            <ul>\n" +
                    "                <li>Индетификационный номер собрания ЕФРСБ</li>\n" +
                    "                <li><input type=\"text\" placeholder=\"Индетификационный номер собрания ЕФРСБ \" class=\"oneline\"/></li>\n" +
                    "            </ul>\n" +
                    "            <p>Сведения о должнике</p>\n" +
                    "            <ul>\n" +
                    "                <li>Наименование</li>\n" +
                    "                <li><input type=\"text\" placeholder=\"Наименование\" class=\"oneline\"/></li>\n" +
                    "            </ul>\n" +
                    "            <ul>\n" +
                    "                <li>Краткое наименование</li>\n" +
                    "                <li><input type=\"text\" placeholder=\"Краткое наименование\" class=\"oneline\"/></li>\n" +
                    "            </ul>\n" +
                    "            <ul class=\"inline first\">\n" +
                    "                <li>ИНН</li>\n" +
                    "                <li><input type=\"text\" placeholder=\"00000000\"/></li>\n" +
                    "            </ul>\n" +
                    "            <ul class=\"inline second\">\n" +
                    "                <li>ОГРН</li>\n" +
                    "                <li><input type=\"text\" placeholder=\"000 000 000 00\" class=\"ogrn\"/></li>\n" +
                    "            </ul>\n" +
                    "            <p>Сведения о процедуре банкротства</p>\n" +
                    "            <ul class=\"inline first_2\">\n" +
                    "                <li>Наименование арбитражного суда</li>\n" +
                    "                <li><input type=\"text\" placeholder=\"Наименование арбитражного суда\"/></li>\n" +
                    "            </ul>\n" +
                    "            <ul class=\"inline second_2\">\n" +
                    "                <li>Номер дела о банкротстве</li>\n" +
                    "                <li><input type=\"text\" placeholder=\"Номер дела о банкротстве\"/></li>\n" +
                    "            </ul>\n" +
                    "            <ul>\n" +
                    "                <li>Основание для собрания кредиторов</li>\n" +
                    "                <li><input type=\"text\" placeholder=\"Основание для собрания кредиторов\" class=\"multline\"/></li>\n" +
                    "            </ul>\n" +
                    "            <p>Документы, которые необходимо предоставить участникам собрания</p>\n" +
                    "            <ul>\n" +
                    "                <li><input type=\"text\" placeholder=\"Документ, удостоверяющий личность\" class=\"oneline\"/></li>\n" +
                    "            </ul>\n" +
                    "            <ul>\n" +
                    "                <li><input type=\"text\" placeholder=\"Документы, подтверждающие полномочия руководителя или иного лица на осуществление действий от имени заявителя\" class=\"oneline\"/></li>\n" +
                    "            </ul>\n" +
                    "            <button class=\"knopka4\">Редактировать собрание</button>\n" +
                    "            <button class=\"knopka5\">Отменить собрание</button>\n" +
                    "        </div>\n" +
                    "\n" +
                    "        <div class=\"base_bg\"></div>\n" +
                    "            <div class=\"base\">\n" +
                    "                <ul>\n" +
                    "                    <li class=\"base_logo\"><a href=\"#\"><img src=\"../../../img/Logo.svg\" /></a></li>\n" +
                    "                    <li class=\"base_item1\"><a>Выйти</a></li>\n" +
                    "                </ul>\n" +
                    "                <ul class=\"base_links\">\n" +
                    "                    <li class=\"base_item2\"><a class=\"footer_txt\" href=\"../../../index.html\" >Главная</a></li>\n" +
                    "                    <li class=\"base_item2\"><a class=\"footer_txt\" href=\"../../../reestr.html\">Реестр собраний</a></li>\n" +
                    "                    <li class=\"base_item2\"><a class=\"footer_txt\" href=\"../../../help/help_1.html\">Помощь</a></li>\n" +
                    "                    <li class=\"base_item2\"><a class=\"footer_txt\" href=\"../../../help/contacts.html\">Контакты</a></li>\n" +
                    "                </ul>\n" +
                    "                <p class=\"copyright\">© 2011-2022 Оператор торговой площадки - ООО «ТендерСтандарт». Все права защищены.</p>\n" +
                    "            </div>\n" +
                    "    </div>\n" +
                    "</div>\n" +
                    "<script>\n" +
                    "    setInterval(function () {\n" +
                    "        var now = new Date();\n" +
                    "        var clock = document.getElementById(\"clock\");\n" +
                    "        clock.innerHTML = now.toLocaleTimeString();\n" +
                    "    }, 1000);\n" +
                    "</script>\n" +
                    "<script src=\"../../../jquery/jquery-3.6.0.js\"></script>\n" +
                    "<script href=\"https://cdn.jsdelivr.net/npm/jquery.maskedinput@1.4.1/src/jquery.maskedinput.min.js\" type=\"text/javascript\"></script>\n" +
                    "<script href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa\" crossorigin=\"anonymous\"></script>\n" +
                    "<script>\n" +
                    "    $(document).ready(function(){\n" +
                    "        $.mask.definitions['0'] = \"[0-9]\";\n" +
                    "        $(\".phone\").mask(\"+7(000)000-00-00\");\n" +
                    "    });\n" +
                    "    $(document).ready(function(){\n" +
                    "        $.mask.definitions['0'] = \"[0-9]\";\n" +
                    "        $(\".frs\").mask(\"000 000 000 00\");\n" +
                    "    });\n" +
                    "    $(document).ready(function(){\n" +
                    "        $.mask.definitions['0'] = \"[0-9]\";\n" +
                    "        $(\".ogrn\").mask(\"000 000 000 00\");\n" +
                    "    });\n" +
                    "</script>\n" +
                    "</body>\n" +
                    "</html>");
            pw.close();
            pw = new PrintWriter(path + "\\povestka.html", StandardCharsets.UTF_8);
            pw.print("<!DOCTYPE html>\n" +
                    "<html lang=\"en\">\n" +
                    "<head>\n" +
                    "    <meta charset=\"UTF-8\">\n" +
                    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n" +
                    "    <link rel=\"stylesheet\" type=\"text/css\" href=\"../../../style/shared.css\">\n" +
                    "    <link rel=\"stylesheet\" type=\"text/css\" href=\"../../../style/z_sobr_uch_3.css\">\n" +
                    "    <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Exo+2\">\n" +
                    "    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx\" crossorigin=\"anonymous\">\n" +
                    "    <title>SK_JS</title>\n" +
                    "</head>\n" +
                    "<body>\n" +
                    "<div class=\"menu\">\n" +
                    "    <ul>\n" +
                    "        <li class=\"logo\"><a href=\"../../../help/contacts.html\"><img src=\"../../../img/Logo.svg\" /></a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../index.html\">Главная</a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../reestr.html\">Реестр собраний</a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../help/help_1.html\">Помощь</a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../help/contacts.html\">Контакты</a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../lichnui_kobinetu/lk_uch/lk_uch_ip2/lk_uch.html\"><p class=\"nav_login\">Зинаида И.</p></a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../signin.html\"><span id=\"clock\" style=\"color:#ffffff;\"></span></a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../help/contacts.html\"><img src=\"../../../img/logout%201%20(Traced).png\" /></a></li>\n" +
                    "    </ul>\n" +
                    "</div>\n" +
                    "<div class=\"container\">\n" +
                    "    <div class=\"content\">\n" +
                    "\n" +
                    "        <div class=\"ogl\">\n" +
                    "            <nav aria-label=\"breadcrumb\">\n" +
                    "                <ol class=\"breadcrumb\">\n" +
                    "                    <li class=\"breadcrumb-item\"><a class=\"anti_tekst\"  href=\"/index.html\">Главная</a></li>\n" +
                    "                    <li class=\"breadcrumb-item\"><a class=\"anti_tekst\"  href=\"#\">Личный кабинет организатора</a></li>\n" +
                    "                    <li class=\"breadcrumb-item\"><a class=\"anti_tekst\"  href=\"#\">Организация собраний</a></li>\n" +
                    "                    <li class=\"breadcrumb-item active\" aria-current=\"page\">Карточка собрания</li>\n" +
                    "                </ol>\n" +
                    "            </nav>\n" +
                    "        </div>\n" +
                    "\n" +
                    "        <p class=\"heading\">Карточка собрания: 1014-заочное</p>\n" +
                    "\n" +
                    "        <div class=\"stats\">\n" +
                    "            <ul>\n" +
                    "                <li class=\"stats_item\"><a class=\"txtr\" href=\"z_sobr_org_2.html\">Общая информация</a></li>\n" +
                    "                <li class=\"stats_item\"><a><b>Повестка дня</b></a></li>\n" +
                    "                <li class=\"stats_item\"><a class=\"txtr\" href=\"z_sobr_org_4.html\">Документы</a></li>\n" +
                    "                <li class=\"stats_item\"><a class=\"txtr\" href=\"z_sobr_org_5.html\">Заявки</a></li>\n" +
                    "                <li class=\"stats_item\"><a class=\"txtr\" href=\"z_sobr_org_7.html\">Бюллетени</a></li>\n" +
                    "            </ul>\n" +
                    "        </div>\n" +
                    "\n" +
                    "        <div class=\"ep\">\n" +
                    "            <p>Перечень вопросов</p>\n" +
                    "            <ul>\n" +
                    "                <li>Текст вопроса №1</li>\n" +
                    "            </ul>\n" +
                    "            <table class=\"vote\">\n" +
                    "                <tr class=\"bord\">\n" +
                    "                    <td>За</td>\n" +
                    "                    <td>Против</td>\n" +
                    "                    <td>Воздержался</td>\n" +
                    "                </tr>\n" +
                    "                <tr>\n" +
                    "                    <td class=\"nobord\"><input type=\"checkbox\"></td>\n" +
                    "                    <td class=\"nobord\"><input type=\"checkbox\"></td>\n" +
                    "                    <td class=\"nobord\"><input type=\"checkbox\"></td>\n" +
                    "                    <td class=\"bn\"><button class=\"vote_btn\">Голосовать</button></td>\n" +
                    "                </tr>\n" +
                    "            </table>\n" +
                    "            <ul>\n" +
                    "                <li>Текст вопроса №2</li>\n" +
                    "            </ul>\n" +
                    "            <table class=\"vote\">\n" +
                    "                <tr class=\"bord\">\n" +
                    "                    <td>За</td>\n" +
                    "                    <td>Против</td>\n" +
                    "                    <td>Воздержался</td>\n" +
                    "                </tr>\n" +
                    "                <tr>\n" +
                    "                    <td class=\"nobord\"><input type=\"checkbox\"></td>\n" +
                    "                    <td class=\"nobord\"><input type=\"checkbox\"></td>\n" +
                    "                    <td class=\"nobord\"><input type=\"checkbox\"></td>\n" +
                    "                    <td class=\"bn\"><button class=\"vote_btn\">Голосовать</button></td>\n" +
                    "                </tr>\n" +
                    "            </table>\n" +
                    "            <ul>\n" +
                    "                <li>Текст вопроса №3</li>\n" +
                    "            </ul>\n" +
                    "            <table class=\"vote\">\n" +
                    "                <tr class=\"bord\">\n" +
                    "                    <td>За</td>\n" +
                    "                    <td>Против</td>\n" +
                    "                    <td>Воздержался</td>\n" +
                    "                </tr>\n" +
                    "                <tr>\n" +
                    "                    <td class=\"nobord\"><input type=\"checkbox\"></td>\n" +
                    "                    <td class=\"nobord\"><input type=\"checkbox\"></td>\n" +
                    "                    <td class=\"nobord\"><input type=\"checkbox\"></td>\n" +
                    "                    <td class=\"bn\"><button class=\"vote_btn\">Голосовать</button></td>\n" +
                    "                </tr>\n" +
                    "            </table>\n" +
                    "        </div>\n" +
                    "\n" +
                    "        <div class=\"base_bg\"></div>\n" +
                    "        <div class=\"base\">\n" +
                    "            <ul>\n" +
                    "                <li class=\"base_logo\"><a href=\"#\"><img src=\"../../../img/Logo.svg\" /></a></li>\n" +
                    "                <li class=\"base_item1\"><a>Выйти</a></li>\n" +
                    "            </ul>\n" +
                    "            <ul class=\"base_links\">\n" +
                    "                <li class=\"base_item2\"><a class=\"footer_txt\" href=\"../../../index.html\" >Главная</a></li>\n" +
                    "                <li class=\"base_item2\"><a class=\"footer_txt\" href=\"../../../reestr.html\">Реестр собраний</a></li>\n" +
                    "                <li class=\"base_item2\"><a class=\"footer_txt\" href=\"../../../help/help_1.html\">Помощь</a></li>\n" +
                    "                <li class=\"base_item2\"><a class=\"footer_txt\" href=\"../../../help/contacts.html\">Контакты</a></li>\n" +
                    "            </ul>\n" +
                    "            <p class=\"copyright\">© 2011-2022 Оператор торговой площадки - ООО «ТендерСтандарт». Все права защищены.</p>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "</div>\n" +
                    "<script>\n" +
                    "    setInterval(function () {\n" +
                    "        var now = new Date();\n" +
                    "        var clock = document.getElementById(\"clock\");\n" +
                    "        clock.innerHTML = now.toLocaleTimeString();\n" +
                    "    }, 1000);\n" +
                    "</script>\n" +
                    "<script src=\"../../../jquery/jquery-3.6.0.js\"></script>\n" +
                    "<script href=\"https://cdn.jsdelivr.net/npm/jquery.maskedinput@1.4.1/src/jquery.maskedinput.min.js\" type=\"text/javascript\"></script>\n" +
                    "<script href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa\" crossorigin=\"anonymous\"></script>\n" +
                    "</body>\n" +
                    "</html>");
            pw.close();
            pw = new PrintWriter(path + "\\docs.html", StandardCharsets.UTF_8);
            pw.print("<!DOCTYPE html>\n" +
                    "<html lang=\"en\">\n" +
                    "<head>\n" +
                    "    <meta charset=\"UTF-8\">\n" +
                    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n" +
                    "    <link rel=\"stylesheet\" type=\"text/css\" href=\"../../../style/shared.css\">\n" +
                    "    <link rel=\"stylesheet\" type=\"text/css\" href=\"../../../style/z_sobr_uch_4.css\">\n" +
                    "    <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Exo+2\">\n" +
                    "    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx\" crossorigin=\"anonymous\">\n" +
                    "    <title>SK_JS</title>\n" +
                    "</head>\n" +
                    "<body>\n" +
                    "<div class=\"menu\">\n" +
                    "    <ul>\n" +
                    "        <li class=\"logo\"><a href=\"../../../help/contacts.html\"><img src=\"../../../img/Logo.svg\" /></a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../index.html\">Главная</a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../reestr.html\">Реестр собраний</a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../help/help_1.html\">Помощь</a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../help/contacts.html\">Контакты</a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../lichnui_kobinetu/lk_uch/lk_uch_ip2/lk_uch.html\"><p class=\"nav_login\">Зинаида И.</p></a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../signin.html\"><span id=\"clock\" style=\"color:#ffffff;\"></span></a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../help/contacts.html\"><img src=\"../../../img/logout%201%20(Traced).png\" /></a></li>\n" +
                    "    </ul>\n" +
                    "</div>\n" +
                    "\n" +
                    "<div class=\"container\">\n" +
                    "    <div class=\"content\">\n" +
                    "\n" +
                    "        <div class=\"ogl\">\n" +
                    "            <nav aria-label=\"breadcrumb\">\n" +
                    "                <ol class=\"breadcrumb\">\n" +
                    "                    <li class=\"breadcrumb-item\"><a class=\"anti_tekst\"  href=\"/index.html\">Главная</a></li>\n" +
                    "                    <li class=\"breadcrumb-item\"><a class=\"anti_tekst\"  href=\"#\">Личный кабинет участника</a></li>\n" +
                    "                    <li class=\"breadcrumb-item\"><a class=\"anti_tekst\"  href=\"#\">Организация собраний</a></li>\n" +
                    "                    <li class=\"breadcrumb-item active\" aria-current=\"page\">Карточка собрания</li>\n" +
                    "                </ol>\n" +
                    "            </nav>\n" +
                    "        </div>\n" +
                    "\n" +
                    "        <p class=\"heading\">Карточка собрания: 1014-заочное</p>\n" +
                    "\n" +
                    "        <div class=\"stats\">\n" +
                    "            <ul>\n" +
                    "                <li class=\"stats_item\"><a class=\"txtr\" href=\"z_sobr_org_2.html\">Общая информация</a></li>\n" +
                    "                <li class=\"stats_item\"><a class=\"txtr\" href=\"z_sobr_org_3.html\">Повестка дня</a></li>\n" +
                    "                <li class=\"stats_item\"><a><b>Документы</b></a></li>\n" +
                    "                <li class=\"stats_item\"><a class=\"txtr\" href=\"z_sobr_org_5.html\">Заявки</a></li>\n" +
                    "                <li class=\"stats_item\"><a class=\"txtr\" href=\"z_sobr_org_7.html\">Бюллетени</a></li>\n" +
                    "            </ul>\n" +
                    "        </div>\n" +
                    "\n" +
                    "        <div class=\"ep2\">\n" +
                    "            <ul>\n" +
                    "                <li class=\"hed\"><b>Уведомнения</b></li>\n" +
                    "                <li class=\"text hed\"><b>Протокол собрания</b></li>\n" +
                    "            </ul>\n" +
                    "            <ul>\n" +
                    "                <li class=\"svg\"><img src=\"../../../img/doc.svg\"/><b><u>Журнал уведомлений участников</u></b></li>\n" +
                    "                <li><img src=\"../../../img/doc.svg\"/><b><u>Протокол собрания</u></b></li>\n" +
                    "            </ul>\n" +
                    "            <ul>\n" +
                    "                <li><button class=\"down\">Скачать журнал</button></li>\n" +
                    "                <li class=\"btns\"><button class=\"down\">Скачать протокол</button></li>\n" +
                    "                <button class=\"knopka4\">Скачать протокол</button>\n" +
                    "                <button class=\"knopka5\">Скачать протокол</button>\n" +
                    "\n" +
                    "            </ul>\n" +
                    "        </div>\n" +
                    "\n" +
                    "        <div class=\"base_bg\"></div>\n" +
                    "            <div class=\"base\">\n" +
                    "                <ul>\n" +
                    "                    <li class=\"base_logo\"><a href=\"#\"><img src=\"../../../img/Logo.svg\" /></a></li>\n" +
                    "                    <li class=\"base_item1\"><a>Выйти</a></li>\n" +
                    "                </ul>\n" +
                    "                <ul class=\"base_links\">\n" +
                    "                    <li class=\"base_item2\"><a class=\"footer_txt\" href=\"../../../index.html\" >Главная</a></li>\n" +
                    "                    <li class=\"base_item2\"><a class=\"footer_txt\" href=\"../../../reestr.html\">Реестр собраний</a></li>\n" +
                    "                    <li class=\"base_item2\"><a class=\"footer_txt\" href=\"../../../help/help_1.html\">Помощь</a></li>\n" +
                    "                    <li class=\"base_item2\"><a class=\"footer_txt\" href=\"../../../help/contacts.html\">Контакты</a></li>\n" +
                    "                </ul>\n" +
                    "                <p class=\"copyright\">© 2011-2022 Оператор торговой площадки - ООО «ТендерСтандарт». Все права защищены.</p>\n" +
                    "            </div>\n" +
                    "    </div>\n" +
                    "</div>\n" +
                    "<script>\n" +
                    "    setInterval(function () {\n" +
                    "        var now = new Date();\n" +
                    "        var clock = document.getElementById(\"clock\");\n" +
                    "        clock.innerHTML = now.toLocaleTimeString();\n" +
                    "    }, 1000);\n" +
                    "</script>\n" +
                    "<script src=\"../../../jquery/jquery-3.6.0.js\"></script>\n" +
                    "<script href=\"https://cdn.jsdelivr.net/npm/jquery.maskedinput@1.4.1/src/jquery.maskedinput.min.js\" type=\"text/javascript\"></script>\n" +
                    "<script href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa\" crossorigin=\"anonymous\"></script>\n" +
                    "</body>\n" +
                    "</html>");
            pw.close();
            pw = new PrintWriter(path + "\\applications.html", StandardCharsets.UTF_8);
            pw.print("<!DOCTYPE html>\n" +
                    "<html lang=\"en\">\n" +
                    "<head>\n" +
                    "    <meta charset=\"UTF-8\">\n" +
                    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n" +
                    "    <link rel=\"stylesheet\" type=\"text/css\" href=\"../../../style/shared.css\">\n" +
                    "    <link rel=\"stylesheet\" type=\"text/css\" href=\"../../../style/z_sobr_uch_5.css\">\n" +
                    "    <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Exo+2\">\n" +
                    "    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx\" crossorigin=\"anonymous\">\n" +
                    "    <title>SK_JS</title>\n" +
                    "</head>\n" +
                    "<body>\n" +
                    "<div class=\"menu\">\n" +
                    "    <ul>\n" +
                    "        <li class=\"logo\"><a href=\"../../../help/contacts.html\"><img src=\"../../../img/Logo.svg\" /></a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../index.html\">Главная</a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../reestr.html\">Реестр собраний</a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../help/help_1.html\">Помощь</a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../help/contacts.html\">Контакты</a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../lichnui_kobinetu/lk_uch/lk_uch_ip2/lk_uch.html\"><p class=\"nav_login\">Зинаида И.</p></a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../signin.html\"><span id=\"clock\" style=\"color:#ffffff;\"></span></a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../help/contacts.html\"><img src=\"../../../img/logout%201%20(Traced).png\" /></a></li>\n" +
                    "    </ul>\n" +
                    "</div>\n" +
                    "<div class=\"container\">\n" +
                    "    <div class=\"content\">\n" +
                    "        <div class=\"ogl\">\n" +
                    "            <nav aria-label=\"breadcrumb\">\n" +
                    "                <ol class=\"breadcrumb\">\n" +
                    "                    <li class=\"breadcrumb-item\"><a class=\"anti_tekst\"  href=\"/index.html\">Главная</a></li>\n" +
                    "                    <li class=\"breadcrumb-item\"><a class=\"anti_tekst\"  href=\"#\">Личный кабинет участника</a></li>\n" +
                    "                    <li class=\"breadcrumb-item\"><a class=\"anti_tekst\"  href=\"#\">Организация собраний</a></li>\n" +
                    "                    <li class=\"breadcrumb-item active\" aria-current=\"page\">Карточка собрания</li>\n" +
                    "                </ol>\n" +
                    "            </nav>\n" +
                    "        </div>\n" +
                    "\n" +
                    "        <p class=\"heading\">Карточка собрания: 1014-заочное</p>\n" +
                    "\n" +
                    "        <div class=\"stats\">\n" +
                    "            <ul>\n" +
                    "                <li class=\"stats_item\"><a class=\"txtr\" href=\"z_sobr_org_2.html\">Общая информация</a></li>\n" +
                    "                <li class=\"stats_item\"><a class=\"txtr\" href=\"z_sobr_org_3.html\">Повестка дня</a></li>\n" +
                    "                <li class=\"stats_item\"><a class=\"txtr\" href=\"z_sobr_org_4.html\">Документы</a></li>\n" +
                    "                <li class=\"stats_item\"><a><b>Заявки</b></a></li>\n" +
                    "                <li class=\"stats_item\"><a class=\"txtr\" href=\"z_sobr_org_7.html\">Бюллетени</a></li>\n" +
                    "            </ul>\n" +
                    "        </div>\n" +
                    "        <div class=\"stats_2\">\n" +
                    "            <ul>\n" +
                    "                <li class=\"stats_item\"><a><b>Заявки</b></a></li>\n" +
                    "                <p class=\"dob_zaiv\"><a><b>Добавить заявку от имени участника собрания&nbsp;&nbsp;&nbsp;</b><img src=\"../../../img/close%201%20(Traced).svg\"></a></p>\n" +
                    "\n" +
                    "            </ul>\n" +
                    "        </div>\n" +
                    "\n" +
                    "        <p class=\"sort\">Сортировать по <b class=\"sort_val\">дате добавления</b><img src=\"../../../img/down_arrow.svg\" class=\"arrw\"/></p>\n" +
                    "        <ul class=\"sort_drop\">\n" +
                    "            <li class=\"sort1\">на рассмотрении</li>\n" +
                    "            <li class=\"sort2\">дате добавления</li>\n" +
                    "            <li class=\"sort3\">допущена</li>\n" +
                    "            <li class=\"sort4\">отклонена</li>\n" +
                    "        </ul>\n" +
                    "\n" +
                    "        <div class=\"table\">\n" +
                    "            <div class=\"table_item\">\n" +
                    "                <h3 class=\"table_h\">№ заявки</h3>\n" +
                    "                <a class=\"txtr\" href=\"z_sobr_org_5.5.html\">Редактировать</a>\n" +
                    "                <ul class=\"table_data\">\n" +
                    "                    <li class=\"thin_text\">Кредитор</li>\n" +
                    "                    <li>Афанасьева Елена Евгеньевна</li>\n" +
                    "                </ul>\n" +
                    "                <ul class=\"table_data\">\n" +
                    "                    <li class=\"thin_text\">Дата и время</li>\n" +
                    "                    <li>29.04.2022 14:00 </li>\n" +
                    "                </ul>\n" +
                    "                <ul class=\"table_data\">\n" +
                    "                    <li class=\"thin_text\">Статус</li>\n" +
                    "                    <li>Отклонена</li>\n" +
                    "                </ul>\n" +
                    "            </div>\n" +
                    "            <div class=\"table_item\">\n" +
                    "                <h3 class=\"table_h\">№ заявки</h3>\n" +
                    "                <a class=\"txtr\" href=\"z_sobr_org_5.5.html\">Редактировать</a>\n" +
                    "                <ul class=\"table_data\">\n" +
                    "                    <li class=\"thin_text\">Кредитор</li>\n" +
                    "                    <li>Афанасьева Елена Евгеньевна</li>\n" +
                    "                </ul>\n" +
                    "                <ul class=\"table_data\">\n" +
                    "                    <li class=\"thin_text\">Дата и время</li>\n" +
                    "                    <li>29.04.2022 14:00 </li>\n" +
                    "                </ul>\n" +
                    "                <ul class=\"table_data\">\n" +
                    "                    <li class=\"thin_text\">Статус</li>\n" +
                    "                    <li>Допущена</li>\n" +
                    "                </ul>\n" +
                    "            </div>\n" +
                    "            <div class=\"table_item\">\n" +
                    "                <h3 class=\"table_h\">№ заявки</h3>\n" +
                    "                <a class=\"txtr\" href=\"z_sobr_org_5.5.html\">Редактировать</a>\n" +
                    "                <ul class=\"table_data\">\n" +
                    "                    <li class=\"thin_text\">Кредитор</li>\n" +
                    "                    <li>Афанасьева Елена Евгеньевна</li>\n" +
                    "                </ul>\n" +
                    "                <ul class=\"table_data\">\n" +
                    "                    <li class=\"thin_text\">Дата и время</li>\n" +
                    "                    <li>29.04.2022 14:00 </li>\n" +
                    "                </ul>\n" +
                    "                <ul class=\"table_data\">\n" +
                    "                    <li class=\"thin_text\">Статус</li>\n" +
                    "                    <li>Отклонена</li>\n" +
                    "                </ul>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "\n" +
                    "        <div class=\"base_bg\"></div>\n" +
                    "            <div class=\"base\">\n" +
                    "                <ul>\n" +
                    "                    <li class=\"base_logo\"><a href=\"#\"><img src=\"../../../img/Logo.svg\" /></a></li>\n" +
                    "                    <li class=\"base_item1\"><a>Выйти</a></li>\n" +
                    "                </ul>\n" +
                    "                <ul class=\"base_links\">\n" +
                    "                    <li class=\"base_item2\"><a class=\"footer_txt\" href=\"../../../index.html\" >Главная</a></li>\n" +
                    "                    <li class=\"base_item2\"><a class=\"footer_txt\" href=\"../../../reestr.html\">Реестр собраний</a></li>\n" +
                    "                    <li class=\"base_item2\"><a class=\"footer_txt\" href=\"../../../help/help_1.html\">Помощь</a></li>\n" +
                    "                    <li class=\"base_item2\"><a class=\"footer_txt\" href=\"../../../help/contacts.html\">Контакты</a></li>\n" +
                    "                </ul>\n" +
                    "                <p class=\"copyright\">© 2011-2022 Оператор торговой площадки - ООО «ТендерСтандарт». Все права защищены.</p>\n" +
                    "            </div>\n" +
                    "    </div>\n" +
                    "</div>\n" +
                    "<script>\n" +
                    "    setInterval(function () {\n" +
                    "        var now = new Date();\n" +
                    "        var clock = document.getElementById(\"clock\");\n" +
                    "        clock.innerHTML = now.toLocaleTimeString();\n" +
                    "    }, 1000);\n" +
                    "</script>\n" +
                    "<script src=\"../../../jquery/jquery-3.6.0.js\"></script>\n" +
                    "<script href=\"https://cdn.jsdelivr.net/npm/jquery.maskedinput@1.4.1/src/jquery.maskedinput.min.js\" type=\"text/javascript\"></script>\n" +
                    "<script href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa\" crossorigin=\"anonymous\"></script>\n" +
                    "<script>\n" +
                    "    $(document).ready(function () {\n" +
                    "        $(\".sort_drop\").hide()\n" +
                    "    })\n" +
                    "    $(document).ready(function(){\n" +
                    "        $(\".arrw\").click(function(){\n" +
                    "            $(\".sort_drop\").slideDown()\n" +
                    "        }).click(function(){\n" +
                    "            $(\".table\").animate({\n" +
                    "                opacity: \"0.3\"\n" +
                    "            });\n" +
                    "        }).click(function(){\n" +
                    "            $(\".arrw\").css(\"transform\", \"rotate(180deg)\")\n" +
                    "        });\n" +
                    "    });\n" +
                    "    $(document).ready(function(){\n" +
                    "        $(\".sort_drop\").mouseleave(function(){\n" +
                    "            $(\".sort_drop\").slideUp()\n" +
                    "        }).mouseleave(function(){\n" +
                    "            $(\".table\").animate({\n" +
                    "                opacity: \"1\"\n" +
                    "            });\n" +
                    "        }).mouseleave(function(){\n" +
                    "            $(\".arrw\").css(\"transform\", \"rotate(360deg)\")\n" +
                    "        });\n" +
                    "    });\n" +
                    "    $(document).ready(function(){\n" +
                    "        $(\".sort_drop li\").click(function(){\n" +
                    "            $(\".sort_drop\").slideToggle()\n" +
                    "        }).click(function(){\n" +
                    "            $(\".table\").animate({\n" +
                    "                opacity: \"1\"\n" +
                    "            });\n" +
                    "        }).click(function(){\n" +
                    "            $(\".arrw\").css(\"transform\", \"rotate(360deg)\")\n" +
                    "        })\n" +
                    "    });\n" +
                    "    $(document).ready(function(){\n" +
                    "        $(\".sort1\").click(function(){\n" +
                    "            $(\".sort_val\").text(\"дате добавления\")\n" +
                    "        });\n" +
                    "    });\n" +
                    "    $(document).ready(function(){\n" +
                    "        $(\".sort2\").click(function(){\n" +
                    "            $(\".sort_val\").text(\"на рассмотернии\")\n" +
                    "        });\n" +
                    "    });\n" +
                    "    $(document).ready(function(){\n" +
                    "        $(\".sort3\").click(function(){\n" +
                    "            $(\".sort_val\").text(\"допущена\")\n" +
                    "        });\n" +
                    "    });\n" +
                    "    $(document).ready(function(){\n" +
                    "        $(\".sort4\").click(function(){\n" +
                    "            $(\".sort_val\").text(\"отклонена\")\n" +
                    "        });\n" +
                    "    });\n" +
                    "</script>\n" +
                    "</body>\n" +
                    "</html>");
            pw.close();
            pw = new PrintWriter(path + "\\bulletins.html", StandardCharsets.UTF_8);
            pw.print("<!DOCTYPE html>\n" +
                    "<html lang=\"en\">\n" +
                    "<head>\n" +
                    "    <meta charset=\"UTF-8\">\n" +
                    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n" +
                    "    <link rel=\"stylesheet\" type=\"text/css\" href=\"../../../style/shared.css\">\n" +
                    "    <link rel=\"stylesheet\" type=\"text/css\" href=\"../../../style/z_sobr_uch_7.css\">\n" +
                    "    <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Exo+2\">\n" +
                    "    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx\" crossorigin=\"anonymous\">\n" +
                    "    <title>SK_JS</title>\n" +
                    "</head>\n" +
                    "<body>\n" +
                    "<div class=\"menu\">\n" +
                    "    <ul>\n" +
                    "        <li class=\"logo\"><a href=\"../../../help/contacts.html\"><img src=\"../../../img/Logo.svg\" /></a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../index.html\">Главная</a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../reestr.html\">Реестр собраний</a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../help/help_1.html\">Помощь</a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../help/contacts.html\">Контакты</a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../lichnui_kobinetu/lk_uch/lk_uch_ip2/lk_uch.html\"><p class=\"nav_login\">Зинаида И.</p></a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../signin.html\"><span id=\"clock\" style=\"color:#ffffff;\"></span></a></li>\n" +
                    "        <li class=\"nav_item\"><a href=\"../../../help/contacts.html\"><img src=\"../../../img/logout%201%20(Traced).png\" /></a></li>\n" +
                    "    </ul>\n" +
                    "</div>\n" +
                    "<div class=\"container\">\n" +
                    "    <div class=\"content\">\n" +
                    "\n" +
                    "        <div class=\"ogl\">\n" +
                    "            <nav aria-label=\"breadcrumb\">\n" +
                    "                <ol class=\"breadcrumb\">\n" +
                    "                    <li class=\"breadcrumb-item\"><a class=\"anti_tekst\"  href=\"/index.html\">Главная</a></li>\n" +
                    "                    <li class=\"breadcrumb-item\"><a class=\"anti_tekst\"  href=\"#\">Личный кабинет участника</a></li>\n" +
                    "                    <li class=\"breadcrumb-item\"><a class=\"anti_tekst\"  href=\"#\">Организация собраний</a></li>\n" +
                    "                    <li class=\"breadcrumb-item active\" aria-current=\"page\">Карточка собрания</li>\n" +
                    "                </ol>\n" +
                    "            </nav>\n" +
                    "        </div>\n" +
                    "        <p class=\"heading\">Карточка собрания: 1014-заочное</p>\n" +
                    "\n" +
                    "        <div class=\"stats\">\n" +
                    "            <ul>\n" +
                    "                <li class=\"stats_item\"><a class=\"txtr\" href=\"z_sobr_org_2.html\">Общая информация</a></li>\n" +
                    "                <li class=\"stats_item\"><a class=\"txtr\" href=\"z_sobr_org_3.html\">Повестка дня</a></li>\n" +
                    "                <li class=\"stats_item\"><a class=\"txtr\" href=\"z_sobr_org_4.html\">Документы</a></li>\n" +
                    "                <li class=\"stats_item\"><a class=\"txtr\" href=\"z_sobr_org_6.html\">Заявки</a></li>\n" +
                    "                <li class=\"stats_item\"><a class=\"txtr\" href=\"z_sobr_org_7.html\"><b>Бюллетени</b></a></li>\n" +
                    "            </ul>\n" +
                    "        </div>\n" +
                    "\n" +
                    "        <div class=\"ep\">\n" +
                    "            <p>Бюллетени</p>\n" +
                    "            <ul>\n" +
                    "                <li>Выберите вопрос</li>\n" +
                    "                <li class=\"dropd\">Кто будет арбитражным управляющим?</li>\n" +
                    "                <img src=\"../../../img/down_arrow.svg\">\n" +
                    "            </ul>\n" +
                    "            <ul>\n" +
                    "                <li>Показать голосование</li>\n" +
                    "                <li class=\"dropd\">Всех участников</li>\n" +
                    "                <img src=\"../../../img/down_arrow.svg\">\n" +
                    "            </ul>\n" +
                    "            <div class=\"tbl\">\n" +
                    "                <table>\n" +
                    "                    <tr>\n" +
                    "                        <th class=\"fio\">ФИО участника собрания кредиторов</th>\n" +
                    "                        <th>За</th>\n" +
                    "                        <th>Против</th>\n" +
                    "                        <th>Воздержался</th>\n" +
                    "                    </tr>\n" +
                    "                    <tr>\n" +
                    "                        <td class=\"fio\">Афанасьева Елена Евгеньевна <img src=\"../../../img/download.svg\"/></td>\n" +
                    "                        <td><input type=\"checkbox\" /></td>\n" +
                    "                        <td><input type=\"checkbox\" /></td>\n" +
                    "                        <td><input type=\"checkbox\" /></td>\n" +
                    "                    </tr>\n" +
                    "                    <tr>\n" +
                    "                        <td class=\"fio\">Афанасьева Елена Евгеньевна <img src=\"../../../img/download.svg\"/></td>\n" +
                    "                        <td><input type=\"checkbox\" /></td>\n" +
                    "                        <td><input type=\"checkbox\" /></td>\n" +
                    "                        <td><input type=\"checkbox\" /></td>\n" +
                    "                    </tr>\n" +
                    "                    <tr>\n" +
                    "                        <td class=\"fio\">Афанасьева Елена Евгеньевна <img src=\"../../../img/download.svg\"/></td>\n" +
                    "                        <td><input type=\"checkbox\" /></td>\n" +
                    "                        <td><input type=\"checkbox\" /></td>\n" +
                    "                        <td><input type=\"checkbox\" /></td>\n" +
                    "                    </tr>\n" +
                    "                    <tr>\n" +
                    "                        <td class=\"fio\">Афанасьева Елена Евгеньевна <img src=\"../../../img/download.svg\"/></td>\n" +
                    "                        <td><input type=\"checkbox\" /></td>\n" +
                    "                        <td><input type=\"checkbox\" /></td>\n" +
                    "                        <td><input type=\"checkbox\" /></td>\n" +
                    "                    </tr>\n" +
                    "                </table>\n" +
                    "                <button class=\"hide\">Скрыть бюллетени</button>\n" +
                    "            </div>\n" +
                    "            <button class=\"show\">Показать бюллетени</button>\n" +
                    "\n" +
                    "        </div>\n" +
                    "\n" +
                    "        <div class=\"base_bg\"></div>\n" +
                    "            <div class=\"base\">\n" +
                    "                <ul>\n" +
                    "                    <li class=\"base_logo\"><a href=\"#\"><img src=\"../../../img/Logo.svg\" /></a></li>\n" +
                    "                    <li class=\"base_item1\"><a>Выйти</a></li>\n" +
                    "                </ul>\n" +
                    "                <ul class=\"base_links\">\n" +
                    "                    <li class=\"base_item2\"><a class=\"footer_txt\" href=\"../../../index.html\" >Главная</a></li>\n" +
                    "                    <li class=\"base_item2\"><a class=\"footer_txt\" href=\"../../../reestr.html\">Реестр собраний</a></li>\n" +
                    "                    <li class=\"base_item2\"><a class=\"footer_txt\" href=\"../../../help/help_1.html\">Помощь</a></li>\n" +
                    "                    <li class=\"base_item2\"><a class=\"footer_txt\" href=\"../../../help/contacts.html\">Контакты</a></li>\n" +
                    "                </ul>\n" +
                    "                <p class=\"copyright\">© 2011-2022 Оператор торговой площадки - ООО «ТендерСтандарт». Все права защищены.</p>\n" +
                    "            </div>\n" +
                    "    </div>\n" +
                    "</div>\n" +
                    "<script>\n" +
                    "    setInterval(function () {\n" +
                    "        var now = new Date();\n" +
                    "        var clock = document.getElementById(\"clock\");\n" +
                    "        clock.innerHTML = now.toLocaleTimeString();\n" +
                    "    }, 1000);\n" +
                    "</script>\n" +
                    "<script src=\"../../../jquery/jquery-3.6.0.js\"></script>\n" +
                    "<script href=\"https://cdn.jsdelivr.net/npm/jquery.maskedinput@1.4.1/src/jquery.maskedinput.min.js\" type=\"text/javascript\"></script>\n" +
                    "<script href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa\" crossorigin=\"anonymous\"></script>\n" +
                    "<script>\n" +
                    "    $(document).ready(function(){\n" +
                    "        $(\".tbl\").hide()\n" +
                    "    });\n" +
                    "\n" +
                    "    $(document).ready(function(){\n" +
                    "        $(\".show\").click(function(){\n" +
                    "            $(\".tbl\").slideDown()\n" +
                    "        }).click(function(){\n" +
                    "            $(\".show\").hide()\n" +
                    "        }).click(function(){\n" +
                    "            $(\".base_bg\").animate({\n" +
                    "                marginTop: \"1287px\"\n" +
                    "            });\n" +
                    "        });\n" +
                    "    });\n" +
                    "    $(document).ready(function(){\n" +
                    "        $(\".hide\").click(function(){\n" +
                    "            $(\".tbl\").slideUp()\n" +
                    "        }).click(function(){\n" +
                    "            $(\".show\").fadeIn()\n" +
                    "        }).click(function(){\n" +
                    "            $(\".base_bg\").animate({\n" +
                    "                marginTop: \"960px\"\n" +
                    "            });\n" +
                    "        });\n" +
                    "    });\n" +
                    "</script>\n" +
                    "</body>\n" +
                    "</html>");
            pw.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
    }
}
