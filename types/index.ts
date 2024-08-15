import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

type NullableString = string | null;

export type Drink = {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: NullableString;
  strTags: NullableString;
  strVideo: NullableString;
  strCategory: string;
  strIBA: NullableString;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES: NullableString;
  strInstructionsDE: NullableString;
  strInstructionsFR: NullableString;
  strInstructionsIT: NullableString;
  strDrinkThumb: string;
  strIngredient1: NullableString;
  strIngredient2: NullableString;
  strIngredient3: NullableString;
  strIngredient4: NullableString;
  strIngredient5: NullableString;
  strIngredient6: NullableString;
  strIngredient7: NullableString;
  strIngredient8: NullableString;
  strIngredient9: NullableString;
  strIngredient10: NullableString;
  strIngredient11: NullableString;
  strIngredient12: NullableString;
  strIngredient13: NullableString;
  strIngredient14: NullableString;
  strIngredient15: NullableString;
  strMeasure1: NullableString;
  strMeasure2: NullableString;
  strMeasure3: NullableString;
  strMeasure4: NullableString;
  strMeasure5: NullableString;
  strMeasure6: NullableString;
  strMeasure7: NullableString;
  strMeasure8: NullableString;
  strMeasure9: NullableString;
  strMeasure10: NullableString;
  strMeasure11: NullableString;
  strMeasure12: NullableString;
  strMeasure13: NullableString;
  strMeasure14: NullableString;
  strMeasure15: NullableString;
  strImageSource: NullableString;
  strImageAttribution: NullableString;
  strCreativeCommonsConfirmed: string;
  dateModified: NullableString;
};

export type Ingredient = {
  idIngredient: string;
  strABV: NullableString;
  strAlcohol: "No" | "Yes";
  strDescription: NullableString;
  strIngredient: string;
  strType: string;
};

export type Ingredients = {
  ingredients: Ingredient[];
};

export type PageParams = {
  params: { id: string };
};
