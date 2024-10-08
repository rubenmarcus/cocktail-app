"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarBrand,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Filters } from "./filter";

import { siteConfig } from "@/config/site";
import { SearchIcon } from "@/components/icons";
import { NavBarTypes } from "@/types";

export const Navbar = ({ categories, ingredients, glass }: NavBarTypes) => {
  const [searchInputVal, setSearchInput] = useState<null | string>(null);
  const router = useRouter();

  const handleSearch = () => {
    if (searchInputVal) {
      router.push(`/search/${searchInputVal}`);
    }
  };

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className=" lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search for a drink"
      startContent={
        <SearchIcon
          className="text-base text-default-400 pointer-events-none flex-shrink-0"
          onClick={handleSearch}
        />
      }
      type="search"
      onChange={(e) => setSearchInput(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSearch();
        }
      }}
    />
  );

  return (
    <>
      <NextUINavbar className="bg-zinc-900" maxWidth="xl" position="sticky">
        <NavbarContent className="basis-1/5 sm:basis-full " justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <Image
                unoptimized
                alt="logo"
                className="invert"
                height="22"
                src="/cocktail.png"
                width="22"
              />
              <p className="font-bold text-inherit">cocktail app</p>
            </NextLink>
          </NavbarBrand>
          <NavbarContent className="sm:hidden" justify="end">
            <NavbarMenuToggle />
          </NavbarContent>
          <ul className="hidden sm:flex gap-4 justify-start ml-10">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className=" lg:flex">{searchInput}</NavbarItem>
          <NavbarItem className=" md:flex" />
        </NavbarContent>

        <NavbarMenu>{searchInput}</NavbarMenu>

        <NavbarMenu>
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} className="my-1">
              <NextLink className="w-full" href={item.href}>
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}

          <div className="mt-2">{searchInput}</div>
        </NavbarMenu>
      </NextUINavbar>
      <div className="w-full md:gap-4 md:flex bg-zinc-850 md:justify-center md:items-center px-4 lg:px-0 py-3">
        <p>Filter Drinks:</p>
        <Filters
          items={categories.drinks}
          label="Filter by Category"
          type="category"
        />
        <Filters
          items={ingredients.drinks}
          label="Filter by Ingredients"
          type="ingredient"
        />
        <Filters
          items={glass.drinks}
          label="Filter by Glasses"
          type="glasses"
        />
      </div>
    </>
  );
};
