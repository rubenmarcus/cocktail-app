"use client";

import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import Link from "next/link";

import { Drink } from "@/types";

export const DrinkCard = ({ drink }: { drink: Drink }) => {
  const drinkName = drink.strDrink.replace(/\./g, "").replace(/\s+/g, "-");

  return (
    <Link href={`/drink/${drink.idDrink}-${drinkName}`}>
      <Card
        key={drink.idDrink}
        isFooterBlurred
        isPressable
        className="border-none mb-4 h-[140px] w-[200px]"
        radius="lg"
        shadow="sm"
      >
        <Image
          isZoomed
          alt={drink.strDrink}
          className="w-[200px] object-cover h-[140px]"
          radius="lg"
          shadow="sm"
          src={drink.strDrinkThumb}
          width="100%"
        />
        <CardFooter className="justify-center before:bg-black/90 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-large ml-1 z-10">
          <p className="text-tiny text-center text-white/80">
            {drink.strDrink}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};
