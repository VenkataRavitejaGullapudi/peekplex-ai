export const checkLoginValid = (email, password, fullName) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const isEmailValid = emailRegex.test(email);

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;
  const isPasswordValid = passwordRegex.test(password);

  const nameRegex = /^[a-z A-Z]{3,12}$/g;
  const isNameValid = nameRegex.test(fullName);

  return !isEmailValid
    ? { valid: false, message: "Email Id is not valid" }
    : !isPasswordValid
    ? { valid: false, message: "Password is not valid" }
    : (fullName !== undefined) & !isNameValid
    ? { valid: false, message: "Full Name is not valid" }
    : { valid: true, message: "" };
};
