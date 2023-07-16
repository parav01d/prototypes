import { FunctionComponent, PropsWithChildren } from "react";

interface NavigationProps extends PropsWithChildren {}

export const Navigation: FunctionComponent<NavigationProps> = ({
  children,
}: NavigationProps) => {
  return (
    <div className="mb-28">
      <div
        className={`w-screen fixed h-20 left-0 top-0 right-0 bg-white border-b border-gray-300 shadow shadow-gray-200`}
      >
        {children}
      </div>
    </div>
  );
};
