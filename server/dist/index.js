import express from "express";
import { expressMiddleware } from '@as-integrations/express5';
import InititApolloserver from "./Graphql/index.js";
const app = express();
app.use(express.json());
const Port = 3000;
app.get("/", (req, res) => {
    return res.send("Heath Check is Done! Backend is Work PerFectly");
});
app.use("/graphql", expressMiddleware(await InititApolloserver()));
app.listen(Port, () => {
    console.log(`http://localhost:${Port}`);
});
//# sourceMappingURL=index.js.map