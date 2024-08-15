"use client";

import { Image } from "@nextui-org/image";

import { DrinkCard } from "./drinkcard";

import { Drink, Ingredient } from "@/types";
import { title } from "@/components/primitives";

export const IngredientPageComponent = ({
  drinks,
  ingredient,
}: {
  drinks: Drink[];
  ingredient: Ingredient;
}) => {
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

              return <DrinkCard key={drinkName} drink={drink} />;
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
