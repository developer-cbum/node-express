const express = require('express');
const router = express.Router();
const MemberController = require('../controller/member/memberController');
const MemberApiController = require('../controller/member/memberApiController');

router.get('/login', MemberController.goToLoginForm);
router.get('/join', MemberController.goToJoinForm);

/* api */
router.get('/api/member/:memberId', MemberApiController.getMember);
router.post('/api/member', MemberApiController.createMember);

module.exports = router;