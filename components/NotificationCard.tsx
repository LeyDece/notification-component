import Image from "next/image";
import { HTMLProps } from "react";
import styled from "styled-components";
import User from "../types/User";

export type NotificationProps = {
  isRead?: boolean;
  time?: string;
  notificationString?: string;
  user?: User;
  linkElement?: string;
  isLinkElemenGroup?: boolean;
  picture?: string;
  messagePreview?: string;
} & HTMLProps<HTMLDivElement>;

const NotificationCardSC = styled.div<NotificationProps>`
  background-color: ${(props) => (props.isRead ? "" : "hsl(210, 60%, 98%)")};
  width: 100%;
  border-radius: 4px;
  padding: 9px;
  font-size: 13px;
  margin: 10px 0;

  .name {
    font-weight: bold;
  }

  .image-container {
    min-width: 40px;
    min-height: 40px;
  }

  .container {
    display: flex;
    position: relative;
  }

  .content-container {
    margin-left: 10px;
    font-weight: bold;
    overflow: hidden;
    align-self: center;
    letter-spacing: 0.2px;
  }

  .isNotRead.content::after {
    content: "•";
    color: hsl(1, 90%, 64%);
    margin-left: 8px;
    font-size: 18px;
  }

  .notification-content {
    color: hsl(219, 12%, 42%);
  }

  .link-element {
    font-weight: bold;
    color: ${(props) =>
      props.isLinkElemenGroup ? "hsl(219, 85%, 26%)" : "hsl(219, 12%, 42%)"};
  }

  .link-element:hover {
    color: hsl(219, 85%, 26%);
  }

  .time {
    margin-top: "5px";
    color: hsl(219, 14%, 63%);
  }

  .message-preview {
    border: 1px solid hsl(205, 33%, 90%);
    padding: 15px;
    color: hsl(219, 12%, 42%);
    font-weight: 600;
    margin: 15px 0;
  }

  .message-preview:hover {
    background-color: hsl(211, 68%, 94%);
    cursor: pointer;
  }

  .message-preview a:hover {
    color: inherit;
  }

  .picture {
    margin-left: auto;
  }
`;

const NotificationCard: React.FC<NotificationProps> = ({
  isRead,
  user,
  notificationString,
  time,
  linkElement,
  isLinkElemenGroup,
  messagePreview,
  picture,
}) => {
  return (
    <NotificationCardSC
      isRead={isRead}
      isLinkElemenGroup={isLinkElemenGroup ?? false}
    >
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
          <div className={`${isRead ? "" : "isNotRead"} content`}>
            <a href="#">
              <span className="name">
                {`${user.firstname} ${user.lastname}`}{" "}
              </span>
            </a>
            <span className="notification-content">{notificationString}</span>
            {linkElement && (
              <a href="#">
                <span className="link-element">{linkElement}</span>
              </a>
            )}
          </div>
          <div className="time">{time} ago</div>
          {messagePreview && (
            <div className="message-preview">
              <a href="#">{messagePreview}</a>
            </div>
          )}
        </div>
        {picture && (
          <div className="picture">
            <a href="#">
              <Image
                src="/assets/images/image-chess.webp"
                height={40}
                width={40}
                layout="fixed"
              />
            </a>
          </div>
        )}
      </div>
    </NotificationCardSC>
  );
};

export default NotificationCard;
