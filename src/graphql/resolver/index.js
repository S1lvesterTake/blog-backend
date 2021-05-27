/* eslint-disable object-curly-newline */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-useless-catch */
const Article = require('../model/article');
const Comment = require('../model/comment');

module.exports = {
  articles: async () => {
    try {
      const articlesFetched = await Article.find();
      return articlesFetched.map((article) => ({
        ...article._doc,
        _id: article.id,
        createdAt: new Date(article._doc.createdAt).toISOString(),
        updatedAt: new Date(article._doc.updatedAt).toISOString(),
      }));
    } catch (error) {
      throw error;
    }
  },

  createArticle: async (args) => {
    try {
      const { title, body, author } = args.article;
      const article = new Article({
        title,
        body,
        author,
      });
      const newArticle = await article.save();
      return { ...newArticle._doc, _id: newArticle.id };
    } catch (error) {
      throw error;
    }
  },
  updateArticle: async (args) => {
    try {
      const { _id } = args.article;
      await Article.findByIdAndUpdate(_id, args.article);
      return { ...args.article };
    } catch (error) {
      throw error;
    }
  },
  deleteArticle: async (args) => {
    try {
      const { _id } = args.article;
      await Article.findByIdAndRemove(_id);
      return { _id };
    } catch (error) {
      throw error;
    }
  },

  comments: async () => {
    try {
      const commentsFetched = await Comment.find();
      return commentsFetched.map((comment) => ({
        ...comment._doc,
        _id: comment.id,
        createdAt: new Date(comment._doc.createdAt).toISOString(),
        updatedAt: new Date(comment._doc.updatedAt).toISOString(),
      }));
    } catch (error) {
      throw error;
    }
  },
  createComment: async (args) => {
    try {
      const { title, body, _def, author } = args.comment;
      const comment = new Comment({
        title,
        body,
        _def,
        author,
      });
      const newComment = await comment.save();
      return { ...newComment._doc, _id: newComment.id };
    } catch (error) {
      throw error;
    }
  },
  updateComment: async (args) => {
    try {
      const { _id } = args.comment;
      await Comment.findByIdAndUpdate(_id, args.comment);
      return { ...args.comment };
    } catch (error) {
      throw error;
    }
  },

  deleteComment: async (args) => {
    try {
      const { _id } = args.comment;
      await Article.findByIdAndRemove(_id);
      return { _id };
    } catch (error) {
      throw error;
    }
  },
};
