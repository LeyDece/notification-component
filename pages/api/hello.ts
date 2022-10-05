// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import User from "../../types/User";


const userList: User[] = [
  {
    firstname: "Angela",
    lastname: "Gray",
    profilePicture: "/assets/images/avatar-angela-gray.webp"
  },
  {
    firstname: "Anna",
    lastname: "Kim",
    profilePicture: "/assets/images/avatar-anna-kim.webp"
  },
  {
    firstname: "Jacob",
    lastname: "Thompson",
    profilePicture: "/assets/images/avatar-jacob-thompson.webp"
  },
  {
    firstname: "Kimberly",
    lastname: "Smith",
    profilePicture: "/assets/images/avatar-kimberly-smith.webp"
  },
  {
    firstname: "Mark",
    lastname: "Webber",
    profilePicture: "/assets/images/avatar-mark-webber.webp"
  },
  {
    firstname: "Nathan",
    lastname: "Peterson",
    profilePicture: "/assets/images/avatar-nathan-peterson.webp"
  },
  {
    firstname: "Rizky",
    lastname: "Hasanuddin",
    profilePicture: "/assets/images/avatar-rizky-hasanuddin.webp"
  }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(userList)
}
