import Image from "next/image";
import { HTMLProps } from "react";
import styled from "styled-components";
import User from "../types/User";

type NotificationProps = {
  isRead?: boolean;
  time?: string;
  notificationString?: string;
  user?: User;
} & HTMLProps<HTMLDivElement>;

const NotificationCardSC = styled.div<NotificationProps>`
  background-color: ${(props) => (props.isRead ? "" : "hsl(205, 33%, 90%)")};
  width: 100%;
  border-radius: 4px;
  padding: 10px;
  font-size: 13px;

  p {
    display: inline;
  }

  .name {
    font-weight: bold;
  }

  .image-container {
    min-width: 40px;
    min-height: 40px;
  }

  .container {
    display: flex;
  }

  .content-container {
    margin-left: 10px;
    font-weight: bold;
    max-height: 50px;
    overflow: hidden;
    align-self: center;
    letter-spacing: 0.2px;
  }

  .content::after {
    content: "•";
    color: hsl(1, 90%, 64%);
    margin-left: 8px;
    font-size: 18px;
  }

  .notification-content {
    color: hsl(219, 12%, 42%);
    height: 100%;
  }

  .time {
    color: hsl(219, 14%, 63%);
    margin-top: 2px;
  }
`;

const NotificationCard: React.FC<NotificationProps> = ({
  isRead,
  user,
  notificationString,
  time,
}) => {
  return (
    <NotificationCardSC isRead={isRead}>
      <div className="container">
        <div className="image-container">
          <Image
            src={user.profilePicture}
            height={40}
            width={40}
            layout="fixed"
          />
        </div>

        <div className="content-container">
          <div className="content">
            <p className="name">{`${user.firstname} ${user.lastname}`} </p>
            <p className="notification-content">{notificationString}</p>
          </div>
          <div className="time">{time} ago</div>
        </div>
      </div>
    </NotificationCardSC>
  );
};

export default NotificationCard;
