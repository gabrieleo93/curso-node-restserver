const {Router} = require('express');


const { usuariosPost,
        usuariosGet,
        usuariosPut,
        usuariosDelate,
        usuariosPatch } = require('../controllers/user.controller');


const router = Router();

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.delete('/', usuariosDelate);

router.patch('/', usuariosPatch);




module.exports = router;