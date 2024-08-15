import { IngredientPageComponent } from "@/components/ingredientpage";
import { ROUTES } from "@/config/api";
import { fetchDrinks } from "@/data/api";

export default async function IngredientPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id.split("-").join(" ");

  const [ingredientsResponse, drinksResponse] = await Promise.all([
    fetchDrinks(ROUTES.SEARCH.INGREDIENT_BY_NAME, id),
    fetchDrinks(ROUTES.FILTER.INGREDIENT, id),
  ]);

  const { ingredients } = ingredientsResponse;
  const { drinks } = drinksResponse;

  if (!ingredients) {
    return <>Ingredient dont exist</>;
  }

  return (
    <IngredientPageComponent drinks={drinks} ingredient={ingredients[0]} />
  );
}
