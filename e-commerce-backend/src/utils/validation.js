const validater = require("validator");

const validateUser = (req) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new Error("All fields are required");
  } else if (!validater.isEmail(email)) {
    throw new Error("Email is invalid");
  } else if (password.length < 6) {
    throw new Error("Password must be at least 6 characters");
  } else if (!validater.isStrongPassword(password)) {
    throw new Error("Password is weak");
  }
};

const validateLoginUser= (req)=>{
  const {email, password}= req.body;
  if(!email || !password){
    throw new Error("All fields are required");
  }else if(!validater.isEmail(email)){
    throw new Error("Email is invalid")
  }
}

module.exports = {validateUser, validateLoginUser};
