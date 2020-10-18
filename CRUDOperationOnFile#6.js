  //  ======================================================

  // 1 : create a folder and name it munsigCrudOnFile
  // 2 : create a file and name it bio.txt and store data into it
  // 3 : add more data into the same file at the end of existing data.
  // 4 : read the data without getting biffer data at fist 
  // 5 : rename the file 
  // 6 : now delete both file and folder 

  //SOLUTION :
  // 1 : create a folder and name it munsigCrudOnFile
  const fs = require('fs');
  fs.mkdirSync("munsigCrudOnFile");

  // 2 : create a file and name it bio.txt and store data into it
  fs.writeFileSync("munsigCrudOnFile/bio.txt", "hi here ! my name is munsif .");

  // 3 : add more data into the same file at the end of existing data.
  fs.appendFileSync("munsifCrudOnFile/bio.txt", " I am appending data.");

  // 4 : read the data without getting biffer data at fist 
  const bufferData = fs.readFileSync("munsifCrudOnFile/bio.txt");
  console.log(bufferData);
  //converting to string
  const result = bufferData.toString();
  console.log(result);

  // 5 : rename the file 
  fs.renameSync("munsifCrudOnFile/bio.txt", "munsifCrudOnFile/myBio.txt");

  // 6 : now delete both file and folder 
  fs.unlinkSync("munsifCrudOnFile/myBio.txt"); //deleting file inside folder
  fs.rmdirSync("munsifCrudOnFile"); //deleting a folder.

  // ========================================================