import React, { FunctionComponent, PropsWithChildren } from "react";

interface ColumnLayoutComponents {
  Wrapper: FunctionComponent<IWrapperProps>;
}

interface ColumnLayoutProps extends PropsWithChildren {
  children: React.ReactNode;
}

export const ColumnLayout: FunctionComponent<ColumnLayoutProps> &
  ColumnLayoutComponents = ({ children }: ColumnLayoutProps) => {
  return (
    <div className="flex flex-row justify-center flex-wrap gap-3">
      {children}
    </div>
  );
};

interface IWrapperProps extends PropsWithChildren {
  children: React.ReactNode;
}

const Wrapper: FunctionComponent<IWrapperProps> = ({
  children,
}: IWrapperProps) => {
  return (
    <div className="flex justify-center basis-full md:basis-[49%] lg:basis-[32%]">
      {children}
    </div>
  );
};

ColumnLayout.Wrapper = Wrapper;
