{/* <button type="button" class="btn btn-primary">Primary</button> */}

const Renderer = function () {

    const createCommentsElement = function (comments, postID) {
        let commentsList = $(`<ul class="${postID}-comments"></ul>`)
        for (let comment of comments) {
            commentsList.append(`<li data-id=${comment.id}>
                                    <button class="delete-comment">X</button>${comment.text}
                                </li>`)
        }
        return commentsList
    }

    const renderPosts = function (posts) {
        $("#posts").empty()
        for (let post of posts) {
            $("#posts").append(`<div class="post" data-id=${post.id}><p>${post.text}</p></div>`)
            $(`[data-id="${post.id}"]`).append(`
                                                
                                                <input type="text" placeholder="add comment"/>
                                                <button class="comment-button btn btn-primary btn-sm">Comment</button>
                                                `)
            let commentsElement = createCommentsElement(post.comments, post.id)
            $(`[data-id="${post.id}"]`).append(commentsElement)
            $(`[data-id="${post.id}"]`).append(`<button class="delete-button btn btn-danger btn-sm">Delete</button>`)
        }
    }

    return {
        renderPosts
    }
}
