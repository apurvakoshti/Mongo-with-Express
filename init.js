const mongoose= require('mongoose');
const Chat= require('./models/chat.js');


main()
.then(()=>{
    console.log('connection successfull');
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats=[
    {
        from:'rohit',
        to:'mohit',
        msg:'can you teach me JS callbacks?',
        created_at: new Date(),
    },
    {
        from:'apurva',
        to:'minal',
        msg:'many many happy returns of the day!',
        created_at: new Date(),
    },
    {
        from:'sakshi',
        to:'anuj',
        msg:'send me notes of machine learning',
        created_at: new Date(),
    },
    {
        from:'raj',
        to:'simran',
        msg:'take care',
        created_at: new Date(),
    },
    {
        from:'aman',
        to:'atharva',
        msg:'your web development skills are too good man!',
        created_at: new Date(),
    },
    {
        from:'prem',
        to:'preeti',
        msg:'i love you <3',
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);

