// // Stack and Heap

// // stack (primitive) Heap (non-primitive)

    let myRollNumber ="f20-1014"

    let myNewRollnumber =myRollNumber

    myNewRollnumber= "f20-1015"
    console.log(myRollNumber)
     console.log(myNewRollnumber)

 // //in stack we get a copy of value 

 let userOne= {
     email : "aqib@gmail.com",
     id :"user123"
}
    let userTwo= userOne
    userTwo.email = "newaqib@gmail.com"
    console.log(userOne.email)
     console.log(userTwo.email)
     
// //in heap we get the actual value