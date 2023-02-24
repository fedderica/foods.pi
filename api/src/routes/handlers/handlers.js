const handler1 =  (req, res) => {
    const { id } = req.params;
    res.send(`Va a enviar el detalle de el usuario de Id ${id}`);

};

const handler2 =  (req, res) => {
    const { name } = req.query;
    if (name) {
        res.send(`Quiero buscar todos los que se llamen ${name}`);
    } else {
        res.send(`Quiero enviar todos los usuarios`);
    }
    };


const handler3 = (req, res) => {
     const {  name, sumary, score, healthScore, image, steps, namedieta } = req.body;
    console.log( {  name, sumary, score, healthScore, image, steps, namedieta } )
         res.send(`Debería crear una receta nueva con estos datos`)
          
    //res.send.NIY: -  Esta ruta recibirá todos los datos necesarios para crear una nueva receta y relacionarla con los tipos de dieta solicitados.
   // -  Toda la información debe ser recibida por body.
    //-  Debe crear la receta en la base de datos, y esta debe estar relacionada con los tipos de dieta indicados (al menos uno)}
}
const handler4 = (req, res) => {
   
//-  Obtiene un arreglo con todos los tipos de dietas existentes.
//-  En una primera instancia, cuando no exista ninguna dieta, deberás precargar la base de datos con las dietas de la [**documentación**](https://spoonacular.com/food-api/docs#Diets).
//-  Estas deben ser obtenidas de la API (se evaluará que no haya hardcodeo). Luego de obtenerlas de la API, deben ser guardadas en la base de datos para su posterior consumo desde allí.
}

module.exports = { handler1, handler2, handler3, handler4}