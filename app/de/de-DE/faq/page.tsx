import type { Metadata } from "next";
import { FAQ } from "../../../components/faq/faq";
import "./page.scss";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "FAQ Page",
  };
}

const FaqPage = () => {
  return (
    <section>
      <FAQ />
    </section>
  );
};

export default FaqPage;
