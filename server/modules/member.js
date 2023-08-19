const mongoose = require('mongoose')

const MemberSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    countryregion:{
        type:String,
        required:true
    },
    birthday:{
        type:Date,
        required:true,
        // lastActiveAt: Date
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phonezone:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    cartList:[{ // 購物車列表
    
 
          itemId: {type:String,required:false}, // 商品Id
 
          itemName: {type:String,required:false}, // 商品名稱
 
          salePrice:{type:Number,required:false}, // 商品價格
 
          checked:{type:String,required:false}, // 是否選中
 
          itemNum:{type:Number,required:false}, // 商品數量

          image:{type:String,required:false}, // 商品數量

 
 
     }],

    historyList:[{ // 購物車列表

        itemId: {type:String,required:false}, // 商品Id

        itemName: {type:String,required:false}, // 商品名稱

        salePrice:{type:Number,required:false}, // 商品價格

        checked:{type:String,required:false}, // 是否選中

        itemNum:{type:Number,required:false}, // 商品數量

        image:{type:String,required:false}, // 商品數量
   }]
    
    })




// const member_sign_up = mongoose.model("member_sign_up", MemberSchema)
// module.exports = member_sign_up;

const member_info = mongoose.model("member_info", MemberSchema) // model裡面的member_info 輸入到schema後 表單名稱後面會加s =>member_infos
module.exports = member_info;

// const { MongoClient } = require("mongodb");

// // Replace the uri string with your connection string.
// const uri =
//   "mongodb+srv://root:root123@traningcluster.ogej9tj.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri);

// async function run() {
//   try {
//     const database = client.db('applewebsite');
//     const member_info = database.collection('member_info');

//     // Query for a movie that has the title 'Back to the Future'
//     const query = {
//         firstname:{
//             type:String,
//             required:true
//         },
//         lastname:{
//             type:String,
//             required:true
//         },
//         countryregion:{
//             type:String,
//             required:true
//         },
//         birthday:{
//             type:String,
//             required:true
//         },
//         email:{
//             type:String,
//             required:true
//         },
//         password:{
//             type:String,
//             required:true
//         },
//         phonezone:{
//             type:String,
//             required:true
//         },
//         phonenumber:{
//             type:Number,
//             required:true
//         }
//     };
//     const member_sign_up = await member_info.insertOne(query);

//     console.log(member_sign_up);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);