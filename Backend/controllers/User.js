const User = require("../models/User");
const z = require("zod");

//store the user
const userSignUp = async (req, res) => {
  const { firstName, lastName, email, phoneNumber } = req.body;

  //validation
  const userValidationSchema = z.object({
    firstName: z
      .string()
      .min(1, "First name is required")
      .regex(/^[^\s]+$/, "First name should not contain spaces"),
    lastName: z
      .string()
      .min(1, "Last name is required")
      .regex(/^[^\s]+$/, "Last name should not contain spaces"),
    email: z
      .string()
      .min(1, "Email is requires")
      .email("Invalid email address"),
    phoneNumber: z
      .string()
      .min(1, "Phone number is required")
      .regex(/^[6-9]\d{9}$/, "Invalid Indian phone number"),
  });

  const result = userValidationSchema.safeParse({
    firstName,
    lastName,
    email,
    phoneNumber,
  });

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: "Error occured in validation",
      error: result.error.errors,
    });
  }


  try {
    //checking if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    //Validation part using Zod

    const response = await User.create({
      firstName,
      lastName,
      email,
      phoneNumber,
    });

    res.status(200).json({
      sucess: true,
      message: "User Created Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to create the user, Internal Server Problem",
      error: err.message,
    });
  }
};

//get all Users
const userGet = async (req, res) => {
  try {
    const response = await User.find({});
    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in getting all users, Server Problem",
      error: err.message,
    });
  }
};
module.exports = { userSignUp, userGet };
