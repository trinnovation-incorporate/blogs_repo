$(document).ready(function() {
    $.getJSON('data.json', function(data) {
        var blogList = $('#blog-list');
        var blogs = data.blogs.slice(0, 10); // Get the top 10 items

        blogs.forEach(function(post , index) {
            var postElement = `
                        <a href="${'detail.html?id=' + post.id}">
                        <div class="post" style="width:200px;float:left;margin:10px;">
                            
                            <div class="post-title">${post.title}</div>
                            
                        </div>
                        </a>
                    `;
                    blogList.append(postElement);
        });
    });
});