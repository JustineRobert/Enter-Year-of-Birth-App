  //Prompt the user to enter the year of birth
  let birth = prompt("Please enter your year of Birth");
        let now = new Date();
        let age = now.getYear() - birth + 1900;

        //check if the year of birth of the user produces proper output
        if(age<18) {
          console.log("Minor");
      }
      else if(age>=18 && age<36) {
          console.log("Youth");
      }
      else { console.log("Elder");
    }