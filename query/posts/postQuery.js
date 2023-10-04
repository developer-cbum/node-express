exports.getPost = 'SELECT post_id, post_title, post_content FROM tbl_post WHERE post_id = ?';
exports.getPosts = `SELECT post_id postId, post_title postTitle, m.member_name memberName, p.create_date createDate FROM tbl_post p inner join tbl_member m on p.member_id = m.member_id LIMIT ?, ?`;
exports.insertPost = 'INSERT INTO tbl_post SET ?';
exports.updatePost ='UPDATE tbl_post SET post_title = ?, post_content = ?, update_date = CURRENT_TIMESTAMP WHERE post_id = ?';
exports.deletePost = 'DELETE FROM tbl_post WHERE post_id = ?';
