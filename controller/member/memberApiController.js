const MemberService = require('../../service/members/memberService');

exports.getMember = async (req, res, next) => {
  let { memberId } = req.params;
  try {
    let rows = await MemberService.getMember(memberId);
    return res.json(rows[0]);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.loginMember = async (req, res, next) => {
  let { memberEmail,memberPassword } = req.body;
  try {
    let rows = await MemberService.loginMember(memberEmail,memberPassword);
    console.log("여기")
    console.log(rows)
    req.session.memberId =rows[0].memberId;
    return res.json(rows[0]);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.checkMember = async (req, res, next) => {
  let { memberEmail } = req.body;
  try {
    let rows = await MemberService.checkMember(memberEmail);
    return res.json(rows[0]);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.createMember = async (req, res, next) => {
  let member = req.body;
  try {
    let memberId = await MemberService.insertMember(member);
    return res.json({ member });
  } catch (err) {
    return res.status(500).json(err);
  }
};
