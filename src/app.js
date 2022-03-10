// const http = require("http");
import express from "express";
import cors from "cors";
import productRouter from "./routes/product";
import morgan from "morgan";
const app = express();
//middleware
app.use(cors());
app.use(morgan('tiny'))

//routes
app.use("/api", productRouter);

const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server cua ban dang chay cong", PORT);
})


// next: cho phep chay buoc tiep theo