const mongoose = require('mongoose')
// mongoose.connect("mongodb+srv://root:root123@traningcluster.ogej9tj.mongodb.net/applewebsite?retryWrites=true&w=majority",{
//     useNewUrlParser:true,
// });

const ItemSchema = new mongoose.Schema({
    itemId:{
        type:String
        // required:true
    },
    itemName:{
        type:String
        // required:true
    },
    salePrice:{
        type:Number
        // required:true
    },
    checked:{
        type:String
        // required:false,
        // lastActiveAt: Date
    },
    itemNum:{
        type:Number
        // required:true
    },
    image:{
        type:String
    }
});


// add data
// const item = mongoose.model('item', ItemSchema);


// const item_info = new item({
//     itemId:'006',
//     itemName:'apple-watch',
//     salePrice:399,
//     checked:false,
//     itemNum:9999,
// })

// item_info.save()


//export
const item = mongoose.model("item", ItemSchema) // model裡面的member_info 輸入到schema後 表單名稱後面會加s =>member_infos
module.exports = item;

