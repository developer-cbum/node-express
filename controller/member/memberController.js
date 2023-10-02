exports.goToJoinForm = function (req, res, next) {
  res.render('members/join', { title: 'join' });
};

exports.goToLoginForm = function (req, res, next) {
  res.render('members/login', { title: 'login' });
};
