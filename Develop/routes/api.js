const router = require("express").Router();
const Workouts = require("../models/workouts.js");

router.get("/api/workouts", function(req, res) {
    Workouts.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.post("/api/workouts", function(req, res) {
    Workouts.create({})
        .then((data) => res.json(data))
        .catch((err) => {
            res.json(err);
        });
});

router.get("/api/workouts/range", function(req, res) {
    Workouts.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.post("/api/workouts/range", function(req, res) {
    Workouts.create({})
        .then((data) => res.json(data))
        .catch((err) => {
            res.json(err);
        });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workouts.findByIdAndUpdate(params.id, { $push: { exercises: body } })
        .then((data) => res.json(data))
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;