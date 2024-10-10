import inquirer from 'inquirer'
import  qr from "qr-image";
import fs from "fs";


inquirer
  .prompt([
    
    {"message" : " Type your URL" ,
      "name" : "URL"  
    }
  ])
  .then((answers) => {
  
     const url = answers.URL;
     
     var qr_svg = qr.image(url);
     qr_svg.pipe(fs.createWriteStream('qr_img.png'));
 

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

/* 

3. Create a txt file to save the user input using the native fs node module.
*/
