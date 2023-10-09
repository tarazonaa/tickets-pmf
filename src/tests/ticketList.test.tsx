import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Admin, Resource } from "react-admin";
import { TicketList } from "../tickets/ticketsList";
import { dataProvider } from "../dataProvider";

describe("TicketList", () => {
  it("should render <TicketList />", async () => {
    await act(async () => {
      render(
        <Admin dataProvider={dataProvider}>
          <Resource name="tickets" list={TicketList} />
        </Admin>,
      );
    });
  });
});
