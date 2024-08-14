"use client";

import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import Link from "next/link";

import { Drink } from "@/types";

export const DrinkCard = ({ drink }: { drink: Drink }) => {
  const drinkName = drink.strDrink.replace(/\./g, "").replace(/\s+/g, "-");

  return (
    <Link href={`/drink/${drink.idDrink}-${drinkName}`}>
      <Card key={drink.idDrink} isPressable className="mb-4" shadow="sm">
        <CardBody className="overflow-visible p-0">
          <Image
            isZoomed
            alt={drink.strDrink}
            className="w-full object-cover h-[140px]"
            radius="lg"
            shadow="sm"
            src={drink.strDrinkThumb}
            width="100%"
          />
        </CardBody>
        <CardFooter className="text-small flex-wrap flex ">
          <h1>{drink.strDrink}</h1>
        </CardFooter>
      </Card>
    </Link>
  );
};
