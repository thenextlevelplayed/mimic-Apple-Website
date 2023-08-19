const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const bcrypt = require("bcrypt"); // 密碼加密
const member_info_model = require("../server/modules/member")
const item = require("../server/modules/items")

const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const jwt_decode = require('jwt-decode');
const config = require("../server/modules/token");
const { json } = require('express');

app.use(express.json())
app.use(cors()); 
app.listen(3001, ()=>{
    console.log("server running on port 3001")
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const saltRounds = 10; //密碼加密

mongoose.connect("mongodb+srv://root:root123@traningcluster.ogej9tj.mongodb.net/applewebsite?retryWrites=true&w=majority",{
    useNewUrlParser:true,
});

//註冊 
app.post("/register", async (req,res) =>{

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const country = req.body.country;
    const birthday = req.body.birthday;
    const email = req.body.email;
    // const password = req.body.password;
    const phonezone = req.body.phonezone;
    const phone = req.body.phone;
    console.log("req.body.password:",req.body.password)
    //密碼加密
    req.body.password = await bcrypt.hash(req.body.password, saltRounds);
    console.log("req.body.password:",req.body.password)
    const password = req.body.password;

    console.log(firstName)
    console.log(lastName)
    console.log(country)
    console.log(birthday)
    console.log(email)
    console.log(password)
    console.log(phonezone)
    console.log(phone)



    const member_info = new member_info_model({
        firstname:firstName,
        lastname:lastName,
        countryregion:country,
        birthday:birthday,
        email:email,
        password:password,
        phonezone:phonezone,
        phonenumber:phone
        // cartList:[{
        //     itemId:'123',
        //     itemName:'123',
        //     salePrice:'123',
        //     checked:'123',
        //     itemNum:123,

            
        // }]
    })

    // console.log(member_info.firstname,member_info.countryregion,member_info.password)
    
    try {
        member_info.save();
        return res.json({
            message:"save success"});


    } catch (err) {
        console.log(err);
        return res.json({
            message:"error"});
    }

})

//登入
app.post("/login", async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password

    const collection = await member_info_model.findOne({
        email:email
    })
    // console.log(collection)

    try { if (collection){
        // 對照密碼
        const cmp = await bcrypt.compare(req.body.password, collection.password);
        if (cmp){
            // console.log('ok!')
            // console.log(collection.password)
            const setToken= {
                email:req.body.email,
                id:collection._id
            }

            const token = jwt.sign(setToken,config.jwtKey, {expiresIn:'24h'})
            //  console.log(token)
            return res.json({
                success: true,
                login_check: true,
                password_check: true,
                message: '認證成功...',
                token: token,
                // login : loginUser.login,
                // name: loginUser.name,
                email: req.body.email
            });
        } else{
            console.log('wrong!')
            return res.send("Wrong username or password.");
        }}
    }catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server error Occured");
    }
})
// change password
app.post('/comfirm',async(req,res)=>{
    const oldPassword = req.body.oldPassword
    const newPassword = req.body.newPassword
    const id = req.body.id;
    const collection = await member_info_model.findById({
        _id:id
    })
    console.log(oldPassword)
    console.log(newPassword)
    console.log(collection.password)
    try { if (collection){
        // 對照密碼
        const cmp =  await bcrypt.compare(oldPassword, collection.password);
        if (cmp){
            // 密碼加密
            password = await bcrypt.hash(newPassword, saltRounds);
            try{
                await member_info_model.findByIdAndUpdate(id,
                    {
                        password:password,
                }, function (err, docs) {
                    if (err){ 
                        console.log(err)
                        res.send('err') 
                    } 
                    else{ 
                        console.log("Updated User:", docs); 
                        res.send('docs') 
                    } 
                 })
            }catch (err){
                console.log('err',err)
            }


            return res.json({
                success: true,
                login_check: true,
                password_check: true,
                message: '認證成功...',
            });
        } else{ //更改密碼錯誤
            console.log('wrong!')
            return res.send("Wrong password.");
        }}
    }catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server error Occured");
    }
})



