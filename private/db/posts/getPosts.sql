SELECT posts.post_id, posts.post_text, posts.post_image, posts.profile_id, profiles.name, profiles.profile_pic, posts.post_time
FROM posts
JOIN profiles ON posts.profile_id = profiles.facebook_id
WHERE posts.profile_id = $1
ORDER BY posts.post_time DESC;
