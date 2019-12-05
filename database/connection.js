const Sequelize = require("sequelize");

var sequelize;

if(process.env.DATABASE_URL){
     sequelize= new Sequelize(process.env.DATABASE_URL,{
        dialect: 'postgres',
        protocol:'postgres',
        port:'5432',
        host:'ec2-174-129-255-4.compute-1.amazonaws.com',
        logging: true
    });
}else{ // development only
    sequelize= new Sequelize("simplepos_db","root","password",{
        host: '127.0.0.1',
        dialect: 'mysql',
        operatorsAliases: false
    });
}

module.exports = sequelize;
global.sequelize = sequelize;
