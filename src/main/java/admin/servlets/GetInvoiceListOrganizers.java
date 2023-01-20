package admin.servlets;

import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.sql.*;
import java.util.ArrayList;
import java.util.HashSet;

import static psql.connection.connect;

@WebServlet("/GetInvoiceListOrganizers")
public class GetInvoiceListOrganizers extends HttpServlet {
    public String AuSql()
    {
        return "SELECT DISTINCT main.email, main.auth, au.reg_date, au.famil, au.name, au.otch\n" +
                "FROM public.main\n" +
                "INNER JOIN public.au ON main.email = au.email and main.role_users = 'АУ' and main.type_users = 'организатор';";
    }

    public String FlSql()
    {
       return  "SELECT DISTINCT main.email, main.auth, fl.reg_date, fl.famil, fl.name, fl.otch\n" +
               "FROM public.main\n" +
               "INNER JOIN public.fl ON main.email = fl.email and main.role_users = 'ФЛ' and main.type_users = 'организатор';";
    }

    public String IpSql()
    {
        return "SELECT DISTINCT main.email, main.auth, ip.reg_date, ip.famil, ip.name, ip.otch\n" +
                "FROM public.main\n" +
                "INNER JOIN public.ip ON main.email = ip.email and main.role_users = 'ИП' and main.type_users = 'организатор';";
    }

    public String QlSql()
    {
        return  "SELECT DISTINCT main.email, main.auth, ql.reg_date, ql.poln_naim\n" +
                "FROM public.main\n" +
                "INNER JOIN public.ql ON main.email = ql.email and main.role_users = 'ЮЛ' and main.type_users = 'организатор';";
    }

    public void GetRoles(Connection _c, ArrayList<String> _userRoles) {
        try {
            String sql = "SELECT DISTINCT role_users FROM main WHERE role_users != 'admin' and role_users != 'operator'";
            PreparedStatement ps = _c.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            ResultSetMetaData meta = rs.getMetaData();
            int columnCount = meta.getColumnCount();
            while (rs.next()) {
                for (int i = 1; i <= columnCount; ++i)
                {
                    Object value = rs.getObject(i);
                    _userRoles.add(String.valueOf(value));
                }
            }
            rs.close();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }

    public void SetInvoiceInfo(Connection _c, String _sql, ArrayList<ArrayList<String>> _invoiceList)
    {
        try {
            PreparedStatement ps = _c.prepareStatement(_sql);
            ResultSet rs = ps.executeQuery();
            ResultSetMetaData meta = rs.getMetaData();
            int columnCount = meta.getColumnCount();
            while (rs.next()) {
                ArrayList<String> invoiceInfo = new ArrayList<String>();
                for (int i = 1; i <= columnCount; ++i)
                {
                    Object value = rs.getObject(i);
                    invoiceInfo.add(String.valueOf(value));
                }
                _invoiceList.add(invoiceInfo);
            }
            rs.close();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            Connection c = connect();

            //сначала собираем роли и id организаторов
            ArrayList<String> userRoles = new ArrayList<String>();
            GetRoles(c, userRoles);

            //заполняем массив данными
            ArrayList<ArrayList<String>> invoiceListOrganizers = new ArrayList<ArrayList<String>>();
            for (String item : userRoles) {
                switch (item) {
                    case "АУ": SetInvoiceInfo(c, AuSql(), invoiceListOrganizers);
                        break;
                    case "ФЛ": SetInvoiceInfo(c, FlSql(), invoiceListOrganizers);
                        break;
                    case "ИП": SetInvoiceInfo(c, IpSql(), invoiceListOrganizers);
                        break;
                    case "ЮЛ": SetInvoiceInfo(c, QlSql(), invoiceListOrganizers);
                        break;
                }
            }

            //возвращаем данные на фронтенд в формате json
            String json = new Gson().toJson(invoiceListOrganizers);
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().write(json);
        }
        catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}
