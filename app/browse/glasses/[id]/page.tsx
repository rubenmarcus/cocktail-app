import { Metadata } from "next";

import { DrinkCatalog } from "@/components/drinkcatalog";
import { ROUTES } from "@/config/api";
import { fetchDrinks } from "@/data/api";
import { PageParams } from "@/types";

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const id = params.id.replace(/-/g, " ");
  const decodedDirTitle = decodeURIComponent(id);

  return {
    title: decodedDirTitle,
    openGraph: {
      title: decodedDirTitle,
    },
  };
}

export default async function Glasses({ params }: PageParams) {
  let id = params.id.replace(/-/g, "_");
  const title = params.id.replace(/-/g, " ");

  if (params.id == "Old-fashioned-glass") {
    id = "old-fashioned_glass";
  }

  const { drinks } = await fetchDrinks(ROUTES.FILTER.GLASS, id);

  return <DrinkCatalog dirTitle={title} drinks={drinks} />;
}
