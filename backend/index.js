require("dotenv").config();

const app = require("./src/app");

const PORT = process.env.PORT || 5500;

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.warn(`Server is running on port ${PORT}`);
  }
});
