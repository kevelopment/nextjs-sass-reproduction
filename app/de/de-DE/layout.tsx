import { PropsWithChildren } from "react";

export default async function HomePageLayout({ children }: PropsWithChildren) {
  return <main className="main-content">{children}</main>;
}
