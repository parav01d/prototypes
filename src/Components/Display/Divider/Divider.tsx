import { FunctionComponent, PropsWithChildren } from "react";

export const Divider: FunctionComponent<PropsWithChildren> = () => {
  return (
    <div className={`w-full h-48 flex flex-row justify-center items-center`}>
      <div className="w-full h-1 bg-gray-100 px-6 rounded-full"></div>
    </div>
  );
};
