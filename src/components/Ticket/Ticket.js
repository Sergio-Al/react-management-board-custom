import React from "react";
import styled from "styled-components";

const TicketWrapper = styled.div`
  background: linear-gradient(308.71deg, #ffec3e 25.34%, #fff59f 91.16%);
  width: ${(props) => (!!props.noLane ? "238px" : "auto")};
  padding: 1px 20px 20px 20px;

  &:not(:last-child) {
    margin-bottom: 5%;
    margin-right: ${(props) => (!!props.marginRight ? "1%" : 0)};
  }

  @media (max-width: 1200px) {
    &:nth-child(n + 3) {
      order: 2;
    }
  }
`;

const Title = styled.h3`
  font-family: Caveat;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  margin-top: 16px;
  text-align: center;
`;

const Body = styled.p`
  width: 100%;
  margin: 0;
  font-family: Indie Flower;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
`;

export default function Ticket({ marginRight, onDragStart, ticket, noLane }) {
  return (
    <TicketWrapper
      draggable
      onDragStart={(e) => onDragStart && onDragStart(e, ticket.id)}
      marginRight={marginRight}
      noLane={noLane}
    >
      <Title>{ticket.title}</Title>
      <Body>{ticket.body}</Body>
    </TicketWrapper>
  );
}
