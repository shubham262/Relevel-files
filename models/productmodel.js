
module.exports=(sequelize,DataTypes)=>{

    const Product=sequelize.define('Product', {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
    
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        category:{
            type:DataTypes.STRING,
            allowNull:false
        },
        price:{
            type:DataTypes.INTEGER,  
            allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false  
        },
        productRating:{
            type:DataTypes.INTEGER,  
            allowNull:false
        }
    
    })
    
    return Product;
    
    }