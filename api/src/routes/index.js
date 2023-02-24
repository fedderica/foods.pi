const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
 const misRouter = require('./rutasO')

const router = Router();
router.use('/', misRouter)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
