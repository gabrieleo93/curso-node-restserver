const mongoose = require('mongoose');



const dbconnection = async() =>{

    try{
        await mongoose.connect(process.env.MONDODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            userCreateIndex: true,
            useFindAndModify: false
        });
        console.log('base de dato online');

        


    }catch(error){
        console.log(error);
        throw new Error ('Error a la hora de iniciar la base de datos')
    }




}



module.exports = {

    dbconnection
}
