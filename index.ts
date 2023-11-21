import { ExpressRestApi } from "./applications/restApi";
import { App } from "./applications/share/app";

const app  : App = new ExpressRestApi(8000);
app.run()