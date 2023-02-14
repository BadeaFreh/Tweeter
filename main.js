
const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

$("#post").on("click", function () {
    let postText = $("input").val()
    tweeter.addPost(postText)
    renderer.renderPosts(tweeter.getPosts())
    $("#input").val("")
})

$("#posts").on("click", ".delete-button", function () {
    const postID = $(this).closest("div").data().id
    tweeter.removePost(postID)
    renderer.renderPosts(tweeter.getPosts())

})

$("#posts").on("click", ".comment-button", function () {
    const postID = $(this).closest("div").data().id
    const commentText = $(this).closest("div").find("input").val()
    tweeter.addComment(postID, commentText)
    renderer.renderPosts(tweeter.getPosts())
})

$("#posts").on("click", ".delete-comment", function () {
    const postID = $(this).closest("div").data().id
    const commentID = $(this).closest("li").data().id
    tweeter.removeComment(postID, commentID)
    renderer.renderPosts(tweeter.getPosts())
})
