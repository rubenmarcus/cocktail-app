import { DrinkCatalog } from "@/components/drinkcatalog";
import { ROUTES } from "@/config/api";
import { fetchDrinks } from "@/data/api";

export default async function NonAlcholic() {
  const { drinks } = await fetchDrinks(
    ROUTES.FILTER.ALCOHOLIC,
    "Non_Alcoholic",
  );

  return <DrinkCatalog dirTitle="Non Alcoholic" drinks={drinks} />;
}
