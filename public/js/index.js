const postBtn = document.getElementsByClassName('post-btn');
console.log('연동');
console.log(postBtn);

$.ajax({
  url: '/api/post',
  method: 'GET',
  data: { offset: 0, limit: 2 },
  dataType: 'json',
  success: function (result) {
    console.log(result);
  },
  error: function () {},
});

postBtn[0].addEventListener('click', () => {
  location.href = '/write';
});
