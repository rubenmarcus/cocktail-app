import { BrowseFilter } from "@/components/browsefilter";
import { DrinkCard } from "@/components/drinkcard";
import { Filters } from "@/components/filter";
import { ROUTES } from "@/config/api";
import { fetchDrinks } from "@/data/api";

export default async function Category({ params }) {
  const id = params.id.replace(/-/g, " ");
  const { drinks } = await fetchDrinks(ROUTES.FILTER.CATEGORY, id);

  const categories = await fetchDrinks(ROUTES.LIST.CATEGORY);
  const glass = await fetchDrinks(ROUTES.LIST.GLASS);
  const ingredients = await fetchDrinks(ROUTES.LIST.INGREDIENT);

  return (
    <>
      <BrowseFilter drinks={drinks} id={"a"} />
      <div className="w-full gap-4 flex">
        <Filters
          items={categories.drinks}
          label="Filter by Category"
          type="category"
        />
        <Filters
          items={ingredients.drinks}
          label="Filter by Ingredients"
          type="ingredient"
        />
        <Filters
          items={glass.drinks}
          label="Filter by Glasses"
          type="glasses"
        />
      </div>

      <section className=" columns-5 items-center justify-center gap-4 py-8 md:py-10">
        {drinks &&
          drinks?.map((drink) => {
            return <DrinkCard drink={drink} />;
          })}
      </section>
    </>
  );
}
