import React, { FunctionComponent, PropsWithChildren } from "react";
import { ColumnLayout } from "./Layout";

interface ContentComponents {
  ColumnLayout: typeof ColumnLayout;
}

interface ContentProps extends PropsWithChildren {
  children: React.ReactNode;
}

export const Content: FunctionComponent<ContentProps> & ContentComponents = ({
  children,
}: ContentProps) => {
  return (
    <div className="flex flex-row justify-center">
      <div className="max-w-7xl bg-white px-6 py-3">{children}</div>
    </div>
  );
};

Content.ColumnLayout = ColumnLayout;
