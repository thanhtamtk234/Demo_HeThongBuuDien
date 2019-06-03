var express = require('express');
var router = express.Router();
const db = require('../config/database');
const User = require('../models/user');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });

});
router.get('/admin/user', (req, res) =>
  User.findAll()

    .then(result => {

      res.render('admin/user', { result });
    })
    .catch(err => console.log(err))
);

router.get('/admin/home', (req, res) => {
  res.render('admin/home')
});


//===== login page
router.get('/login', (req, res) => {
  res.render('layouts/login');
});

router.post('/login', (req, res) => {
  var username = req.body.username;
  var pw = req.body.password;

  if (username == 'admin' && pw == '12345') {
    // req.flash('loginMessage','dkfksd')

    res.redirect('admin');
  }
  else {
    User.findOne({
      where: {
        username: username,
        password: pw
      },
      attributes: ['role']
    })
      .then(result => {
        var rs = result.role;
        if (rs === 0) {
          res.redirect('/admin')
        }
        else if (rs === 1) {
          res.redirect('/nhanvien')
        }
      })
      .catch(err => res.send('vghf'))
  }
})
router.get('/admin', (req, res) => {
  res.render('admin/AdminLayout');
});
router.get('/admin/user', (req, res) => {
  res.render('admin/user')
});
router.get('/test', (req, res) => {
  res.render('admin/test')
});
router.get('/nhanvien', (req, res) => {
  res.render('admin/EmployeesLayout')
});
router.get('/them', (req, res) => {
  res.render('admin/AddUser')
});
router.get('/guihang', (req, res) => {
  res.render('layouts/DonVan')

});
// begin addUser
router.post('/them', (req, res) => {
  const data = {
    Email: req.body.email,
    password: req.body.password,
    username: req.body.hoten,
    Sdt: req.body.sdt,
    DiaChi: req.body.diachi,
    MaBuuCuc: req.body.mabuucuc

  }
  console.log(data)
  let { Email, password, username, Sdt, DiaChi, MaBuuCuc } = data;
  console.log(Email, password, username, Sdt, DiaChi, MaBuuCuc)
  User.create({ Email, password, username, Sdt, DiaChi, MaBuuCuc })
    .then(result => res.redirect('/admin/user'))
    .catch(err => console.log(err))
})
// end addUser
//Delete
router.get('/admin/user/delete/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(result => {
      console.log('Xóa thành công')
      res.redirect('/admin/user')
    })
    .catch(err => console.log(err))
})






// router.post('/signin', function (req, res) {
//   var user_name=req.body.User;
//   var password=req.body.password;
//   if(user_name=='admin' && password=='admin'){
//   	res.send('success');
//   }
//   else{
//   	res.send('Failure');
//   }
// })

//add user
router.get('/admin/user/add', (req, res) => {
  const data = {
    id: 3,
    username: 'mai',
    password: '123456789111',
    role: 1
  }
  let { id, username, password, role } = data;
  //insert into table
  User.create({ id, username, password, role })
    .then(result => res.redirect('/admin/user'))
    .catch(err => console.log(err))


})


module.exports = router;
