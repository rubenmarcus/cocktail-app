import { DrinkCard } from "./drinkcard";
import { title } from "./primitives";

import { Drink } from "@/types";

export const DrinkCatalog = ({
  drinks,
  dirTitle,
}: {
  drinks: Drink[];
  dirTitle: string;
}) => {
  return (
    <>
      <div className="flex w-full items-center">
        <h1 className={`${title()} w-4/5`}>{dirTitle}</h1>
        <div className="w-1/5"> Founded {drinks.length} Drinks </div>
      </div>
      <section className="grid grid-cols-5 gap-4 py-8 md:py-10">
        {drinks &&
          drinks?.map((drink: Drink) => {
            return <DrinkCard key={drink.strDrink} drink={drink} />;
          })}
      </section>
    </>
  );
};
