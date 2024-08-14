import { fetchDrinks } from "../data/api";

import { DrinkCard } from "@/components/drinkcard";
import { ROUTES } from "@/config/api";

export default async function Home() {
  const { drinks } = await fetchDrinks(
    ROUTES.SEARCH.COCKTAIL_BY_FIRST_LETTER,
    "a",
  );

  console.log(drinks.length, drinks);

  return (
    <section className=" columns-5 items-center justify-center gap-4 py-8 md:py-10">
      {drinks &&
        drinks?.map((drink) => {
          return <DrinkCard drink={drink} />;
        })}
    </section>
  );
}
