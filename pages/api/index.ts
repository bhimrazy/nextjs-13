// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const blog_content = [
    {
      title: "Surface Pro 8 – The most powerful Pro - Microsoft",
      thumbnail: "https://images.unsplash.com/photo-1583418855863-858dc79c2d19",
      description:
        "Surface Pro 8 is designed to light up the best of Windows 11, enabling you to work, play, and create in ways most natural to you.",
    },
    {
      title: "The M2 MacBook Air Is the Ultimate Laptop Gift",
      thumbnail:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/photo_1517336714731_489689fd1ca8_9.jpeg",
      description:
        "With a new camera, new colors and a bigger screen, the MacBook Air remains one of the most universally useful laptops you can get.",
    },
  ];
  res.status(200).json({ data: blog_content });
}
