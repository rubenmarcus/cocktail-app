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
  ],
};
