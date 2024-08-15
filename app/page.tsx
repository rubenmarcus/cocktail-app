import { fetchDrinks } from "../data/api";

import { BrowseFilter } from "@/components/browsefilter";
import { DrinkCard } from "@/components/drinkcard";
import { title } from "@/components/primitives";
import { ROUTES } from "@/config/api";

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

      <section className=" columns-5 items-center justify-center gap-4 py-8 md:py-10">
        {drinks &&
          drinks?.map((drink) => {
            return <DrinkCard drink={drink} />;
          })}
      </section>
    </>
  );
}
