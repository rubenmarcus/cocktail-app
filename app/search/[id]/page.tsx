import { Metadata } from "next";

import { DrinkCatalog } from "@/components/drinkcatalog";
import { ROUTES } from "@/config/api";
import { fetchDrinks } from "@/data/api";
import { PageParams } from "@/types";

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const id = params.id.replace(/-/g, " ");

  return {
    title: id,
    openGraph: {
      title: id,
    },
  };
}

export default async function Search({ params }: PageParams) {
  const { drinks } = await fetchDrinks(
    ROUTES.SEARCH.COCKTAIL_BY_NAME,
    params.id,
  );

  return <DrinkCatalog dirTitle={params.id} drinks={drinks} />;
}
