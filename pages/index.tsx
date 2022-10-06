import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import styled from "styled-components";
import NotificationCard, {
  NotificationProps,
} from "../components/NotificationCard";
import NotificationHeader from "../components/NotificationHeader";

const NotificationPage = ({
  notifications,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
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
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.FETCH_URL}/api/hello`);
  const notifications: NotificationProps[] = await res.json();

  return {
    props: {
      notifications,
    },
  };
};

export default NotificationPage;
