//el entry point 
const   express= require('express');// esto no regresaria todas las funcionalidades de expres 

//en "app" almacenamos la ejecucion express,para luego usar sus metodos
const   app=express();

//necesitamos al modulo "path" para hacer una ruta absoluta 
const path=require('path');

  
const puerto = process.env.PORT || 3001;

app.listen(puerto, () => {
  console.log(`Levantando un servidor con Express en el puerto ${puerto}`);
});

// Define una ruta de ejemplo
// usamos el sendfild, para mandar un archivo html


//queremos la carpeta "public" como un recurso estatico, para consumirlo de manera cencilla
// el metodo .resolve , nos permite dar una ruta absoluta 
const publiPath = path.resolve(__dirname,'./public') ;
app.use(express.static(publiPath));

app.get('/', (req, res) => {
    //__dirname una constante node.js, que hace referencia al directorio donde estamos
    let htmlPath = path.resolve(__dirname,'./views/home.html') ;
    //al estar en la ruta "/" me manda a una direccion de archivo html
    res.sendFile(htmlPath);
  });

app.get('/home', (req, res) => {
    res.send('estamos en HOME ');
});




//las rutas de los formularios "login" y " register"

app.get('/register', (req, res) => {
  //__dirname una constante node.js, que hace referencia al directorio donde estamos
  let htmlPath = path.resolve(__dirname,'./views/register.html') ;
  //al estar en la ruta "/" me manda a una direccion de archivo html
  res.sendFile(htmlPath);
});
app.get('/login', (req, res) => {
  //__dirname una constante node.js, que hace referencia al directorio donde estamos
  let htmlPath = path.resolve(__dirname,'./views/login.html') ;
  //al estar en la ruta "/" me manda a una direccion de archivo html
  res.sendFile(htmlPath);
});