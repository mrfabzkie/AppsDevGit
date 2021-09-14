const data = [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male",
    },
    {
      name: "C-3PO",
      height: "167",
      mass: "75",
      hair_color: "n/a",
      skin_color: "gold",
      eye_color: "yellow",
      birth_year: "112BBY",
      gender: "n/a",
    },
    {
      name: "R2-D2",
      height: "96",
      mass: "32",
      hair_color: "n/a",
      skin_color: "white, blue",
      eye_color: "red",
      birth_year: "33BBY",
      gender: "n/a",
    },
    {
      name: "Darth Vader",
      height: "202",
      mass: "136",
      hair_color: "none",
      skin_color: "white",
      eye_color: "yellow",
      birth_year: "41.9BBY",
      gender: "male",
    },
    {
      name: "Leia Organa",
      height: "150",
      mass: "49",
      hair_color: "brown",
      skin_color: "light",
      eye_color: "brown",
      birth_year: "19BBY",
      gender: "female",
    },
  ];

  var arr = [];
  var filtered = [];
  
  let choose = parseInt(
    prompt(
      "1. Gender : Male characters\n 2. Gender : Female characters\n 3. Gender : N/A characters \n 4. characters whose height is greater than 150"
    )
  );

  // const males = (item) => {
  //   if (item.gender == "male") {
  //     return item.name;
  //   }
  // };

const males = (where => { if(where.gender == "male"){
    return where.name;
  }

});
const females = (where) => {if(where.gender == "female"){
    return where.name;

}
}; 
const NA_char = (where =>{if(where.gender == "n/a"){
  return where.name;
}
  
});
const height = (where =>{if(where.height > 150){}
  return where.name;
});

const bot_undefined = (where => { if (typeof where !== "undefined") {
    return where;
  }
})  



switch(choose){
  case 1:
      arr = data.map(males);filtered = arr.filter(bot_undefined);
      alert(filtered);
   break;

   case 2:
    arr = data.map(females);filtered = arr.filter(bot_undefined);
     alert(filtered);
  break;
  case 3:
      arr = data.map(NA_char);filtered = arr.filter(bot_undefined);
    alert(filtered);
    break;

case 4:
  arr = data.map(height);filtered = arr.filter(bot_undefined);
    alert(filtered);
    break;
}
console.log(filtered);  