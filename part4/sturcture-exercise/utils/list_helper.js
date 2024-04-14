const _ = require("lodash")
const dummy = (blogs) => {
    return 1
}

const totalLikes = (blog) => {
    return blog.likes
}

const favoriteBlog = (blogs) => {
    return _.maxBy(blogs, "likes")
}

const mostBlogs = (blogs) => {
    const authorCounts = _.countBy(blogs, "author")
    const authorWithMostBlogs = _.maxBy(Object.keys(authorCounts), (key) => authorCounts[key])
    return {
        "author": authorWithMostBlogs,
        "blogs": authorCounts[authorWithMostBlogs]
    }
}

const mostLikes = (blogs) => {
    let mostLikedAuthor = _.chain(blogs)
        .groupBy('author')
        .mapValues(blogs => _.sumBy(blogs, 'likes'))
        .toPairs()
        .maxBy(([author, likes]) => likes)
        .value();
    return {
        "author": mostLikedAuthor[0],
        "likes": mostLikedAuthor[1]
    }
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}