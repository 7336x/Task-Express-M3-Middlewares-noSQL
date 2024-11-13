// Import the multer library, which is used for handling file uploads
const multer = require("multer");

// Configure multer storage settings using diskStorage
const storage = multer.diskStorage({
  // Set the destination for uploaded files to the "media" folder
  destination: function (req, file, cb) {
    cb(null, "media"); // The callback receives the directory name where files should be saved
  },
  // Define the filename for uploaded files
  filename: function (req, file, cb) {
    // Create a unique suffix using the current timestamp and a random number
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // Construct the filename: field name + unique suffix + original filename
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname);
  },
});

// Initialize multer with the specified storage configuration
const upload = multer({ storage: storage });

// Export the upload instance to make it available in other files
module.exports = upload;
