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
      <div className="flex flex-wrap w-full items-center">
        <h1 className={`${title()} w-full md:w-2/5 lg:w-4/5`}>{dirTitle}</h1>
        <div className="w-full text-left mt-2 md:mt-0 md:text-right md:w-1/5">
          <b>{drinks.length}</b> {drinks.length > 1 ? "drinks" : "drink"}
          founded
        </div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 py-8 md:py-10">
        {drinks &&
          drinks?.map((drink: Drink) => {
            return <DrinkCard key={drink.strDrink} drink={drink} />;
          })}
      </section>
    </>
  );
};
