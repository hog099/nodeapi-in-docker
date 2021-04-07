import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
    return res.json({ status: 'Serviço Ativo e Operacional' });
    // return res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

routes.get("/home", (req, res) => {
    return res.json({ status: 'This is home!' });
});

routes.get("/profile", (req, res) => {
    return res.json({ status: 'This is profile!' });
});


export default routes;