import { DrinkCatalog } from "@/components/drinkcatalog";
import { ROUTES } from "@/config/api";
import { fetchDrinks } from "@/data/api";
import { PageParams } from "@/types";

export default async function Category({ params }: PageParams) {
  const id = params.id.replace(/-/g, " ");
  const { drinks } = await fetchDrinks(ROUTES.FILTER.CATEGORY, id);

  return <DrinkCatalog dirTitle={id} drinks={drinks} />;
}
