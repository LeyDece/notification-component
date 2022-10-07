import { NotificationProps } from "../components/NotificationCard";
import notificationsData from "../storage/notifications.json"
import usersData from "../storage/users.json"
import User from "../types/User";

export const getNotifications = () => {
    return notificationsData as NotificationProps[];
}

export const getUser = () => {
    return usersData as User[];
}
