import { Link } from "@nextui-org/link";

import { Drink } from "@/types";

export const BrowseFilter = ({
  id,
  drinks,
}: {
  id: string;
  drinks: Drink[];
}) => {
  const browseLetters = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i),
  );

  const LinksAlphabet = () => {
    return (
      <>
        {browseLetters.map((letter) => (
          <Link
            key={letter}
            className={
              letter == id
                ? `uppercase bg-primary text-white p-2 rounded`
                : `uppercase p-2 rounded`
            }
            href={`/browse/${letter}`}
          >
            {letter}
          </Link>
        ))}
      </>
    );
  };

  return (
    <div className="w-full  flex  flex-wrap align-center items-center text-uppercase gap-2">
      <div className="w-full md:w-1/5">
        {drinks.length} {drinks.length > 1 ? "drinks" : "drink"} founded
      </div>
      <div className="w-full md:w-1/5 flex md:justify-end">
        Filter by Letter:
      </div>
      <div className="w-full md:w-3/5">
        <LinksAlphabet />
      </div>
    </div>
  );
};
