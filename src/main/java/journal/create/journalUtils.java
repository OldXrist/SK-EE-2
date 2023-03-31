package journal.create;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DecimalFormat;

import org.apache.poi.xwpf.usermodel.*;

import static journal.create.getUchData.getCreds;
import static journal.create.getUchData.getMeetingInf;
import static psql.connection.connect;

public class journalUtils {

    public static String main(int id) throws URISyntaxException, IOException, SQLException, ClassNotFoundException {
        String resourcePath = "/opt/tomcat/webapps/ROOT/template.docx";
        Path templatePath = Paths.get(resourcePath);
        XWPFDocument doc =  new XWPFDocument(Files.newInputStream(templatePath));

        XWPFParagraph head = doc.createParagraph();
        head.setAlignment(ParagraphAlignment.LEFT);
        XWPFRun runHead = head.createRun();
        runHead.addBreak();
        ResultSet meetingInf = getMeetingInf(id);
        String headContent = "";
        while (meetingInf.next()){
            if (meetingInf.getString(1) == null){
                headContent = "Наименование должника: " + meetingInf.getString(2) + " " + meetingInf.getString(3) + " " +meetingInf.getString(4) + "\n" +
                        "Место и дата проведения собрания кредиторов: sk.tenderstandart.ru " + meetingInf.getString(5).split(" ")[0] + "\n" +
                        "Начало регистрации: " + meetingInf.getString(6) + "\n" +
                        "Окончание регистрации: " + meetingInf.getString(7);
            } else {
                headContent = "Наименование должника: " + meetingInf.getString(1) + "\n" +
                        "Место и дата проведения собрания кредиторов: " + meetingInf.getString(5).split(" ")[0] + "\n" +
                        "Начало регистрации: " + meetingInf.getString(6) + "\n" +
                        "Окончание регистрации: " + meetingInf.getString(7);
            }
        }
        contentWithBreaks(runHead, headContent);
        runHead.setFontSize(10);

        XWPFTable table = doc.createTable();
        XWPFTableRow th = table.getRow(0);
        createRow(th, "№\nп/п");
        addCell(th,"Время\nрегистрации");
        addCell(th,"Наименование\n(для юридического лица),\nФ. И. О. (для физического\nлица) участника собрания\nкредиторов");
        addCell(th,"Отметка\nо статусе\nучастника\nсобрания\nкредиторов*");
        addCell(th,"Адрес места\nнахождения (для\nюридического лица),\nпаспортные данные\n(для физического\nлица) участника\nсобрания\nкредиторов");
        addCell(th,"Ф. И. О. представителя\nучастника собрания\nкредиторов");
        addCell(th,"Вид, номер, серия\n(номер бланка), дата\nвыдачи документа,\nподтверждающего\nполномочия\nпредставителя\nучастника собрания\nкредиторов");
        addCell(th,"Размер требования\nконкурсного\nкредитора,\nуполномоченного\nоргана согласно\nреестру требований\nкредиторов\nна дату проведения\nсобрания\nкредиторов (в руб.)");
        addCell(th,"Отметка\nо количестве\nголосов");
        addCell(th,"Подпись\nучастника\nсобрания\nкредиторов");

        XWPFTableRow num = table.createRow();
        createRow(num, "1");
        fillCell(num,"2", 1);
        fillCell(num,"3", 2);
        fillCell(num,"4", 3);
        fillCell(num,"5", 4);
        fillCell(num,"6", 5);
        fillCell(num,"7", 6);
        fillCell(num,"8", 7);
        fillCell(num,"9", 8);
        fillCell(num,"10", 9);

        try {
            Connection c = connect();

            String sql = "SELECT type_uch FROM uch WHERE id = ?";
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setLong(1, id);

            ResultSet rs = ps.executeQuery();
            int k = 2;

            while (rs.next()){
                ResultSet creds = getCreds(rs.getString(1), id);
                while (creds.next()){

                    if (rs.getString(1).trim().equals("ЮЛ")){
                        XWPFTableRow row = table.createRow();
                        createRow(row, String.valueOf(k));
                        fillCell(row, creds.getString(1).split(":")[0] + ":" + creds.getString(1).split(":")[1], 1);
                        fillCell(row, creds.getString(2), 2);
                        fillCell(row, participantStatus(creds.getString(3)), 3);
                        fillCell(row, creds.getString(4), 4);
                        fillCell(row, "-", 5);
                        fillCell(row, "-", 6);
                        fillCell(row, creds.getString(5), 7);
                        fillCell(row, votingPower(creds.getInt(6), creds.getInt(5)), 8);
                        fillCell(row, "Применена ЭЦП", 9);
                    } else {
                        XWPFTableRow row = table.createRow();
                        createRow(row, String.valueOf(k));
                        fillCell(row, creds.getString(1).split(":")[0] + ":" + creds.getString(1).split(":")[1], 1);
                        fillCell(row, creds.getString(2) + " " + creds.getString(3) + " " + creds.getString(4), 2);
                        fillCell(row, participantStatus(creds.getString(5)), 3);
                        fillCell(row, "Паспорт\nСерия: " + creds.getString(6) + "\nНомер:" + creds.getString(7) + "\nДата выдачи: " + creds.getString(8) + "\nКем выдан: " + creds.getString(9), 4);
                        fillCell(row, "-", 5);
                        fillCell(row, "-", 6);
                        fillCell(row, creds.getString(10), 7);
                        fillCell(row, votingPower(creds.getInt(11), creds.getInt(10)), 8);
                        fillCell(row, "Применена ЭЦП", 9);
                    }

                    k++;
                }
            }

        } catch (SQLException | ClassNotFoundException e) {
            throw new RuntimeException(e);
        }

        XWPFParagraph p = doc.createParagraph();
        p.setAlignment(ParagraphAlignment.LEFT);
        XWPFRun run = p.createRun();
        run.addBreak();
        String content = "*Примечание. Отметка о статусе участника собрания кредиторов представляет собой обозначение кодовым знаком участника собрания кредиторов, а именно:\n" +
                "конкурсный кредитор — к. к.\n" +
                "уполномоченный орган — уп. ор.\n" +
                "представитель работников должника — п. р. д.\n" +
                "представитель учредителей (участников) должника — п. уч. д.\n" +
                "представитель собственника имущества должника — унитарного предприятия — п. с. д.\n" +
                "\n" +
                "\n" +
                "\n" +
                "(фамилия, инициалы, подпись арбитражного управляющего)";
        contentWithBreaks(run, content);
        run.setFontSize(10);
        String path = "/opt/tomcat/webapps/ROOT/journals/Журнал регистрации участников собрания №"+ id +".docx";
        saveWord(path, doc);

        return path;
    }

