const ArticleService = require("../services/ArticleService");

module.exports = class Article{

   static async apiGetAllArticles(req, res, next){
       try {
         const articles = await ArticleService.getAllArticles();
         if(!articles){
            res.status(404).json("There are no article published yet!")
         }
         res.json(articles);
       } catch (error) {
          res.status(500).json({error: error})
       }

   }

   static async apiGetArticleById(req, res, next){
      try {
         let id = req.params.id || {};
         const article = await ArticleService.getArticlebyId(id);
         res.json(article);
      } catch (error) {
         res.status(500).json({error: error})
      }
   }

   static async apiCreateArticle(req, res, next){
      try {
         const createdArticle =  await ArticleService.createArticle(req.body);
         res.json(createdArticle);
      } catch (error) {
         res.status(500).json({error: error});
      }
   }

   static async apiUpdateArticle(req, res, next){
      try {
         const comment = {}
         comment.title        = req.body.title;
         comment.body         = req.body.body;
         comment.articleImage = req.body.article_image

         const updatedArticle = await ArticleService.updateArticle(comment);

         if(updatedArticle.modifiedCount === 0){
            throw new Error("Unable to update article, error occord");
         }

         res.json(updatedArticle);

      } catch (error) {
         res.status(500).json({error: error});
      }
   }

   static async apiDeleteArticle(req, res, next){
         try {
            const articleId = req.params.id;
            const deleteResponse =  await ArticleService.deleteArticle(articleId)
            res.json(deleteResponse);
         } catch (error) {
            res.status(500).json({error: error})
         }
   }

}