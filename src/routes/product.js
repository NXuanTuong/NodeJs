import { Router } from "express";
const router = Router();

const checkAuth = (req, res, next) => {
    const isAdmin = true;
    if(isAdmin) {
        next();
    }
    else {
        console.log("Ok");
    }
}

router.get("/products", (req, res) => {
    const data = [
        {id: 1, name: "Product A"},
        {id: 2, name: "Product B"},
        {id: 3, name: "Product C"},
    ]
    res.json(data);
})

export default router;