import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"
const isCodeSandbox = "SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env
import fs from "fs"

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   define: {
      "process.env": process.env,
   },
   server: {
      host: true,
      https: {
         key: fs.readFileSync("certificateFront.txt"),
         cert: fs.readFileSync("front.crt"),
         ca: fs.readFileSync("rootFront.pem"),
      },
   },
   base: "./",
})
