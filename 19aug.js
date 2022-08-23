//array.evry\

// var a=[-11,1,-3,-4]

// var ans1=a.map(function(item){
//  return item>0

// })

// var ans1=a.every(function(item){
//     return item>0

// })
// var ans1=a.some(function(item){
//     return item>0

// })
// console.log(ans1)//1234 2468 
// function cars(obj) {
//     console.log(typeof obj)
//     obj.brand = 'BMW';
//     return car;
// }

// const car = {
//     brand: 'Audi',
//     color: 'Red'
// }
//  const newCar = cars({...car});//objects are passed as refrence
// console.log(car)



// var obj1=JSON.parse(JSON.stringify(obj))
// obj.a="Shyam"
// var a="String"
// console.log(a.substring(0,4))//[0,1]


// `\${1}` === '${1}'


//message function

var user={//dummy databases


}

var a=1000
function Message(Num){

this.id=Num;

user[Num]={
    messages:[]
}

this.getMessage=function(){

console.log(user[this.id].messages)



}
this.deleteMessage=function(id,sender){

if(user[sender]){
    user[sender].messages=user[sender].messages.filter(function(item){
    return item.id!==id
})//[]

}
else{
    throw "User not found"
}


}


this.sendMessage=function(sender,message){

    if(user[sender]){
        mesid=a
        a++;

        mes={
            id:mesid,
            mess:message
        }

        user[sender].messages.push(mes)
        return mesid;
    }
    else{
       throw "Message failed to send"
    }
    
}

}


const obj = new Message(123);//user123
const obj1 = new Message(12);//user12  messages=["hai"]
console.log(user)
const id1 = obj.sendMessage('12', 'Hai')
const id2 = obj.sendMessage('12', 'Hai')
const id3 = obj1.sendMessage('123', 'Hai what u r doing')

obj1.getMessage();
// obj.getMessage();
obj.deleteMessage(id1, 12);
obj1.getMessage();
const id4 = obj.sendMessage('12', 'Hello')
obj1.getMessage();
obj.deleteMessage(id4, 12);
obj1.getMessage();



"Ram"//