//會員資料顯示
app.get('/memberInfo',async (req,res)=>{
    
    let token =req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];
    // console.log(token)
    if(token){
        await jwt.verify(token,config.jwtKey),(err,decoded)=>{
            if (err){
                console.log('500')
                return res.status(500).json({
                    success:false,
                    message:'token 認證錯誤'
                });
            } else{
                console.log('200')
                res.send('getinfo')

                // return req.body.email
            }
        }
    } else{
        console.log('403')
        return res.status(403).json({
            success:false,
            message:'沒有提供 token 做驗證'
        });
    }
    var decoded = jwt_decode(token);
    // console.log('decoded',decoded)

    member_info_model.findOne({
        _id:decoded.id
        // email:'im7878@gmail.com'
    },
    {password: 0},//不抓password資料
    function (err, userinfo) {
        return res.status(200).json({
          success: true,
          message: 'userinfo',
          data : userinfo
        })
      })
});

//udate data
app.put('/updateName', async (req,res)=>{
    const newFirstName = req.body.newFirstName;
    const newLastName = req.body.newLastName;
    const id = req.body.id;
    // const id = '63255c2817e5a5d72666dbbe';
    console.log(newFirstName)
    console.log(newLastName)
    console.log(id)

    //add auth
    let token =req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];
    // console.log(token)
    if(token){
        await jwt.verify(token,config.jwtKey),(err,decoded)=>{
            if (err){
                console.log('500')
                return res.status(500).json({
                    success:false,
                    message:'token 認證錯誤'
                });
            } else{
                console.log('200')
                res.send('getinfo')
            }
        }
    } else{
        console.log('403')
        return res.status(403).json({
            success:false,
            message:'沒有提供 token 做驗證'
        });
    }

    try{
        await member_info_model.findByIdAndUpdate(id,
            {
                firstname:newFirstName,
                lastname:newLastName
        })
        return res.status(200).json({
            success:true,
            message:'更改成功'
        })
    }catch (err){
        console.log('err',err)
        return res.status(403).json({
            success:fasle,
            message:'更改失敗'
        })
    }
})

app.put('/updateEmail', async (req,res)=>{
    const newEmail = req.body.newEmail;
    const id = req.body.id;
    console.log(id)

    //add auth
    let token =req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];
    // console.log(token)
    if(token){
        await jwt.verify(token,config.jwtKey),(err,decoded)=>{
            if (err){
                console.log('500')
                return res.status(500).json({
                    success:false,
                    message:'token 認證錯誤'
                });
            } else{
                console.log('200')
                res.send('getinfo')

                // return req.body.email
            }
        }
    } else{
        console.log('403')
        return res.status(403).json({
            success:false,
            message:'沒有提供 token 做驗證'
        });
    }


    try{
        await member_info_model.findByIdAndUpdate(id,
            {
                email:newEmail,
        })
        return res.status(200).json({
            success:true,
            message:'更改成功'
        })
    }catch (err){
        console.log('err',err)
        return res.status(403).json({
            success:fasle,
            message:'更改失敗'
        })
    }
})

app.put('/updatePhone', async (req,res)=>{
    const newPhoneNum = req.body.newPhoneNum;
    const id = req.body.id;
    console.log(id)

    //add auth
    let token =req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];
    // console.log(token)
    if(token){
        await jwt.verify(token,config.jwtKey),(err,decoded)=>{
            if (err){
                console.log('500')
                return res.status(500).json({
                    success:false,
                    message:'token 認證錯誤'
                });
            } else{
                console.log('200')
                res.send('getinfo')
            }
        }
    } else{
        console.log('403')
        return res.status(403).json({
            success:false,
            message:'沒有提供 token 做驗證'
        });
    }

    try{
        await member_info_model.findByIdAndUpdate(id,
            {
                phonenumber:newPhoneNum,
        }
         )
         return res.status(200).json({
            success:true,
            message:'更改成功'
         })
    }catch (err){
        console.log('err',err)
        return res.status(403).json({
            success:fasle,
            message:'更改失敗'
        }) 
    }
})

//show item
app.get('/item',(req,res)=>{
    item.find({}, function (err, item) {
        return res.status(200).json({
            success: true,
            message: 'iteminfo',
            data : item
        })
        })
    });

