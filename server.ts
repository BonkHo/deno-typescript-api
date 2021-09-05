import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { getBands, addBand } from "./controllers/bands.ts";

const app = new Application();
const PORT = 5000;
const router = new Router();

router.get("/bands", getBands).post("/bands", addBand);

app.use(router.routes());

console.log(`Server Running on Port: ${PORT}`);

await app.listen({ port: PORT });
