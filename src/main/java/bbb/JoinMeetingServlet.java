package bbb;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import static psql.connection.connect;
import static bbb.ConferenceUtil.*;
import static bbb.VotingRights.canVote;

@WebServlet(name = "JoinMeetingServlet", value = "/JoinMeetingServlet")
public class JoinMeetingServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter out = res.getWriter();
        HttpSession sesh = req.getSession();

        String id = req.getParameter("id");
        String email = String.valueOf(sesh.getAttribute("sessionUser"));
        String role = String.valueOf(sesh.getAttribute("role"));

        String canVote = canVote(email, id);

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
                        if (canVote.equals("1")){
                            out.println(1);
                            out.println(voterJoin(id, name));
                        } else if (canVote.equals("0")){
                            out.println(0);
                            out.println(viewerJoin(id, name));
                        }
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
                        if (canVote.equals("1")){
                            out.println(1);
                            out.println(voterJoin(id, name));
                        } else if (canVote.equals("0")){
                            out.println(0);
                            out.println(viewerJoin(id, name));
                        }
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
                        if (canVote.equals("1")){
                            out.println(1);
                            out.println(voterJoin(id, name));
                        } else if (canVote.equals("0")){
                            out.println(0);
                            out.println(viewerJoin(id, name));
                        }
                    }

                    rs2.close();
                    ps2.close();
                    break;
            }

            c.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
}
