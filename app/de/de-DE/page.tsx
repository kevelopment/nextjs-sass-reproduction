import type { Metadata } from "next";
import { FAQ } from "./faq/components/faq";

export const metadata: Metadata = {
  title: "Localized Home Page",
};

const HomePage = () => {
  return (
    <main>
      <div>Home Page</div>
      {/* Note: this component is imported from the faq module and causes the (s)css issue */}
      <FAQ />
    </main>
  );
};

export default HomePage;
