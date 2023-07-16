import React, { FunctionComponent, PropsWithChildren } from 'react';

interface ParagraphProps extends PropsWithChildren {
  children: React.ReactNode;
}

export const Paragraph: FunctionComponent<ParagraphProps> =({children} : ParagraphProps) => {
  return (
    <p className="text-gray-600">
      { children }
    </p>
  );
}
