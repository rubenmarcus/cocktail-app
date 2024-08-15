"use client";

import { Image } from "@nextui-org/image";
import { Card, CardFooter } from "@nextui-org/card";
import Link from "next/link";

import { title } from "@/components/primitives";
import { Drink } from "@/types";

export const DrinkPageComponent = ({ drink }: { drink: Drink }) => {
  const ingredients: string[] = [
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
  ].filter((ingredient): ingredient is string => ingredient !== null);

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

  const formatItemName = drink.strGlass.replace(/\./g, "").replace(/\s+/g, "-");

  return (
    <section className="md:flex w-full md:gap-10">
      <div className="w-full md:w-1/3">
        <Image isZoomed src={drink.strDrinkThumb} />
      </div>
      <div className="w-full md:w-2/3 mt-10 md:mt-0">
        <h1 className={title()}>{drink.strDrink}</h1>
        <p className="mt-5">
          <b>Glass:</b>{" "}
          <Link href={`/browse/glass/${formatItemName}`}>{drink.strGlass}</Link>
        </p>
        <h2 className="w-full my-10 font-bold">Ingredients</h2>
        <div className="flex gap-4 flex-wrap">
          {ingredients &&
            ingredients.map((ingredient, index) => {
              const formattedIngredient = ingredient.replace(/\s+/g, "-");

              return (
                <Link
                  key={ingredient}
                  href={`/ingredient/${formattedIngredient}`}
                >
                  <Card
                    key={drink.idDrink}
                    isFooterBlurred
                    isPressable
                    className="border-none mb-4 h-[120px] w-[120px]"
                    radius="lg"
                    shadow="sm"
                  >
                    <Image
                      isZoomed
                      alt={drink.strDrink}
                      className="w-[120px] object-cover h-[120px]"
                      radius="lg"
                      shadow="sm"
                      src={`https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`}
                      width="100%"
                    />
                    <CardFooter className="justify-center before:bg-black/90 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-large ml-1 z-10">
                      <p className="text-tiny text-center font-bold text-white/80">
                        {measures[index]} {ingredient}
                      </p>
                    </CardFooter>
                  </Card>
                </Link>
              );
            })}
        </div>
        <div>
          {" "}
          <h2 className="w-full my-10 font-bold">Instructions</h2>
          <p>{drink.strInstructions}</p>
        </div>
      </div>
    </section>
  );
};
