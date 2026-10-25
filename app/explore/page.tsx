import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Suspense } from "react";
import ExploreGrid from "@/components/ExploreGrid";

export const metadata: Metadata = { title: "Explore" };

export default function Explore() {
  return (
    <>
      <PageHero crumb="Explore" title="Explore all items" text="Search, filter and sort every live auction on the marketplace." />
      <section className="mx-auto max-w-[1180px] px-5">
        <Suspense><ExploreGrid /></Suspense>
      </section>
    </>
  );
}
