import jwtDecode from "jwt-decode"

const authProvider = {
   login: async ({username, password}) => {
      const request = new Request("https://backend-tickets-pmf.glitch.me/login", {
         method: "POST",
         body: JSON.stringify({username: username, password: password}),
         headers: new Headers({"Content-Type": "application/json"}),
      })
      try {
         const response = await fetch(request)
         if (response.status < 200 || response.status >= 300) {
            throw new Error(response.statusText)
         }
         const auth = (await response.json()) as {token: string; id: number; fullName: string; username: string}
         console.log(jwtDecode(auth.token))
         const decodedToken = jwtDecode(auth.token) as {role: string}
         const role = decodedToken.role
         localStorage.setItem("role", role)
         localStorage.setItem("auth", auth.token)
         localStorage.setItem("identity", JSON.stringify({id: auth.id, fullName: auth.fullName}))
         localStorage.setItem("username", auth.username)
         return Promise.resolve()
      } catch {
         throw new Error("Error en usuario o password")
      }
   },
   logout: () => {
      localStorage.removeItem("auth")
      localStorage.removeItem("identity")
      localStorage.removeItem("role")
      localStorage.removeItem("username")
      return Promise.resolve()
   },
   checkAuth: () => {
      return localStorage.getItem("auth") ? Promise.resolve() : Promise.reject()
   },
   checkError: (error) => {
      const status = error.status
      if (status === 401 || status === 403) {
         localStorage.removeItem("auth")
         localStorage.removeItem("identity")
         return Promise.reject()
      }
      return Promise.resolve()
   },
   getIdentity: () => {
      try {
         return Promise.resolve(JSON.parse(localStorage.getItem("identity") || ""))
      } catch {
         return Promise.reject()
      }
   },
   getPermissions: () => {
      const role = localStorage.getItem("role")
      return role ? Promise.resolve(role) : Promise.reject()
   },
}

export default authProvider
