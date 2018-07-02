// carregar .env se não estiver em ambiene de produção
if (process.env.NODE !== "production") require("dotenv-safe").config();
/* --- */

import App from "./App";

App.listen();
