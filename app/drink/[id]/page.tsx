import { DrinkPageComponent } from "@/components/drinkpage";
import { ROUTES } from "@/config/api";
import { fetchDrinks } from "@/data/api";

export default async function DrinkPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id.split("-")[0];
  const { drinks } = await fetchDrinks(ROUTES.LOOKUP.COCKTAIL_BY_ID, id);

  if (!drinks) {
    return <>Drink dont exist</>;
  }

  return <DrinkPageComponent drink={drinks[0]} />;
}
