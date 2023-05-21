const blogContainer = document.getElementById('blogContainer');

// Fetch blog data from the API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        //         // Display each blog post in the UI
        //         posts.forEach(post => {
        //             const blogElement = document.createElement('div');
        //             blogElement.innerHTML = `
        //         <h2>${post.title}</h2>
        //         <p>${post.body}</p>
        //         <button onclick="deleteBlog(${post.id})">Delete</button>
        //       `;
        //             blogContainer.appendChild(blogElement);
        //         });
        //     })
        //     .catch(error => console.log(error));
        // // Delete a blog post
        // function deleteBlog(postId) {
        //     // Send a DELETE request to the API to delete the blog post
        //     fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        //       method: 'DELETE'
        //     })
        //       .then(response => {
        //         if (response.ok) {
        //           // Remove the blog post from the UI
        //           const blogElement = document.querySelector(`div[data-post-id="${postId}"]`);
        //           blogElement.remove();
        //         } else {
        //           console.log('Failed to delete blog post.');
        //         }
        //       })
        //       .catch(error => console.log(error));
        //   }

        // Display each blog post in the UI
        posts.forEach(post => {
            const blogElement = document.createElement('div');
            blogElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <button class="deleteButton">Delete</button>
    `;
            blogContainer.appendChild(blogElement);

            // Add event listener to delete button
            const deleteButton = blogElement.querySelector('.deleteButton');
            deleteButton.addEventListener('click', () => deleteBlog(post.id));
        });
    })
    .catch(error => console.log(error));

// Delete a blog post
function deleteBlog(postId) {
    // Send a DELETE request to the API to delete the blog post
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                // Remove the blog post from the UI
                const blogElements = document.querySelectorAll(`div[data-post-id="${postId}"]`);
                blogElements.forEach(element => element.remove());
            } else {
                console.log('Failed to delete blog post.');
            }
        })
        .catch(error => console.log(error));
}