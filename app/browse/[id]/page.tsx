import { DrinkCard } from "@/components/drinkcard";
import { ROUTES } from "@/config/api";
import { fetchDrinks } from "@/data/api";
import { BrowseFilter } from "@/components/browsefilter";
import { title } from "@/components/primitives";

export default async function Browse({ params }) {
  const { drinks } = await fetchDrinks(
    ROUTES.SEARCH.COCKTAIL_BY_FIRST_LETTER,
    params.id,
  );

  return (
    <>
      <h1 className={title()}>Drinks Directory</h1>
      <h2 className="my-4">filtered by letter: {params.id}</h2>
      <BrowseFilter drinks={drinks} id={params.id} />
      <section className="columns-5 items-center justify-center gap-4 py-8 md:py-10">
        {drinks &&
          drinks?.map((drink) => {
            return <DrinkCard drink={drink} />;
          })}
      </section>
    </>
  );
}
