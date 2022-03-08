// const http = require("http");
const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
})
app.get("/api/products", (req, res) => {
    const data = [
        {id: 1, name: "Product A"},
        {id: 2, name: "Product B"}
    ]
    res.json(data)
})
// const server = http.createServer((req, res) => { 
//     const url = req.url;
//     console.log(url);
//     if(url === "/api/products"){
//         res.setHeader("Content-Type","json");
//         const data = [
//             {id: 1, name: "Product A"},
//             {id: 2, name: "Product B"},
//         ];
//         res.end(JSON.stringify(data)) // du lieu tra ve duoc chuyen thanh chuoi 
//     } else if (url === "/api/posts") {
//         console.log("API Post");
//     } else {
//         res.setHeader("Content-Type", "text/html"); // Xet kieu du lieu 
//         res.write("<html><body><h1>Home Page</h1></body></html>"); // Thong tin duoc tra ve
//         res.end(); // ket thuc du lieu tra ve
//     }
// })

const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server cua ban dang chay cong", PORT);
})