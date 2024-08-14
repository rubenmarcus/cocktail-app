import { COCKTAIL_API } from "../config/api";

export const fetchDrinks = async (route: string, param?: string) => {
  try {
    const url = param
      ? `${COCKTAIL_API}${route}${param}`
      : `${COCKTAIL_API}${route}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching drinks:", error);
    throw error;
  }
};
