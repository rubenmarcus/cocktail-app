"use client";

import { Select, SelectItem } from "@nextui-org/select";

import { FilterTypes } from "@/types";

export const Filters = ({ type, items, label }: FilterTypes) => {
  return (
    <Select className="max-w-xs" label={label} size="sm" variant="underlined">
      {items.map((item) => {
        const itemName =
          type == "glasses"
            ? item.strGlass
            : type == "category"
              ? item.strCategory
              : type == "ingredient"
                ? item.strIngredient1
                : null;

        const formatItemName =
          itemName && itemName.replace(/\./g, "").replace(/\s+/g, "-");

        const encodedItemName =
          formatItemName && formatItemName.includes("/")
            ? encodeURIComponent(formatItemName)
            : formatItemName;

        if (itemName) {
          return (
            <SelectItem
              key={itemName}
              className="text-xs"
              href={`/browse/${type}/${encodedItemName}`}
            >
              {itemName}
            </SelectItem>
          );
        }

        return <></>;
      })}
    </Select>
  );
};
