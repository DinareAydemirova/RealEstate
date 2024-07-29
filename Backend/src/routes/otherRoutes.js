const express = require("express")
const router = express.Router()
const propertyController= require("../controllers/propertiesController")


router.get("/properties", propertyController.getAllProperties)
router.post("/properties", propertyController.postProperty)
router.get("/properties/:id", propertyController.getPropertyById)
router.delete("/properties/:id", propertyController.deletePropertyById)
router.put("/properties/:id", propertyController.putPropertyById)
router.patch("/properties/:id", propertyController.patchPropertyById)


module.exports=router