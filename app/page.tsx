import { fetchDrinks } from "../data/api";

import { DrinkCard } from "@/components/drinkcard";
import { BrowseFilter } from "@/components/browsefilter";
import { title } from "@/components/primitives";
import { ROUTES } from "@/config/api";
import { Drink } from "@/types";

export default async function Home() {
  const { drinks } = await fetchDrinks(
    ROUTES.SEARCH.COCKTAIL_BY_FIRST_LETTER,
    "a",
  );

  return (
    <>
      <h1 className={title()}>Drinks Directory</h1>
      <h2 className="my-4">filtered by letter: A</h2>
      <BrowseFilter drinks={drinks} id={"a"} />
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 py-8 md:py-10">
        {drinks &&
          drinks?.map((drink: Drink) => {
            return <DrinkCard key={drink.strDrink} drink={drink} />;
          })}
      </section>
    </>
  );
}
