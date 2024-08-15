import { DrinkCard } from "@/components/drinkcard";
import { ROUTES } from "@/config/api";
import { fetchDrinks } from "@/data/api";
import { BrowseFilter } from "@/components/browsefilter";

export default async function Browse({ params }) {
  const { drinks } = await fetchDrinks(
    ROUTES.SEARCH.COCKTAIL_BY_FIRST_LETTER,
    params.id,
  );

  return (
    <>
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
