import React from "react";
import styled from "styled-components";
import withDataFetching from "../withDataFetching";
import Ticket from "../components/Ticket/Ticket";

const TicketsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-direction: row;
  margin: 5% auto;
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

const Alert = styled.div`
  text-align: center;
`;

function Tickets({ loading, data, error }) {
  return (
    <TicketsWrapper>
      {(loading || error) && <Alert>{loading ? "Loading.." : error}</Alert>}
      {data.map((ticket) => (
        <Ticket key={ticket.id} marginRight noLane ticket={ticket} />
      ))}
    </TicketsWrapper>
  );
}

export default withDataFetching(Tickets);
