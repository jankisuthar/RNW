const express = require('express');
const { show, create, update, trash, sendemail, login, getAccess } = require('../controllers/userController');
const router = express.Router();
const upload = require('../util/uploadFile')

router.get('/', show);
// router.post('/', upload.single('profile'), create);
// router.post('/', upload.array('profile',4), create);
router.post('/', upload.fields([{ name: 'profile1', maxCount: 1 }, { name: 'profile2', maxCount: 4 }]), create);
router.patch('/', update)
router.put('/:id', update)
router.delete("/:id", trash)
router.post("/login", login)
router.post('/mailsend', sendemail)
router.get('/access',getAccess)

// router.route('/')
//     .get(show)
//     .post(create)
//     .patch(update)

// router.route('/:id')
//     .put(update)
//     .delete(trash)
module.exports = router;