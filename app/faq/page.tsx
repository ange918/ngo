import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <>
      <PageHero crumb="FAQ" title="Frequently asked questions" text="Can't find your answer? Reach out from the contact page." />
      <section className="mx-auto max-w-3xl px-5"><Reveal><Faq /></Reveal></section>
    </>
  );
}
