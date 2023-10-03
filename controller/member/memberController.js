exports.goToJoinForm = function (req, res, next) {
  if(req.session.memberId !== undefined){
    res.render('index', { title: 'main' });
  }else{
    res.render('members/join', { title: 'join' });
  }
};

exports.goToLoginForm = function (req, res, next) {
  if(req.session.memberId !== undefined){
    res.render('index', { title: 'main' });
  }else{
    res.render('members/login', { title: 'login' });
  }
};
