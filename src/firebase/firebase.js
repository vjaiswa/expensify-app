import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 import 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database() 

export{firebase, database as default}

// const expense = {
//   description:"Tae",
//   amount:190,
//   note:"Tim Hortons",
//   createdAt:900
// }

// firebase.database().ref("expenses").push(expense);

// firebase.database().ref("expenses").on('child_changed',(snapshot) =>{
//    console.log(snapshot.key, snapshot.val())
// })

// setTimeout(() =>{
//   firebase.database().ref("expenses/MPgMSQBozFqOgFYYjRb").update({
//     amount:"100000"
//   }).then(() =>{
//       console.log("Data Updated Successfully")
//     }).catch(() =>{
//       console.log("Error in Data Updated")
//     })
// },5000)

// const expense = {
//   description:"Mount Betting",
//   amount:1500,
//   note:"",
//   createdAt:200
// }
 
// firebase.database().ref("expenses").push(expense);

// firebase.database().ref().off()

// firebase.database().ref().on('value',(snapshot) =>{
//   const obj = snapshot.val()
//   console.log(obj.name+" is a "+obj.job.title+" at "+obj.job.company+" from "+obj.location.city)
// })

  // firebase.database().ref().set({
  //   name:"Vijay Jaiswal",
  //   age:40,
  //   stressLevel:6,
  //   job:{
  //     title:"Software Dveloper",
  //     company:"Google"
  //   },
  //   location:{
  //     city:"Toronto",
  //     country:"Canada"
  //   }
  // }).then((data) =>{
  //   console.log("Database written to database")
  // }).catch((error) =>{
  //   console.log("Data could not be written to database")
  // })

// firebase.database().ref("location/city").set("Toronto")


// firebase.database().ref("attributes").set({
//   height:162,
//   whight:65
// }).then((data) =>{
//   console.log("Attribute added")
// }).catch((error) =>{
//   console.log("Attribute could not be added")
// })


// firebase.database().ref("location/city").set(null).then(() =>{
//   console.log("city removed")
// }).catch(() =>{
//   "city could not be removed"
// })

// firebase.database().ref().update({
//   stressLevel:9,
//   "job/company":"Amazon",
//   "location/city":"Seattle"
// }).then(() =>{
//   console.log("Data Updated Successfully")
// }).catch(() =>{
//   console.log("Error in Data Updated")
// })