// get cart item amd store it
app.post('/addCart',async (req,res)=>{
    // console.log(req.body.itemId) //_id
    // console.log(req.body.quantity) //itemNum
    // console.log(req.body.email) //itemNum
    const email=req.body.email
    const itemId = req.body.itemId


    //store cart item into memberinfo
    //memberinfo
    const member_Info = member_info_model.findOne({email:email},(error,memberInfo)=>{
        if(error){
            res.json({
                status:1,
                message:error.message
            });
        }else{
            console.log("memberInfo:"+memberInfo)
            if(memberInfo){
                console.log(memberInfo.firstname)
                var inCart = false;
                memberInfo.cartList.forEach(function(item){
                    if (item._id==req.body.itemId){
                        inCart = true;
                        item.itemNum++;
                        item.checked= "false";
                        memberInfo.save(function (err2,doc2){
                            if(err2) {
                                res.json({
                                    status:"1",
                                    msg:err2.message
                                })
                            }else{
                                res.json({
                                    status:'0',
                                    msg:'',
                                    result:'suc'
                                })
                        }})
                        return('update items number')
                    }                    
                });
                // not in the cart
                if(!inCart){
                    item.findOne({_id:itemId},(error,addCart)=>{
                        if(error){
                            res.json({
                                status:1,
                                message:error.message
                            });
                        }else{
                            // console.log('addCart.image'+addCart.image)
                            // console.log(addCart.checked);
                            // console.log(addCart.salePrice);

                            addCart.checked="false";
                            addCart.itemNum = 1;
                            addCart._id=itemId;
                            // console.log('addCartInfo'+addCart)
                            // console.log('addCart.image'+addCart.image)
                            memberInfo.cartList.push(addCart);
                            // console.log(memberInfo.cartList);
                            memberInfo.save(function (err2,doc2){
                                if(err2) {
                                    res.json({
                                        status:"1",
                                        msg:err2.message
                                    })
                                }else{
                                    // console.log('doc2'+doc2)
                                    res.json({
                                        status:'0',
                                        msg:'',
                                        result:'suc'
                                    })
                            }})
                            // save(memberInfo,res)
                            return('add new cartList')
                        }
                    })
                }
            }
        }
    })
    // const memberID =await member_info_model.find({email:email}).exec();
    // console.log(memberID[0]._id,'memberID:id')

})

// get cartlist info 
app.get('/getCart',async (req,res)=>{
    //add auth
    let token =req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];
    // console.log(token)
    if(token){
        await jwt.verify(token,config.jwtKey),(err,decoded)=>{
            if (err){
                console.log('500')
                return res.status(500).json({
                    success:false,
                    message:'token 認證錯誤'
                });
            } else{
                console.log('200')
                res.send('getinfo')

                // return req.body.email
            }
        }
    } else{
        console.log('403')
        return res.status(403).json({
            success:false,
            message:'沒有提供 token 做驗證'
        });
    }
    var decoded = jwt_decode(token);
    // console.log('email:',decoded.email)
    const email = decoded.email
    await member_info_model.aggregate([
        // {$sortArray:{input:"$cartList",sortBy:{itemId:1}}},
        {$match:{email:email}},
        {$lookup:{from:'items', localField:'cartList._id',foreignField:'_id',as:'useritemdata'}}
        
    ]).exec((err,doc)=>{
        if(doc){
            // console.log('doc[0]:',doc[0])
            return res.json({
                status:0,
                msg:'',
                result:{
                    list:doc[0] // send cartlist info
                }
            })  
        }else{
            return res.json({
                status:1,
                msg:'failed to look up cartList'
            })
        }
        // test array data
        // if(err){
        //     console.log(err)
        // }else{
        //     console.log(doc[0].cartList[0])
        //     console.log(doc[0].useritemdata[0])
        //     console.log(doc.useritemdata)

        // }
    });
    // console.log()
    // member_info_model.findOne({email:email},function(err,doc){
    //     if(doc){
    //         return res.json({
    //             status:0,
    //             msg:'',
    //             result:{
    //                 list:doc.cartList // send cartlist info
    //             }
    //         })  
    //     }else{
    //         return res.json({
    //             status:1,
    //             msg:'failed to look up cartList'
    //         })
    //     }
    // })


    })

