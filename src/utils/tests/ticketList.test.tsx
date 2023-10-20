import React from "react"
import {render, screen, act} from "@testing-library/react"
import "@testing-library/jest-dom"
import {Admin, Resource} from "react-admin"
import {TicketList} from "../../App/pages/tickets_list/ticketsList"
import {ClassroomList} from "../../App/pages/classrooms_list/classroomsList"
import {dataProvider} from "../../App/Connection/dataProvider"

describe("TicketList", () => {
   it("should render <TicketList />", async () => {
      await act(async () => {
         render(
            <Admin dataProvider={dataProvider}>
               <Resource name="tickets" list={TicketList} />
            </Admin>,
         )
      })
   })
})

describe("ClassroomsList", () => {
   it("should render <ClassroomsList />", async () => {
      await act(async () => {
         render(
            <Admin dataProvider={dataProvider}>
               <Resource name="classrooms" list={ClassroomList} />
            </Admin>,
         )
      })
   })
})
