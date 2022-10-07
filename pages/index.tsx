import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import styled from "styled-components";
import NotificationCard, {
  NotificationProps,
} from "../components/NotificationCard";
import NotificationHeader from "../components/NotificationHeader";
import { getNotifications } from "../lib/service";

const NotificationContainer = styled.div({
  "@media screen and (min-width: 1024px)": {
    margin: "0 10%",
  },
});

const NotificationPage = ({
  notifications,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <NotificationContainer>
      <NotificationHeader notificationNumber="3"></NotificationHeader>
      {notifications.map((notification, index) => (
        <NotificationCard
          key={index}
          isRead={notification.isRead}
          time={notification.time}
          notificationString={notification.notificationString}
          user={notification.user}
          linkElement={notification.linkElement}
          isLinkElemenGroup={notification.isLinkElemenGroup}
          picture={notification.picture}
          messagePreview={notification.messagePreview}
        />
      ))}
    </NotificationContainer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const notifications: NotificationProps[] = getNotifications();

  return {
    props: {
      notifications,
    },
  };
};

export default NotificationPage;
