const equipmentsmodel = require("../models/equipments.model");
const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).send({
      estatus: "500",
      err: true,
      msg: "Error getting equipments.",
      cont: {
        err: Object.keys(err).length === 0 ? err.message : err,
      },
    });
  }
});

app.post("/", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).send({
      estatus: "500",
      err: true,
      msg: "Error: Error to insert the equipment",
      cont: {
        err: Object.keys(err).length === 0 ? err.message : err,
      },
    });
  }
});

app.put("/", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).send({
      estatus: "500",
      err: true,
      msg: "Error: Error updating equipment.",
      cont: {
        err: Object.keys(err).length === 0 ? err.message : err,
      },
    });
  }
});

app.delete("/", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).send({
      estatus: "500",
      err: true,
      msg: "Error: Failed to delete equipment.",
      cont: {
        err: Object.keys(err).length === 0 ? err.message : err,
      },
    });
  }
});

module.exports = app;
