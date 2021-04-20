import express from "express";
const router = express.Router();
/* GET home page. */
router.get("/", function (req, res, next) {
  const assets = req.app.locals;
  const locals = (assets["login"]?.js || []).map(
    (item) => `<script src=http://127.0.0.1:8889/statics/${item.name}></script>`
  );
  res.render("index", { locals: locals });
});

export default router;
