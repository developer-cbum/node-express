exports.getMember =
  'SELECT member_id, member_email, member_name, member_password FROM tbl_member WHERE member_id = ?';
exports.checkMember = 'SELECT count(member_id) count FROM tbl_member WHERE member_email = ?';
exports.insertMember = 'INSERT INTO tbl_member SET ?';
