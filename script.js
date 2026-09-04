// ================= LIKE BUTTON =================

const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        button.classList.toggle("liked");

        const icon = button.querySelector("i");

        if (button.classList.contains("liked")) {

            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");

            button.innerHTML =
                '<i class="fa-solid fa-thumbs-up"></i> Liked';

        } else {

            button.innerHTML =
                '<i class="fa-regular fa-thumbs-up"></i> Like';

        }

    });

});


// ================= CREATE POST =================

const postInput = document.getElementById("postInput");

postInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {

        const text = postInput.value.trim();

        if (text === "") {
            return;
        }

        createNewPost(text);

        postInput.value = "";

    }

});


function createNewPost(text) {

    const feed = document.querySelector(".feed");

    const post = document.createElement("div");

    post.classList.add("post");

    post.innerHTML = `

        <div class="post-header">

            <img src="images/profile.jpg">

            <div>

                <h3>Rajnandini Patil</h3>

                <p>
                    Just now ·
                    <i class="fa-solid fa-earth-americas"></i>
                </p>

            </div>

            <i class="fa-solid fa-ellipsis post-menu"></i>

        </div>


        <div class="post-content">

            <p>${text}</p>

        </div>


        <div class="post-stats">

            <span>
                <i class="fa-solid fa-thumbs-up"></i>
                0
            </span>

            <span>0 comments</span>

        </div>


        <hr>


        <div class="post-actions">

            <button class="like-btn">

                <i class="fa-regular fa-thumbs-up"></i>
                Like

            </button>

            <button>

                <i class="fa-regular fa-comment"></i>
                Comment

            </button>

            <button>

                <i class="fa-solid fa-share"></i>
                Share

            </button>

        </div>


        <div class="comment-box">

            <img src="images/profile.jpg">

            <input
                type="text"
                placeholder="Write a comment..."
            >

        </div>

    `;


    const createPost = document.querySelector(".create-post");

    feed.insertBefore(post, createPost.nextSibling);


    // Add like functionality to newly created post

    const newLikeButton = post.querySelector(".like-btn");

    newLikeButton.addEventListener("click", function() {

        newLikeButton.classList.toggle("liked");

        if (newLikeButton.classList.contains("liked")) {

            newLikeButton.innerHTML =
                '<i class="fa-solid fa-thumbs-up"></i> Liked';

        } else {

            newLikeButton.innerHTML =
                '<i class="fa-regular fa-thumbs-up"></i> Like';

        }

    });

}


// ================= NAVIGATION ICON =================

const navIcons = document.querySelectorAll(".nav-icon");

navIcons.forEach(function(icon) {

    icon.addEventListener("click", function() {

        navIcons.forEach(function(item) {
            item.classList.remove("active");
        });

        icon.classList.add("active");

    });

});


// ================= SEARCH =================

const searchInput =
    document.querySelector(".search-box input");

searchInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {

        const searchValue =
            searchInput.value.trim();

        if (searchValue !== "") {

            alert("Searching for: " + searchValue);

        }

    }

});