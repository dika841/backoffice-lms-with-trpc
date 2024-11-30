import { FC } from "react";
import { TPageLayout } from "./type";

const PageLayout: FC<TPageLayout> = ({
  children,
  pageTitle,
  pageDescription,
}) => {
  return (
    <section className="w-full border border-gray-200 min-h-60 rounded-lg p-4 space-y-2">
      <div className="space-y-2 tracking-wide">
        <h1 className="text-2xl font-bold text-gray-800">{pageTitle}</h1>
        <small className="text-gray-400">{pageDescription}</small>
      </div>
      {children}
    </section>
  );
};
export default PageLayout;
