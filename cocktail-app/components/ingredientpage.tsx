"use client";

import Link from "next/link";
import { Image } from "@nextui-org/image";
import { Card, CardBody, CardFooter } from "@nextui-org/card";

import { Drink, Ingredient } from "@/types";
import { title } from "@/components/primitives";

export const IngredientPageComponent = ({
  drinks,
  ingredient,
}: {
  drinks: Drink[];
  ingredient: Ingredient;
}) => {
  console.log(drinks, "drinks");
  console.log(ingredient, "ingridient");

  return (
    <section className="flex gap-10">
      <div className="w-1/3">
        <Image
          isZoomed
          src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient}-Medium.png`}
        />
      </div>
      <div className="w-2/3">
        <h1 className={title()}>{ingredient.strIngredient}</h1>
        <p className="mt-5">
          <b>Type:</b> {ingredient.strType}
        </p>
        <p className="mt-5">
          {ingredient.strAlcohol === "No" ? "Non Alcoholic" : "Alcoholic"}
        </p>
        <h2 className="w-full my-5 font-bold">Drinks</h2>
        <div className="w-full flex gap-4 flex-wrap">
          {drinks &&
            drinks.map((drink) => {
              const drinkName = drink.strDrink
                .replace(/\./g, "")
                .replace(/\s+/g, "-");

              return (
                <Link
                  key={drinkName}
                  href={`/drink/${drink.idDrink}-${drinkName}`}
                >
                  <Card isPressable className="mb-4 max-w-52" shadow="sm">
                    <CardBody className="overflow-visible p-0">
                      <Image isZoomed src={drink.strDrinkThumb} width={200} />
                    </CardBody>
                    <CardFooter className="text-small flex-wrap flex ">
                      <p className="break-words	block text-xs h-auto w-full">
                        {drink.strDrink}
                      </p>
                    </CardFooter>
                  </Card>
                </Link>
              );
            })}
        </div>
        <div>
          {!!ingredient.strDescription && (
            <>
              <h2 className="w-full my-5 font-bold">Description</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: ingredient.strDescription.replace(/\r\n/g, "<br />"),
                }}
                className="text-sm"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};
