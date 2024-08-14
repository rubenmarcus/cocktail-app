export const COCKTAIL_API = "https://www.thecocktaildb.com/api/json/v1/1/";

export const ROUTES = {
  FILTER: {
    INGREDIENT: "filter.php?i=",
    MULTI_INGREDIENT: "filter.php?i=",
    ALCOHOLIC: "filter.php?a=",
    CATEGORY: "filter.php?c=",
    GLASS: "filter.php?g=",
  },
  LIST: {
    CATEGORY: "list.php?c=list",
    GLASS: "list.php?g=list",
    INGREDIENT: "list.php?i=list",
    ALCOHOLIC: "list.php?a=list",
  },
  SEARCH: {
    COCKTAIL_BY_NAME: "search.php?s=",
    COCKTAIL_BY_FIRST_LETTER: "search.php?f=",
    INGREDIENT_BY_NAME: "search.php?i=",
  },
  LOOKUP: {
    COCKTAIL_BY_ID: "lookup.php?i=",
    INGREDIENT_BY_ID: "lookup.php?iid=",
  },
  RANDOM: {
    COCKTAIL: "random.php",
  },
};
