import { FunctionComponent } from "react";

interface ImageProps {
  url: string;
}

export const Image: FunctionComponent<ImageProps> = ({ url }: ImageProps) => {
  return (
    <div
      className={`w-full bg-center bg-no-repeat bg-cover`}
      style={{ backgroundImage: `url("${url}")` }}
    ></div>
  );
};
