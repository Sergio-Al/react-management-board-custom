import React, { useState, useEffect } from "react";
import styled from "styled-components";
import withDataFetching from "../withDataFetching";
import Lane from "../components/Lane/Lane";

const BoardWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1241px;  

  @media (max-width: 1200px) {
    &:before {
      content: "";
      width: 100%;
      order: 1;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

function Board({ data = [], lanes, loading, error }) {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    setTickets(data);
  }, [data]);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, laneId) => {
    const id = e.dataTransfer.getData("id");
    const ticketsData = tickets.filter((ticket) => {
      if (ticket.id === parseInt(id)) {
        ticket.lane = laneId;
      }
      return ticket;
    });

    setTickets(ticketsData);
  };

  return (
    <BoardWrapper>
      {lanes.map((lane) => (
        <Lane
          key={lane.id}
          laneId={lane.id}
          title={lane.title}
          loading={loading}
          error={error}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          tickets={tickets.filter((ticket) => ticket.lane === lane.id)}
        />
      ))}
    </BoardWrapper>
  );
}

export default withDataFetching(Board);
