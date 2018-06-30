import App from "./App";

const port:string = process.env.PORT || "3000";

App.express.listen(port);
console.log("server listening");
