const Property = require("./../models/propertyModel");

const getAllProperties = async (req, res) => {
  try {
    const property = await Property.find();
    res.status(200).send(property);
  } catch (error) {
    res.status(500).send(error);
  }
};

const postProperty = async (req, res) => {
  try {
    const obj = req.body;
    const newProperty = await Property(obj);
    newProperty.save();
    res.status(201).send(newProperty);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      res.status(404).send("user not found");
    }
    res.status(200).send(property);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deletePropertyById = async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property) {
      res.status(404).send("user not found");
    }
    res.status(200).send(property);
  } catch (error) {
    res.status(500).send(error);
  }
};

const patchPropertyById = async (req, res) => {
  try {
    const property = await Property.findByIdAndUpdate(req.params.id, req.body);
    if (!property) {
      res.status(200).send(property);
    }
    res.status(200).send(error);
  } catch (error) {
    res.status(400).send(console.error());
  }
};

const putPropertyById = async (req, res) => {
  try {
    const property = await Property.findOneAndReplace(
      { _id: req.params.id },
      req.body
    );
    if (!property) {
      res.status(404).send("user not found");
    }
    res.status(200).send(property);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  getAllProperties,
  postProperty,
  getPropertyById,
  deletePropertyById,
  patchPropertyById,
  putPropertyById,
};
