 const addUserBtn=document.getElementById('addUser');
// console.log(addUserBtn)
 const usernameTextField=document.getElementById('username');
// const recordsdisplay=document.getElementById('records');
// let userArray=[];

// let objStr=localStorage.getItem('users');
// // console.log(userArray);
// if (objStr!=null) {
//     userArray=JSON.parse(objStr);
// }
// DisplayInfo();
// addUserBtn.onclick=()=>{
//     const name= usernameTextField.value;//we will get the value that got store in the input box and when click on add the value stores in the name
//     userArray.push({'name':name});//this stores the "name" value in the userArray temporarly
//     SaveInfo(userArray);
//     usernameTextField.value='';
// }

// //for saving our data
// function SaveInfo(userArray){
//       let Obj= JSON.stringify(userArray);
//     localStorage.setItem('users',Obj);
//     console.log(localStorage.setItem('users',Obj));
//     DisplayInfo();
    
// }

// //for displaying the data
// function DisplayInfo(){

//     let statement='';

//     userArray.forEach(user,i=>{

//         statement+=` <tr>
//         <th scope=${i+1}>1</th>
//         <td>${user.value}</td>
//         <td><i class="btn btn-info text-white fa fa-edit"></i><i class="btn text-white fa fa-trash btn-danger mx-2"></i></td>
//       </tr>`;

//     });
//     recordsdisplay.innerHTML=statement;
// }

// function EditInfo(){

// }

// function DeleteInfo(){

// }