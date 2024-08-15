export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Cocktail app",
  description: "Cocktail App Directory.",
  navItems: [
    {
      label: "Drinks",
      href: "/",
    },
    {
      label: "Alcoholic Drinks",
      href: "/alcoholic",
    },
    {
      label: "Non Alcoholic Drinks",
      href: "/non-alcoholic",
    },
    {
      label: "Categories",
      href: "/browse/categories",
    },
    {
      label: "Ingredients",
      href: "/browse/ingredients",
    },
    {
      label: "Glasses",
      href: "/browse/glasses",
    },
  ],
};
