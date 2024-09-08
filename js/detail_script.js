$(document).ready(function() {
    // Function to get query parameters from the URL
    function getQueryParam(param) {
        var urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Get the blog ID from the URL
    var blogId = getQueryParam('id');

    if (blogId) {
        $.getJSON('data.json', function(data) {
            var blog = data.blogs.find(blog => blog.id == blogId);

            if (blog) {
                // Set the blog title
                $('#blog-title').text(blog.title);

                // Load and display the blog content
                $.get(`html/${blog.file}`, function(htmlContent) {
                    $('#blog-content').html(htmlContent);
                }).fail(function() {
                    $('#blog-content').html('<p>Error loading content.</p>');
                });
            } else {
                $('#blog-title').text('Blog not found');
                $('#blog-content').html('<p>The requested blog does not exist.</p>');
            }
        }).fail(function(jqXHR, textStatus, errorThrown) {
            console.error("Error loading JSON data: ", textStatus, errorThrown);
            $('#blog-title').text('Error');
            $('#blog-content').html('<p>Error loading blog details.</p>');
        });
    } else {
        $('#blog-title').text('No Blog ID Provided');
        $('#blog-content').html('<p>No blog ID was provided in the URL.</p>');
    }
});
