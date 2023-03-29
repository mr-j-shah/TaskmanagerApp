const express = require("express"); 
const router = express.Router();

const { updateTask, deleteTask, getAllTask, getTask ,creatTask } = require("../controller/controller");

router.route("/").get(getAllTask).post(creatTask);
router.route("/:id").patch(updateTask).get(getTask).delete(deleteTask);

module.exports = router;