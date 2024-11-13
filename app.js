//LOCALHOST 

// const { MongoAPIError, MongoClient } = require("mongodb");

// const express = require("express")  //
// //con esta estructura de comando ya podemos usar los paquetes que ingresemos

// const app = express()          //
//                               //estos 3 comandos son la estructura basica de un servidor local
// app.listen(3000, () => {
// console.log("servidor activo")  //se usan arrow functions x() => {}
// })

//API REST

// let bddescuelaca = require("mysql");

// let conexion = bddescuelaca.createConnection({
//     host: "localhost",
//     database: "escuela ca bd,",
//     user: "LeitoplaySXD",
//     password: "le0n4Rd02119"
// });

// conexion.connect(function(err){
//     if(err){
//         throw err;
//     }else{
//         console.log("conexion exitosa");
//     }
// });}

//Mongo DB
 

const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://<usuario>:<contraseña>@<host>:<puerto>/<nombreDB>?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
        // Conectarse al servidor de MongoDB
        await client.connect();
        console.log("Conectado a MongoDB");

        // Realiza operaciones en la base de datos
        const database = client.db('nombreDB');
        const collection = database.collection('nombreColeccion');
        // Ejemplo de consulta
        const documentos = await collection.find().toArray();
        console.log(documentos);

    } finally {
        // Cerrar la conexión
        await client.close();
    }
}

main().catch(console.error);




