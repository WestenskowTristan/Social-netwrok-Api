const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// /api/Thoughts
router.route("/").get(getAllThoughts).post(createThought);

// /api/Thoughts/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").put(addReaction);

router.route("/:id/reaction/:reactionId").delete(deleteReaction);

module.exports = router;
