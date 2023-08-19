const item = require("./items")
const mongoose = require('mongoose')
const member_info_model = require("./member")
mongoose.connect("mongodb+srv://root:root123@traningcluster.ogej9tj.mongodb.net/applewebsite?retryWrites=true&w=majority",{
    useNewUrlParser:true,
});

// async function collection(){
//     await member_info_model.findOne({
//         email:'7788@gmail.com'
//     },(error,user)=>{
//         if(error){
//             console.log(error)
//         }else{
//             console.log(user.cartList)
//             user.cartList
//         }
//     }).clone().catch(function(err){ console.log(err)})
// }
// collection()

// async function collection(){
//     await member_info_model.find({ 
//         email:'7788@gmail.com'}).exec();
// }

// collection()

//  member_info_model.find({ 
//     email:'7788@gmail.com'},function(err,user){
//             console.log('user:',user)
//             console.log('firstname:',user.firstname)

//             console.log('type',typeof(user))
//             console.log('type',typeof(user.cartList))
//             console.log('type',typeof(user.firstname))

            



//         })
    // })

// const list = {
    
//     firstname:"7788",
//     lastname:"7788",
//     countryregion:"Nepal",
//     car:[{
//         abc:'123',
//         ggg:'ㄐㄐㄐ'
//     }]
// }
// console.log(list.car)
// console.log(typeof(list))

// console.log(list.car.map(item=>Object.values(item)[0]))


// collection()
// 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-cell-blue-202203'

// item.findOne({_id:"63366df48706044528760f07"},(error,addCart)=>{
//     console.log(addCart)
//     console.log(addCart.salePrice)
//     console.log(addCart.itemId)
//     console.log(addCart.itemName)
//     console.log(addCart.checked)
//     console.log(addCart.itemNum)
//     console.log(addCart.image)






// })
const id = '6347c44ed6b0fea19a2dff4b'
member_info_model.findOne({email:'kitty93213@gmail.com'},(err,doc)=>{
    console.log(doc)
})