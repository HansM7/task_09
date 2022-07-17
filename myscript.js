// Creamos la base de datos

// use ecommerce

// -------------------------------------------------------------------

// Creamos las colecciones mensajes y productos

// db.createCollection("mensajes")
// db.createCollection("productos")

// Este paso era opcional, las colecciones tambien se crean cuando ejecutas una insercion



// -------------------------------------------------------------------

// Realizando las inserciones

// -- Archivos insertproducto, insertmensaje
// load("insertproducto.js")
// load("insertmensaje.js")

// -------------------------------------------------------------------

// Mostramos los datos de ambas colecciones

// db.productos.find()
// db.mensajes.find()

// -------------------------------------------------------------------

// Cantidad de documentos en una coleccion

// db.productos.estimatedDocumentCount()
// db.mensajes.estimatedDocumentCount()

// ----------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------

// Listar los productos con precio menor a 1000 pesos

// db.productos.find({
//     "precio":{$lt:1000}
// })

// -------------------------------------------------------------------

// Listar los productos con precio entre los 1000 a 3000 pesos

// db.productos.find({
//     $and:[{"precio":{$gte:1000}},{"precio":{$lte:3000}}]
// })

// -------------------------------------------------------------------

// Listar los productos con precio mayor a 3000 pesos

// db.productos.find({
//     "precio":{$gt:1000}
// })

// -------------------------------------------------------------------

// Realizar una consulta que traiga sólo el nombre del tercer producto más barato

// db.productos.find(
//     {},{"nombre":1}
// ).sort({
//     "precio":1
// }).limit(1).skip(2)

// -------------------------------------------------------------------

// Hacer una actualización sobre todos los productos, agregando el campo stock a todos 
// ellos con un valor de 100

// db.productos.update({},{$set:{"stock":100}},{multi:true})

// -------------------------------------------------------------------

// Cambiar el stock a cero de los productos con precios mayores a 4000 pesos

// db.productos.update({"precio":{$gt:4000}},{$set:{"stock":0}},{multi:true})

// -------------------------------------------------------------------

// Borrar los productos con precio menor a 1000 pesos

// db.productos.deleteMany({"precio":{$lt:1000}})

// -------------------------------------------------------------------

// Crear un usuario 'pepe' clave: 'asd456' que sólo pueda leer la base de datos ecommerce. 
//Verificar que pepe no pueda cambiar la información

// db.createUser({
//     user:"pepe",
//     pwd:"asd456",
//     roles:[
//         {role:"read",db:"ecommerce"}
//     ]
// })