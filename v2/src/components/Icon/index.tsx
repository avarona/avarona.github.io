import * as React from "react";

type Props = {
  svg: string;
  alt: string
};

const Icon = ({ svg, alt }: Props) => (
  <img src={svg} alt={alt} />
);

export default Icon;
