const  express =  require("express");
const router = express.Router();
const ArticleCtrl = require("../controllers/article.controller");


router.get("/", ArticleCtrl.apiGetAllArticles);
router.post("/", ArticleCtrl.apiCreateArticle);
router.get("/article/:id", ArticleCtrl.apiGetArticleById);
router.put("/article/:id", ArticleCtrl.apiUpdateArticle);
router.delete("/article/:id", ArticleCtrl.apiDeleteArticle);

module.exports =  router;