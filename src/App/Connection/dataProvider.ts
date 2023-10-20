import {DataProvider, fetchUtils} from "react-admin"
import {stringify} from "query-string"

const LOCAL = "http://localhost:8080"
const GLITCH = "https://backend-tickets-pmf.glitch.me"
const apiUrl = LOCAL

const httpClient = async (url: string, options: any = {}) => {
   if (!options.headers) {
      options.headers = new Headers({Accept: "application/json"})
   }
   const auth =
      localStorage.getItem("auth") ||
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkJCVCIsInJvbGUiOiJFamVjdXRpdm8iLCJpYXQiOjE2OTc4MzczMTgsImV4cCI6MTY5Nzg0MDkxOH0.2Fg4vtOFeuDhe5eOHcrV93-rlGCWx1OuPEAtaMeZb0U"
   options.headers.set("Authorization", "Bearer " + auth)
   const response = await fetchUtils.fetchJson(url, options).catch(() => {})

   if (response && response.status === 401) {
      console.error("Unauthorized access - perhaps restricted for this user role")
      // handle it - perhaps redirect or show a message
      return response // or handle it differently depending on your requirements
   }
   return fetchUtils.fetchJson(url, options)
}

export const dataProvider: DataProvider = {
   getList: async (resource, params) => {
      const {page, perPage} = params.pagination
      const {field, order} = params.sort
      const query = {
         sort: JSON.stringify([field, order]),
         range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
         filter: JSON.stringify(params.filter),
         q: params.filter.q,
      }
      const url = `${apiUrl}/${resource}?${stringify(query)}`
      const {json} = await httpClient(url)
      return {
         data: json,
         total: json.length,
      }
   },

   getOne: (resource, params) =>
      httpClient(`${apiUrl}/${resource}/${params.id}`).then(({json}) => ({
         data: json,
      })),

   getMany: async (resource, params) => {
      const query = {
         filter: JSON.stringify({id: params.ids}),
      }
      const url = `${apiUrl}/${resource}`
      const {json} = await httpClient(url)
      console.log(json)
      return {data: json.data}
   },

   getManyReference: async (resource, params) => {
      const {page, perPage} = params.pagination
      const {field, order} = params.sort
      const query = {
         sort: JSON.stringify([field, order]),
         range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
         filter: JSON.stringify({
            ...params.filter,
            [params.target]: params.id,
         }),
      }
      const url = `${apiUrl}/${resource}?${stringify(query)}`

      const {headers, json} = await httpClient(url)
      return {
         data: json.data,
         total: parseInt((headers.get("content-range") || "0").split("/").pop() || "0", 10),
      }
   },

   update: (resource, params) =>
      httpClient(`${apiUrl}/${resource}/${params.id}`, {
         method: "PUT",
         body: JSON.stringify(params.data),
      }).then(({json}) => ({data: json.data})),

   updateMany: async (resource, params) => {
      const query = {
         filter: JSON.stringify({id: params.ids}),
      }
      const {json} = await httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
         method: "PUT",
         body: JSON.stringify(params.data),
      })
      return {data: json.data}
   },

   create: (resource, params) =>
      httpClient(`${apiUrl}/${resource}`, {
         method: "POST",
         body: JSON.stringify(params.data),
      }).then(({json}) => {
         return {
            data: {
               ...json,
               id: json.id,
            },
         }
      }),

   delete: (resource, params) =>
      httpClient(`${apiUrl}/${resource}/${params.id}`, {
         method: "DELETE",
      }).then(({json}) => ({data: json.data})),

   deleteMany: async (resource, params) => {
      if (!params.ids || params.ids.length === 0) {
         return {data: []}
      }

      const query = {
         id: JSON.stringify(params.ids),
      }

      const {json} = await httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
         method: "DELETE",
      })
      return {data: json.data}
   },
}
