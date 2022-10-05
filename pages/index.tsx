import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import styled from "styled-components";
import NotificationCard from "../components/NotificationCard";
import NotificationHeader from "../components/NotificationHeader";
import User from "../types/User";

const NotificationPage = ({
  users,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <NotificationHeader notificationNumber="3"></NotificationHeader>
      <NotificationCard
        isRead={false}
        user={users[0]}
        notificationString={"followed you"}
        time={"5m"}
      ></NotificationCard>
      {/* {users.map((user: User, index: number) => (
        <li key={index}>
          <Image src={user.profilePicture} width={45} height={45} />
          {user.firstname} {user.lastname}
        </li>
      ))} */}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.FETCH_URL}/api/hello`);
  const users: User[] = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default NotificationPage;
