package bbb;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.security.NoSuchAlgorithmException;
import static bbb.SHA1.encryptThisString;

public class ConferenceUtil {
    static String baseURL = "https://conference.tenderstandart.ru/bigbluebutton/api/";
    static String salt = "STDEkuiYzP22AAVmpDR4uFESCpXyc5vdJAOd0pwcVoM";
    static String viewerStyleURL = "https://sk.tenderstandart.ru/style/conference.css";
    static String hostStyleURL = "https://sk.tenderstandart.ru/style/conferenceHost.css";
    static String welcomeMessage = "Добро пожаловать в собрание кредиторов!<br><br>Чтобы подключиться с использованием<br>микрофона/вебкамеры, воспользуйтесь<br>кнопками в нижней части экрана.<br><br>Используйте наушники, чтобы избежать появления посторонних шумов.";
    public static String voterJoin(String id, String name) throws NoSuchAlgorithmException {
        String toHash = "joinmeetingID=creditorMeeting" + id + "&fullName=User&role=viewer" + salt;
        String checksum = encryptThisString(toHash);

        return baseURL + "join?meetingID=creditorMeeting" + id + "&fullName=User&role=viewer&checksum=" + checksum;
    }

    public static String viewerJoin(String id, String name) throws NoSuchAlgorithmException {
        String toHash = "joinmeetingID=creditorMeeting" + id + "&fullName=User&role=viewer&userdata-bbb_custom_style_url=" + URLEncoder.encode(viewerStyleURL, StandardCharsets.UTF_8) + salt;
        String checksum = encryptThisString(toHash);

        return baseURL + "join?meetingID=creditorMeeting" + id + "&fullName=User&role=viewer&userdata-bbb_custom_style_url=" + URLEncoder.encode(viewerStyleURL, StandardCharsets.UTF_8) + "&checksum=" + checksum;
    }

    public static String meetingCreate(String id, String name) throws NoSuchAlgorithmException {
        String toHash = "createname=" + URLEncoder.encode("Собрание кредиторов №", StandardCharsets.UTF_8) + id + "&meetingID=creditorMeeting" + id + "&lockSettingsDisablePrivateChat=true&lockSettingsDisableNote=true&meetingLayout=VIDEO_FOCUS&disabledFeatures=breakoutRooms,captions,externalVideos,screenshare,sharedNotes,liveTranscription,presentation&welcome=" + URLEncoder.encode(welcomeMessage, StandardCharsets.UTF_8) + salt;
        String checksum = encryptThisString(toHash);

        return baseURL + "create?name=" + URLEncoder.encode("Собрание кредиторов №", StandardCharsets.UTF_8) + id + "&meetingID=creditorMeeting" + id + "&lockSettingsDisablePrivateChat=true&lockSettingsDisableNote=true&meetingLayout=VIDEO_FOCUS&disabledFeatures=breakoutRooms,captions,externalVideos,screenshare,sharedNotes,liveTranscription,presentation&welcome=" + URLEncoder.encode(welcomeMessage, StandardCharsets.UTF_8) + "&checksum=" + checksum;
    }

    public static String hostJoin(String id, String name) throws NoSuchAlgorithmException {
        String toHash = "joinmeetingID=creditorMeeting" + id + "&fullName=" + URLEncoder.encode(name, StandardCharsets.UTF_8) + "&role=moderator&userdata-bbb_custom_style_url=" + URLEncoder.encode(hostStyleURL, StandardCharsets.UTF_8) + salt;
        String checksum = encryptThisString(toHash);

        return baseURL + "join?meetingID=creditorMeeting" + id + "&fullName=" + URLEncoder.encode(name, StandardCharsets.UTF_8) + "&role=moderator&userdata-bbb_custom_style_url=" + URLEncoder.encode(hostStyleURL, StandardCharsets.UTF_8) + "&checksum=" + checksum;
    }
}

