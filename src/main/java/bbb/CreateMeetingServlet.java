package bbb;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import static bbb.ConferenceUtil.*;
import static bbb.MeetingStatus.meetingStatus;
import static psql.connection.connect;

@WebServlet(name = "CreateMeetingServlet", value = "/CreateMeetingServlet")
public class CreateMeetingServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();
        HttpSession sesh = req.getSession();

        String id = req.getParameter("sk");
        String email = String.valueOf(sesh.getAttribute("sessionUser"));
        String role = String.valueOf(sesh.getAttribute("role"));

        String status = meetingStatus(id);

        if (status.trim().equals("Завершено")){
            try {
                Connection c = connect();

                switch (role.trim()){
                    case "ЮЛ":
                        String sql = "SELECT poln_naim FROM ql WHERE email = ?";
                        PreparedStatement ps = c.prepareStatement(sql);

                        ps.setString(1, email);

                        ResultSet rs = ps.executeQuery();

                        while (rs.next()){
                            String name = rs.getString(1);
                            out.println(meetingCreate(id, name));
                            out.println(hostJoin(id, name));
                        }

                        rs.close();
                        ps.close();
                        break;

                    case "ФЛ":
                        String sql1 = "SELECT famil, name, otch FROM fl WHERE email = ?";
                        PreparedStatement ps1 = c.prepareStatement(sql1);

                        ps1.setString(1, email);

                        ResultSet rs1 = ps1.executeQuery();

                        while (rs1.next()){
                            String name = rs1.getString(1) + " " + rs1.getString(2).charAt(0) + "." + rs1.getString(3).charAt(0) + ".";
                            out.println(meetingCreate(id, name));
                            out.println(hostJoin(id, name));
                        }

                        rs1.close();
                        ps1.close();
                        break;

                    case "ИП":
                        String sql2 = "SELECT famil, name, otch FROM ip WHERE email = ?";
                        PreparedStatement ps2 = c.prepareStatement(sql2);

                        ps2.setString(1, email);

                        ResultSet rs2 = ps2.executeQuery();

                        while (rs2.next()){
                            String name = rs2.getString(1) + " " + rs2.getString(2).charAt(0) + "." + rs2.getString(3).charAt(0) + ".";
                            out.println(meetingCreate(id, name));
                            out.println(hostJoin(id, name));
                        }

                        rs2.close();
                        ps2.close();
                        break;

                    case "АУ":
                        String sql3 = "SELECT famil, name, otch FROM au WHERE email = ?";
                        PreparedStatement ps3 = c.prepareStatement(sql3);

                        ps3.setString(1, email);

                        ResultSet rs3 = ps3.executeQuery();

                        while (rs3.next()){
                            String name = rs3.getString(1) + " " + rs3.getString(2).charAt(0) + "." + rs3.getString(3).charAt(0) + ".";
                            out.println(meetingCreate(id, name));
                            out.println(hostJoin(id, name));
                        }

                        rs3.close();
                        ps3.close();
                        break;
                }

            } catch (Exception e) {
                e.printStackTrace();
                System.err.println(e.getClass().getName() + ": " + e.getMessage());
                System.exit(0);
            }
        }
    }
}
