import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  padding: 0 2rem 0 2rem;
`;

export const Container = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return <ContainerWrapper className={className}>{children}</ContainerWrapper>;
};