// update cartlist info 
app.put('/updateCart',async(req,res)=>{
    // let token =req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];
    // console.log(req.body.id)
    console.log(req.body.id)
    const id = req.body.id
    console.log(req.body.itemName)
    const itemName = req.body.itemName
    const newItemNum=req.body.itemNum
    console.log(req.body.itemNum)
    console.log('newItemNum:',newItemNum)

    await member_info_model.updateOne(
        {_id:id,"cartList.itemName":itemName},
            {
                $set:
                    {
                        "cartList.$.itemNum":newItemNum
                    }
            },
            {
                new: true
            }
    ), function (err, docs) {
        if (err){ 
            console.log(err)
            res.send('err') 
        } 
        else{ 
            console.log("Updated User:", docs); 
            res.send('docs') 
        } 
     }

    

    // try{
    //     await member_info_model.findByIdAndUpdate(id,
    //         {                
    //             cartList:{
    //                 $elemMatch:{
    //                     itemName:req.body.itemName,
    //                     itemNum:newItemNum
    //                 }
    //             }
    //     }, function (err, docs) {
    //         if (err){ 
    //             console.log(err)
    //             res.send('err') 
    //         } 
    //         else{ 
    //             console.log("Updated User:", docs); 
    //             res.send('docs') 
    //         } 
    //      })
    // }catch (err){
    //     console.log('err',err)
    // }
})
// delete cartList content
app.delete('/deleteCart/:id',async(req,res)=>{
    const memberInfoId = req.body.memberInfoId;
    const id =req.params.id; 
    console.log(memberInfoId)
    console.log(id)
    await member_info_model.updateOne(
        {_id:memberInfoId},
        {
            $pull:
                {
                    cartList:
                        {
                            _id:id,
                            checked:'false'
                        }
                }
        }
    )
    res.send('delete!')
    

})

//payment
app.post('/payCart',async (req,res)=>{
    console.log(req.body.id)
    member_info_model.findOne({_id:req.body.id},(error,memberInfo)=>{
        // console.log(memberInfo)
        if(error){
            res.json({
                status:1,
                message:error.message
            });
        }else{
            // delete itemNum
            for(let i =0; i<memberInfo.cartList.length ; i++){
                item.findOne({_id:memberInfo.cartList[i]._id},(error,iteminfo)=>{
                    console.log("iteminfo:",iteminfo)
                    console.log('memberInfo.cartList[i].itemNum:',memberInfo.cartList)
                    // iteminfo.itemNum = (iteminfo.itemNum-memberInfo.cartList[0].itemNum)
                    console.log((iteminfo.itemNum-memberInfo.cartList[i].itemNum))
                    iteminfo.itemNum = iteminfo.itemNum-memberInfo.cartList[i].itemNum
                    if(iteminfo.itemNum>0){
                        iteminfo.save()
                    }else{
                        console.log('out of stack!')
                    }
                    
                })
                memberInfo.historyList.push(memberInfo.cartList[i]);
            }

            

            // for(let i =0; i<memberInfo.cartList.length ; i++){
            //     memberInfo.cartList[i].checked = "true"
            //     memberInfo.historyList.push(memberInfo.cartList[i]);
            // }
            
        }

        // memberInfo.cartList = [];

        memberInfo.save(function (err2,doc2){
            if(err2) {
                res.json({
                    status:"1",
                    msg:err2.message
                })
            }else{
                console.log("doc2"+doc2)
                res.json({
                    status:'0',
                    msg:'',
                    result:'suc'
                })
                return('add new historyList')
        }
        })
    }
    )
    // delete cartList
    member_info_model.findOne({_id:req.body.id},(error,memberInfo)=>{
        memberInfo.cartList = []
        memberInfo.save()
    })


})




function verifyToken (req,res,next){
    let token =req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];
    // console.log('token',token)
    var decoded = jwt_decode(token);
    // console.log('email:',decoded.email)


    // console.log('verify toekn,token');
    if(token){
        jwt.verify(token,config.jwtKey),(err,decoded)=>{
            if (err){
                console.log('500')
                return res.status(500).json({
                    success:false,
                    message:'token 認證錯誤'
                });
            } else{
                console.log('200')

                req.decoded=decoded;
                req.body.email = decoded.email
                next();
                // return req.body.email
            }
        }
    } else{
        console.log('403')
        return res.status(403).json({
            success:false,
            message:'沒有提供 token 做驗證'
        });
    }
}

