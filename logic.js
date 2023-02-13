
const Tweeter = function () {

    const _posts = []
    let _postIdCounter = 1
    let _commentIdCounter = 1

    const getPosts = function() {
        return _posts
    }

    const addPost = function (text) {
        _posts.push({
            id: "p" + _postIdCounter++,
            text,
            comments: []
        })
    }

    const removePost = function (postID) {
        _posts.splice(_posts.findIndex(post => post.id === postID) , 1)
    }

    const addComment = function (postID, text) {
        const postIndex = _posts.findIndex(post => post.id === postID)
        _posts[postIndex].comments.push({
            id: "c" + _commentIdCounter++,
            text
        })
    }

    const removeComment = function (postID, commentID) {
        const postIndex = _posts.findIndex(post => post.id === postID)
        const commentIndex = _posts[postIndex].comments.findIndex(comment => comment.id === commentID)
        _posts[postIndex].comments.splice(commentIndex, 1)
    }

    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment,
    }
}
