import { DrinkCatalog } from "@/components/drinkcatalog";
import { ROUTES } from "@/config/api";
import { fetchDrinks } from "@/data/api";

export default async function Alcholic() {
  const { drinks } = await fetchDrinks(ROUTES.FILTER.ALCOHOLIC, "Alcoholic");

  return <DrinkCatalog dirTitle="Non Alcoholic" drinks={drinks} />;
}
