const fs = require("fs");

if (fs.existsSync("./FSModule/storage-files")) {
  console.log("directory exists");
} else {
  fs.mkdir("./FSModule/storage-files", (err) => {
    if (err) {
      throw err;
    }

    console.log("directory created");
  });
}
