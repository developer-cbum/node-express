const pool = require('../../database/pool');
const MemberQuery = require('../../query/members/memberQuery.js');

exports.getMember = async (memberId) => {
  try {
    let data = await pool.query(MemberQuery.getMember, [memberId]);
    return data[0];
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
};

exports.insertMember = async (member) => {
  try {
    let result = await pool.query(MemberQuery.insertMember, member);
    return result.insertId;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
};
