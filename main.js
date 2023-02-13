
const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

const getPostsAndRender = function () {
    let posts = tweeter.getPosts()
    renderer.renderPosts(posts)
}

$("#post").on("click", function () {
    let postText = $("input").val()
    tweeter.addPost(postText)
    getPostsAndRender()
})

$("#posts").on("click", ".delete-button", function () {
    const postID = $(this).closest("div").data().id
    tweeter.removePost(postID)
    getPostsAndRender()
})

$("#posts").on("click", ".comment-button", function () {
    const postID = $(this).closest("div").data().id
    const commentText = $(this).closest("div").find("input").val()
    tweeter.addComment(postID, commentText)
    getPostsAndRender()
})

$("#posts").on("click", ".delete-comment", function () {
    const postID = $(this).closest("div").data().id
    const commentID = $(this).closest("li").data().id
    tweeter.removeComment(postID, commentID)
    getPostsAndRender()
})
