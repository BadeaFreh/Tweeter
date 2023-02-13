
const Tweeter = function () {

    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    let postIdCounter = 1
    let commentIdCounter = 1

    const getPosts = function() {
        return _posts
    }

    const addPost = function (text) {
        _posts.push({
            id: "p" + postIdCounter++,
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
            id: "c" + commentIdCounter++,
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
