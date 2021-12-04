import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 75px;
  margin-top: 125px;
  color: #171717;

  @media (max-width: 440px) {
    font-size: 48px;
    margin-top: 50px;
  }
`;

export default function Header() {
  return <Title>Management Board</Title>;
}
