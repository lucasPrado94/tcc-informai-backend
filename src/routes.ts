import Router from 'express';

const router = Router();

router.get('/teste', (request, response) => {
    return response.json({"message": 'Consegui fazer a rota funcionar'});
})

export default router;