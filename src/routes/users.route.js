import { Router } from "express";

const router = Router();

router.get('/users', (req,res) => {
    res.send('getting users')
})

router.get('/users/:userId', (req,res) => {
    //de acá se saca un parametro que en este caso es el id
    const {userId} = req.params
    res.send('getting user by id: ' + userId)
})

router.post('/users', (req,res) => {
    res.send('create user')
})

router.delete('/users/:userId', (req,res) => {
    
    res.send(`deleting user : ${userId}`)
})

router.put('/users/:userId', (req,res) => {
    const {userId} = req.params;
    res.send('updating user' + userId)
})








export default router;