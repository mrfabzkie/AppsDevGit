let obj = [
    { username: "user1", password: "password" },
  
    { username: "user2", password: "password1" },
  
    { username: "user3", password: "password2" },
  
    { username: "user4", password: "thispassword" },
  ];

  let x = prompt("Enter Username");
  let y = prompt("Enter Password");
  let z = 
  { username: x, password: y };
 


    const i = (input) => {
        if 
      ((z.username == input.username) && (z.password == input.password)){
       valid++;

        }
      }

    obj.forEach(i);
    var valid = 0;
  if(valid > 0){
  alert("Credentials are Valid");
  }else {
  alert("Credentials are Invalid");
  }
