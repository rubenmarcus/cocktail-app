"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@nextui-org/button";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  const router = useRouter();

  return (
    <div className="flex align-center justify-center gap-5 flex-wrap w-full">
      <h2 className="text-2xl text-center w-full ">No Drinks Found</h2>
      <Button color="primary" onClick={() => router.push("/")}>
        Go Main Directory
      </Button>
    </div>
  );
}
