import React, { FunctionComponent, PropsWithChildren } from 'react';

interface TitleProps extends PropsWithChildren {
  children: React.ReactNode;
}

export const Title: FunctionComponent<TitleProps> =({children} : TitleProps) => {
  return (
    <p className="text-lg text-gray-600">
      { children }
    </p>
  );
}
