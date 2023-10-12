import {DataProvider} from "react-admin"
import {fetchUtils} from "react-admin"
import {dataProvider} from "../../App/Connection/dataProvider"

describe("dataProvider", () => {
   jest.setTimeout(30000)

   test("getOne", async () => {
      const result = await dataProvider.getOne("tickets", {id: 1})
      expect(result.data).toHaveProperty("id")
      expect(result.data).toHaveProperty("name")
   })

   test("getMany", async () => {
      const result = await dataProvider.getMany("tickets", {ids: [1, 2]})
      expect(Array.isArray(result.data)).toBe(true)
      expect(result.data[0]).toHaveProperty("id")
      expect(result.data[0]).toHaveProperty("name")
   })
})
