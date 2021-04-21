// This file is for spacer components for the styles which will not affect any styles margin padding
//This will create space between components

import React from "react";
import styled, { useTheme } from "styled-components/native";

// how much according to the theme object
const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

// the type of margin
const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};
const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  return `${property}:${value}`;
};

// rendering a view
const SpacerView = styled.View`
  ${({ variant }) => variant};
`;

// passing a prop to spacer function
export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};
// the default values if no props is passed
Spacer.defaultProps = {
  position: "top",
  size: "small",
};
