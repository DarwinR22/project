const {response, request} = require('express');

const userGet = (req = request, res=response) => {
    
    const params = req.query


    res.json({
        msg: 'get API - controlador',
        params
    });
}








const userPost = (req, res=response) => {

    const {nombre, edad} = req.body;



    res.json({
        msg: 'post API - controlador',
        nombre, edad
    });
}


const userPut = (req, res=response) => {

    const id = req.params.id;
    
    res.json({
        msg: 'Put API - controlador',
        id
    });
}


const userPatch = (req, res=response) => {
    
    res.json({
        msg: 'Patch API - controlador'
    });
}

const userDelete = (req, res=response) => {
    
    res.json({
        msg: 'Delete API - controlador'
    });
}



module.exports = {
    userGet,
    userPost,
    userPut,
    userPatch,
    userDelete
    
}