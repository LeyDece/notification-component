import styled from "styled-components";

const NotificationHeaderSC = styled.div({
  fontSize: "13px",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "30px",

  ".notification": {
    fontWeight: "800",
    fontSize: "16px",
    fontStretch: "100%",

    "> *": {
      display: "inline-block",
    },
  },

  ".notification-number": {
    backgroundColor: "hsl(219, 85%, 26%)",
    color: "hsl(0, 0%, 100%)",
    padding: "1px 10px",
    borderRadius: "6px",
    marginLeft: "8px",
  },

  ".notification-read": {
    color: "hsl(219, 12%, 42%)",
    alignSelf: "center",
  },
});

type NotificationHeaderProps = {
  notificationNumber: string;
};

const NotificationHeader: React.FC<NotificationHeaderProps> = ({
  notificationNumber,
}) => {
  return (
    <NotificationHeaderSC>
      <div className="notification">
        Notifications
        <div className="notification-number">{notificationNumber}</div>
      </div>
      <div className="notification-read">
        <a href="#">Mark all as read</a>
      </div>
    </NotificationHeaderSC>
  );
};

export default NotificationHeader;
