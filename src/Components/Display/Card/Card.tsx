import React, { FunctionComponent, PropsWithChildren } from "react";

interface CardComponents {
  HorizontalLayout: FunctionComponent<CardProps> & CardLayoutComponents;
  VerticalLayout: FunctionComponent<CardProps> & CardLayoutComponents;
}

interface CardProps extends PropsWithChildren {
  children: React.ReactNode;
}

export const Card: FunctionComponent<CardProps> & CardComponents = ({
  children,
}: CardProps) => {
  return (
    <div className="w-full bg-primary border border-gray-200 rounded-lg shadow shadow-gray-700 overflow-hidden">
      {children}
    </div>
  );
};

interface CardLayoutComponents {
  ImageWrapper: FunctionComponent<PropsWithChildren>;
  ContentWrapper: FunctionComponent<PropsWithChildren>;
}

const HorizontalLayout: FunctionComponent<PropsWithChildren> &
  CardLayoutComponents = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-row h-full">{children}</div>;
};

const VerticalLayout: FunctionComponent<PropsWithChildren> &
  CardLayoutComponents = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col h-full justify-between">{children}</div>;
};

const ImageWrapper: FunctionComponent<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  return <div className="flex basis-1/3 min-h-[10rem] h-full">{children}</div>;
};

const ContentWrapper: FunctionComponent<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  return <div className="flex flex-col basis-2/3 p-3 h-full">{children}</div>;
};

HorizontalLayout.ImageWrapper = ImageWrapper;
HorizontalLayout.ContentWrapper = ContentWrapper;

VerticalLayout.ImageWrapper = ImageWrapper;
VerticalLayout.ContentWrapper = ContentWrapper;

Card.HorizontalLayout = HorizontalLayout;
Card.VerticalLayout = VerticalLayout;
