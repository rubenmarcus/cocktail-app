import { Metadata } from "next";

import { DrinkPageComponent } from "@/components/drinkpage";
import { ROUTES } from "@/config/api";
import { fetchDrinks } from "@/data/api";
import { PageParams } from "@/types";

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const id = params.id.split("-")[0];
  const { drinks } = await fetchDrinks(ROUTES.LOOKUP.COCKTAIL_BY_ID, id);

  return {
    title: `Cocktail App - ${id}`,
    openGraph: {
      title: `Cocktail App - ${id}`,
      description: drinks[0].strDescription || id,
      images: [
        {
          type: "image/png",
          url: drinks[0].strDrinkThumb,
        },
      ],
    },
    twitter: {
      title: `Cocktail App - ${id}`,
      description: drinks[0].strDescription || id,
      card: "summary_large_image",
      images: drinks[0].strDrinkThumb,
    },
  };
}

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
