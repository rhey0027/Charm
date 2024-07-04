"use client";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { FaHeart } from "react-icons/fa";
import { BuyNowBtn } from "@/components";

export default function LatestProducts() {
  // ===== TYPE CHECKER ======//

  interface Card {
    id: number;
    img: string;
    title: string;
    price: string;
  }

  const cardList: Card[] = [
    {
      id: 1,
      title: "title",
      img: "../images/wristlet3.png",
      price: "P120",
    },
    {
      id: 2,
      title: "title",
      img: "./images/wristlet2.png",
      price: "P100",
    },
    {
      id: 3,
      title: "title",
      img: "./images/wristlet.png",
      price: "P100",
    },
    {
      id: 4,
      title: "title",
      img: "./images/wristlet4.png",
      price: "P100",
    },
    {
      id: 5,
      title: "title",
      img: "./images/wristlet5.png",
      price: "P100",
    },
    {
      id: 6,
      title: "title",
      img: "./images/wristlet6.png",
      price: "P100",
    },
    {
      id: 1,
      title: "title",
      img: "../images/wristlet3.png",
      price: "P120",
    },
    {
      id: 2,
      title: "title",
      img: "./images/wristlet2.png",
      price: "P100",
    },
    {
      id: 3,
      title: "title",
      img: "./images/wristlet.png",
      price: "P100",
    },
    {
      id: 4,
      title: "title",
      img: "./images/wristlet4.png",
      price: "P100",
    },
    {
      id: 5,
      title: "title",
      img: "./images/wristlet5.png",
      price: "P100",
    },
    {
      id: 6,
      title: "title",
      img: "./images/wristlet6.png",
      price: "P100",
    },
    {
      id: 1,
      title: "title",
      img: "../images/wristlet3.png",
      price: "P120",
    },
    {
      id: 2,
      title: "title",
      img: "./images/wristlet2.png",
      price: "P100",
    },
    {
      id: 3,
      title: "title",
      img: "./images/wristlet.png",
      price: "P100",
    },
    {
      id: 4,
      title: "title",
      img: "./images/wristlet4.png",
      price: "P100",
    },
    {
      id: 5,
      title: "title",
      img: "./images/wristlet5.png",
      price: "P100",
    },
    {
      id: 6,
      title: "title",
      img: "./images/wristlet6.png",
      price: "P100",
    },
  ];
  return (
    <>
      {cardList.map((item, index) => (
        <Card
          shadow="lg"
          key={index}
          className="w-[250px] h-[270px] mx-auto mt-10 rounded-lg p-1"
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <FaHeart className="absolute z-50 text-red-600 bg-white rounded-full mt-1 text-3xl p-2 left-3" />
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[200px] hover:scale-105 duration-75 ease-in-out"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between items-center">
            <p className="text-md">{item.price}</p>
            <BuyNowBtn />
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
