import React from "react";
import styled from "styled-components";
import Ticket from "../Ticket/Ticket";

const LaneWrapper = styled.div`
  list-style: none;
  text-align: left;
  padding: 0;
  background: rgba(0, 0, 0, 0.28);
  box-shadow: inset 35.5px -35.5px 35.5px rgba(149, 149, 149, 0.078),
    inset -35.5px 35.5px 35.5px rgba(255, 255, 255, 0.078);
  backdrop-filter: blur(90.17px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 21px;
  border-radius: 20px;
  min-height: 50vh;
  width: 290px;
`;

const Title = styled.h2`
  width: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  color: #ffffff;
  text-align: center;
`;

const TicketsWrapper = styled.div`
  padding: 26px;
`;

const Alert = styled.div`
  text-align: center;
`;

export default function Lane({
  laneId,
  tickets,
  loading,
  error,
  onDragStart,
  onDragOver,
  onDrop,
  title,
}) {
  return (
    <LaneWrapper onDragOver={onDragOver} onDrop={(e) => onDrop(e, laneId)}>
      <Title>{title}</Title>
      {(loading || error) && <Alert>{loading ? "Loading..." : error}</Alert>}
      <TicketsWrapper>
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} onDragStart={onDragStart} ticket={ticket} />
        ))}
      </TicketsWrapper>
    </LaneWrapper>
  );
}
