import express from "express";
import cors from "cors";
import { expressMiddleware } from '@as-integrations/express5';
import InititApolloserver from "./Graphql/index.js";
import jwtServies from "./services/jwt.js";
const app = express();
app.use(express.json());
const Port = 3003;
app.use(cors({
    origin: "*",
    credentials: true
}));
app.get("/", (req, res) => {
    return res.send("Heath Check is Done! Backend is Work PerFectly");
});
app.use("/graphql", expressMiddleware(await InititApolloserver(), {
    context: async ({ req, res }) => {
        const auth = req.headers.authorization;
        if (typeof auth !== "string" || !auth.startsWith("Bearer ")) {
            return { user: undefined };
        }
        const token = auth.split(" ")[1];
        return {
            user: jwtServies.deocdToken(token)
        };
    }
}));
app.listen(Port, () => {
    console.log(`http://localhost:${Port}`);
});
//# sourceMappingURL=index.js.map