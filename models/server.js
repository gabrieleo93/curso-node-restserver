const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../DB/config');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // conectar a base de datos
        this.conectarDB();

        // middlewares
        this.middlewares();
        // rutas de mi aplicacion
        this.route();
    }
    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        // cors
        this.app.use(cors());
        // lectura y parseo del body
        this.app.use(express.json());
        // directorio publico
        this.app.use(express.static('public'));



    }

    route(){
        
        this.app.use(this.usuariosPath, require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Example app listening at http://localhost:${this.port}`)
        });
        

    }



}




module.exports = Server;