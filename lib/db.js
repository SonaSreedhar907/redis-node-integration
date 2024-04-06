const Redis = require('ioredis')

const redis = new Redis({
    port:11881,
    host:'redis-11881.c256.us-east-1-2.ec2.cloud.redislabs.com',
    password:'F8kTcg9DQ3nxjIBZKHLpZ2M1YeJS40ch'
})

redis.set('myKey','sona',(err,result)=>{
    if(err){
        console.error('Error setting value: ',err)
    }else{
        console.log('Value set successfully: ',result)
    }
})


redis.get('myKey',(err,result)=>{
    if(err){
        console.log("Error getting value: ",err)
    }else{
        console.log("Restricted value: ",result)
    }
})

