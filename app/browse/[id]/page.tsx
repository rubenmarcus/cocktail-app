import { ROUTES } from "@/config/api";
import { fetchDrinks } from "@/data/api";
import { BrowseFilter } from "@/components/browsefilter";
import { title } from "@/components/primitives";
import { Drink, PageParams } from "@/types";
import { DrinkCard } from "@/components/drinkcard";

export default async function Browse({ params }: PageParams) {
  const { drinks } = await fetchDrinks(
    ROUTES.SEARCH.COCKTAIL_BY_FIRST_LETTER,
    params.id,
  );

  return (
    <>
      <h1 className={title()}>Drinks Directory</h1>
      <h2 className="my-4">filtered by letter: {params.id}</h2>
      <BrowseFilter drinks={drinks} id={params.id} />
      <section className="grid grid-cols-5 gap-4 py-8 md:py-10">
        {drinks &&
          drinks?.map((drink: Drink) => {
            return <DrinkCard key={drink.strDrink} drink={drink} />;
          })}
      </section>
    </>
  );
}
