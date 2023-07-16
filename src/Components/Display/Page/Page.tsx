import React, { FunctionComponent, PropsWithChildren } from "react";

interface PageProps extends PropsWithChildren {
  children: React.ReactNode;
}

export const Page: FunctionComponent<PageProps> = ({ children }: PageProps) => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      {children}
    </div>
  );
};
