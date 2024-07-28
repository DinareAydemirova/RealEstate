const express = require("express")
const { getAllUsers, getUserById, createUser, updateUser, deleteUser, getCurrentUser } = require("../controllers/userController")
const { verifyAccess } = require("../middleware/authMiddleware")

const UserRouter = express.Router()

UserRouter.get("/", getAllUsers)
UserRouter.get("/:id", getUserById)
UserRouter.post("/", verifyAccess(["Admin","User"]), createUser)
UserRouter.put("/:id", verifyAccess(["Admin", "User"]), updateUser);
UserRouter.delete("/:id", verifyAccess(["Admin"]), deleteUser);
UserRouter.get("/me", verifyAccess(["Admin", "User"]), getCurrentUser);



module.exports = UserRouter