    public static XWPFDocument replaceTextFor(XWPFDocument doc, String findText, String replaceText){
        doc.getParagraphs().forEach(p ->{
            p.getRuns().forEach(run -> {
                String text = run.text();
                if(text.contains(findText)) {
                    run.setText(text.replace(findText, replaceText), 0);
                }
            });
        });

        return doc;
    }

    public static void saveWord(String filePath, XWPFDocument doc) throws FileNotFoundException, IOException{
        FileOutputStream out = null;
        try{
            out = new FileOutputStream(filePath);
            doc.write(out);
        }
        catch(Exception e) {
            e.printStackTrace();
        }
        finally{
            out.close();
        }
    }

    public static void createRow(XWPFTableRow row, String content) throws IOException {
        XWPFParagraph p = row.getCell(0).addParagraph();
        p.setAlignment(ParagraphAlignment.CENTER);
        p.setSpacingAfter(0);
        XWPFRun para = p.createRun();
        para.setText(content);
        para.addBreak(BreakType.TEXT_WRAPPING);
        para.setFontSize(10);
    }

    public static void addCell(XWPFTableRow rowName, String content){
        XWPFParagraph p = rowName.addNewTableCell().addParagraph();
        p.setAlignment(ParagraphAlignment.CENTER);
        p.setSpacingAfter(0);
        XWPFRun run = p.createRun();
        contentWithBreaks(run, content);
        run.setFontSize(10);
    }

    public static void fillCell(XWPFTableRow rowName, String content, int cellNum){
        XWPFParagraph p = rowName.getCell(cellNum).addParagraph();
        p.setAlignment(ParagraphAlignment.CENTER);
        XWPFRun run = p.createRun();
        contentWithBreaks(run, content);
        run.setFontSize(10);
    }

    public static void contentWithBreaks(XWPFRun run, String content){
        if (content.contains("\n")) {
            String[] lines = content.split("\n");
            run.setText(lines[0], 0); // set first line into XWPFRun
            for(int i=1;i<lines.length;i++){
                // add break and insert new text
                run.addBreak();
                run.setText(lines[i]);
            }
        } else {
            run.setText(content, 0);
        }
    }

    public static String participantStatus(String toParse){
        String parsed;

        switch (toParse.trim().split(" ")[1]){
            case "кредитор":
                parsed = "к. к.";
                break;
            case "органы":
                parsed = "уп. ор.";
                break;
            case "работников":
                parsed = "п. р. д.";
                break;
            case "учредителей":
                parsed = "п. уч. д.";
                break;
            case "собственника":
                parsed = "п. с. д.";
            default:
                return toParse;

        }

        return parsed;
    }

    public static String votingPower(int demandSum, int personalDemand){
        float power = (float) (personalDemand * 100) / demandSum;

        return power + "%";
    }

}
