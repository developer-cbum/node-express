exports.getPost = 'SELECT post_id, post_title, post_content FROM tbl_post WHERE post_id = ?';
exports.getPosts = `SELECT post_id, post_title FROM tbl_post LIMIT ?, ?`;
exports.insertPost = 'INSERT INTO tbl_post SET ?';
exports.updatePost ='UPDATE tbl_post SET post_title = ?, post_content = ?, update_date = CURRENT_TIMESTAMP WHERE post_id = ?';
exports.deletePost = 'DELETE FROM tbl_post WHERE post_id = ?';
