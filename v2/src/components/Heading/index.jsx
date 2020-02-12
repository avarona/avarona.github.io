import React from "react";
import { Heading as GrommetHeading } from "grommet";

const Heading = ({ children }) => (
  <GrommetHeading margin='48px 0'>{children}</GrommetHeading>
);

export default Heading;
