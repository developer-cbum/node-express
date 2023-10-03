
exports.goToList = function (req, res, next) {
  if(req.session.memberId === undefined){
    res.render('members/login', { title: 'login' });
  }else{
    res.render('index', { title: 'main' });
  }
};