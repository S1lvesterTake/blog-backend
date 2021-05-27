const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Article {
        _id: ID!
        title:String!
        body: String!
        author: String!
        comments: [Comment!]
        createdAt: String!
        updatedAt: String!
    }
    
    input ArticleInput {
        title: String!
        body: String!
        author: String!
    }
    
    input UpdateArticleInput {
        _id : ID!
        title: String!
        body: String!
        author: String!
    }
    
    input DeleteArticleInput{
        _id :ID!
    }
    
    type Comment {
        _id: ID!
        _def: String!
        body: String!
        author: String!
        createdAt: String!
        updatedAt: String!
    }
    
    input CommentInput {
        body: String!
        author: String!
        _def: String!
    }
    
    input UpdateCommentInput {
        _id : ID!
        body: String!
        author: String!
    }
    
    input DeleteCommentInput{
        _id :ID!
    }
    
    type Query {
        articles:[Article!]
        comments:[Comment!]
    }
    
    type Mutation {
        createArticle(article:ArticleInput): Article
        updateArticle(article:UpdateArticleInput): Article
        deleteArticle(article:DeleteArticleInput): Article
        createComment(comment:CommentInput): Comment
        updateComment(comment:UpdateCommentInput): Article
        deleteComment(comment:DeleteCommentInput): Article
    }
    
    schema {
        query: Query
        mutation: Mutation
    }
`);
