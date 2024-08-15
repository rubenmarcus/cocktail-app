import { Metadata } from "next";

import { IngredientPageComponent } from "@/components/ingredientpage";
import { ROUTES } from "@/config/api";
import { fetchDrinks } from "@/data/api";
import { PageParams } from "@/types";

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const id = params.id.split("-")[0];
  const { ingredients } = await fetchDrinks(
    ROUTES.SEARCH.INGREDIENT_BY_NAME,
    id,
  );

  return {
    title: `Cocktail App - ${id}`,
    openGraph: {
      title: `Cocktail App - ${id}`,
      description: ingredients[0].strDescription || id,
      images: [
        {
          type: "image/png",
          url: `https://www.thecocktaildb.com/images/ingredients/${ingredients[0].strIngredient}-Medium.png`,
        },
      ],
    },
    twitter: {
      title: `Cocktail App - ${id}`,
      description: ingredients[0].strDescription || id,
      card: "summary_large_image",
      images: `https://www.thecocktaildb.com/images/ingredients/${ingredients[0].strIngredient}-Medium.png`,
    },
  };
}

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
