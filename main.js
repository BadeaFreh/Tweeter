// controller file

const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

$("#post").on("click", function () {
    let postText = $("input").val()
    tweeter.addPost(postText)
    let posts = tweeter.getPosts()
    renderer.renderPosts(posts)
})

$("#posts").on("click", ".delete-button", function () {
    const postID = $(this).closest("div").data().id
    tweeter.removePost(postID)
    let posts = tweeter.getPosts()
    renderer.renderPosts(posts)
})

$("#posts").on("click", ".comment-button", function () {
    // post id, text
    const postID = $(this).closest("div").data().id
    const commentText = $(this).closest("div").find("input").val()
    // console.log(postID, "\n", commentText);
    tweeter.addComment(postID, commentText)
    let posts = tweeter.getPosts()
    renderer.renderPosts(posts)
})

$("#posts").on("click", ".delete-comment", function () {
    // removeComment(postid, commentid)
    const postID = $(this).closest("div").data().id
    const commentID = $(this).closest("li").data().id
    tweeter.removeComment(postID, commentID)
    let posts = tweeter.getPosts()
    renderer.renderPosts(posts)
})
