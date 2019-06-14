const express = require('express');

const router = express.Router();
const db = require('../config/database');
const User = require('../models/user');
const Transport_customer = require('../models/transport');
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});
router.get('/admin/user', (req, res) => User.findAll()

  .then((result) => {
    res.render('admin/user', { result });
  })
  .catch(err => console.log(err)));

router.get('/admin/home', (req, res) => {
  res.render('admin/home');
});

//= ==== login page
router.get('/login', (req, res) => {
  res.render('layouts/login');
});

router.post('/login', (req, res) => {
  const { username } = req.body;
  const pw = req.body.password;

  if (username == 'admin' && pw == '123456') {
    // req.flash('loginMessage','dkfksd')
    res.redirect('admin');
  } else {
    User.findOne({
      where: {
        username,
        password: pw,
      },
      attributes: ['role'],
    })
      .then((result) => {
        const rs = result.role;
        if (rs === 0) {
          res.redirect('/admin');
        } else if (rs === 1) {
          res.redirect('/nhanvien');
        }
      })
      .catch(
        err => res.redirect('/login'),
        // req.flash('loginMessage','dkfksd')
      );
  }
});
router.get('/admin', (req, res) => {
  res.render('admin/AdminLayout');
});
router.get('/admin/user', (req, res) => {
  res.render('admin/user');
});
router.get('/test', (req, res) => {
  res.render('admin/test');
});
router.get('/nhanvien', (req, res) => {
  res.render('admin/EmployeesLayout');
});
router.get('/them', (req, res) => {
  res.render('admin/AddUser');
});

// begin addUser
router.post('/them', (req, res) => {
  const data = {
    Email: req.body.email,
    password: req.body.password,
    username: req.body.hoten,
    Sdt: req.body.sdt,
    DiaChi: req.body.diachi,
    MaBuuCuc: req.body.mabuucuc,
  };
  const {
    Email, password, username, Sdt, DiaChi, MaBuuCuc,
  } = data;
  User.create({
    Email, password, username, Sdt, DiaChi, MaBuuCuc,
  })
    .then(result => res.redirect('/admin/user'))
    .catch(err => console.log(err));
});
// end addUser
// Delete
router.get('/admin/user/delete/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((result) => {
      console.log(result);
      console.log('Xóa thành công');
      res.redirect('/admin/user');
    })
    .catch(err => console.log(err));
});

// Transport
router.get('/guihang', (req, res) => {
  res.render('layouts/Transport_Customer');
});

router.get('/quanlidonvan', (req, res) => {
  Transport_customer.findAll({
    order: [
      ['id_transport', 'DESC']
    ],
  })
    .then((result) => {
      res.render('admin/Transport_customer', { result });
    })
    .catch(err => console.log(err));
});

router.post('/guihang', (req, res) => {
  const dt = {
    Name_Sender: req.body.hotengui,
    Adress_Sender: req.body.diachigui,
    Phone_Sender: req.body.sdtgui,
    Name_Receiver: req.body.hotennhan,
    Adress_Receiver: req.body.diachinhan,
    Phone_Receiver: req.body.sdtnhan,
  };
  console.log(dt);
  const {
    Name_Sender,
    Adress_Sender,
    Phone_Sender,
    Name_Receiver,
    Adress_Receiver,
    Phone_Receiver,
  } = dt;
  Transport_customer.create({
    Name_Sender,
    Adress_Sender,
    Phone_Sender,
    Name_Receiver,
    Adress_Receiver,
    Phone_Receiver,
  }).then(result => res.redirect('/quanlidonvan'));
});

router.get('/quanlidonvan/delete/:id_transport', (req, res) => {
  Transport_customer.destroy({
    where: {
      id_transport: req.params.id_transport,
    },
  })
    .then((result) => {
      console.log(result);
      console.log('Xóa thành công');
      res.redirect('/quanlidonvan');
    })
    .catch(err => console.log('err'));
});

router.get('/quanlidonvan/:id/edit', (req, res) => {
  Transport_customer.findOne({
    where: {
      id_transport: req.params.id,
    },
  }).then(transportData => {
    res.render('admin/transport_customer_edit', { transportData });
  }).catch(error => {
    console.log(error)
    res.redirect('/quanlidonvan');
  })
});

router.post('/quanlidonvan/:id/update', (req, res) => {
  Transport_customer.findOne({
    where: {
      id_transport: req.params.id,
    },
  }).then(transportData => {
    transportData.Name_Sender = req.body.Name_Sender;
    transportData.Adress_Sender = req.body.Adress_Sender;
    transportData.Phone_Sender = req.body.Phone_Sender;
    transportData.Name_Receiver = req.body.Name_Receiver;
    transportData.Adress_Receiver = req.body.Adress_Receiver;
    transportData.Phone_Receiver = req.body.Phone_Receiver;
    transportData.save().then(() => {
      res.redirect('/quanlidonvan');
    })
  }).catch(error => {
    console.log(error)
  })
});

module.exports = router;
