const Article = require("../models/Article");

module.exports = class ArticleService{
    static async getAllArticles(){
        try {
            const allArticles = await  Article.find();
            return allArticles;
        } catch (error) {
            console.log(`Could not fetch articles ${error}`)
        }
    }

    static async createArticle(data){
        try {

            const newArticle = {
                title: data.title,
                body: data.body,
                article_image: data.article_image
            }
           const response = await new Article(newArticle).save();
           return response;
        } catch (error) {
            console.log(error);
        } 

    }
    static async getArticlebyId(articleId){
        try {
            const singleArticleResponse =  await Article.findById({_id: articleId});
            return singleArticleResponse;
        } catch (error) {
            console.log(`Article not found. ${error}`)
        }
    }

    static async updateArticle(title, body, articleImage){
            try {
                const updateResponse =  await Article.updateOne(
                    {title, body, articleImage}, 
                    {$set: {date: new Date.now()}});

                    return updateResponse;
            } catch (error) {
                console.log(`Could not update Article ${error}` );

        }
    }

    static async deleteArticle(articleId){
        try {
            const deletedResponse = await Article.findOneAndDelete(articleId);
            return deletedResponse;
        } catch (error) {
            console.log(`Could  ot delete article ${error}`);
        }

    }
}