"use client";

import { Image } from "@nextui-org/image";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Link from "next/link";

import { title } from "@/components/primitives";
import { Drink } from "@/types";

export const DrinkPageComponent = ({ drink }: { drink: Drink }) => {
  const ingredients = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
    drink.strIngredient6,
    drink.strIngredient7,
    drink.strIngredient8,
    drink.strIngredient9,
    drink.strIngredient10,
    drink.strIngredient11,
    drink.strIngredient12,
    drink.strIngredient13,
    drink.strIngredient14,
    drink.strIngredient15,
  ].filter((ingredient) => ingredient !== null);

  const measures = [
    drink.strMeasure1,
    drink.strMeasure2,
    drink.strMeasure3,
    drink.strMeasure4,
    drink.strMeasure5,
    drink.strMeasure1,
    drink.strMeasure2,
    drink.strMeasure3,
    drink.strMeasure4,
    drink.strMeasure5,
    drink.strMeasure6,
    drink.strMeasure7,
    drink.strMeasure8,
    drink.strMeasure9,
    drink.strMeasure10,
    drink.strMeasure11,
    drink.strMeasure12,
    drink.strMeasure13,
    drink.strMeasure14,
    drink.strMeasure15,
  ].filter((measure) => measure !== null);

  console.log(drink);

  return (
    <section className="flex gap-10">
      <div className="w-1/3">
        <Image isZoomed src={drink.strDrinkThumb} />
      </div>
      <div className="w-2/3">
        <h1 className={title()}>{drink.strDrink}</h1>
        <p className="mt-5">Glass: {drink.strGlass} </p>
        <h2 className="w-full my-10">Ingredients</h2>
        <div className="flex gap-4 wrap">
          {ingredients &&
            ingredients.map((ingredient, index) => {
              return (
                <Link key={ingredient} href={`/ingredient/${ingredient}`}>
                  <Card isPressable className="mb-4" shadow="sm">
                    <CardBody className="overflow-visible p-0">
                      <Image
                        isZoomed
                        src={`https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`}
                        width={200}
                      />
                    </CardBody>
                    <CardFooter className="text-small flex-wrap flex ">
                      <h1>
                        {measures[index]} {ingredient}
                      </h1>
                    </CardFooter>
                  </Card>
                </Link>
              );
            })}
        </div>
        <div>
          {" "}
          <h2 className="w-full my-10">Instructions</h2>
          <p>{drink.strInstructions}</p>
        </div>
      </div>
    </section>
  );
};
