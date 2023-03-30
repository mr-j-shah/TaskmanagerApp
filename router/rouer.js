const express = require("express"); 
const router = express.Router();

const { updateTask,getAllTask, deleteTask, getTask ,creatTask } = require("../controller/controller");

router.route("/").post(creatTask);
router.route("/:id").patch(updateTask).get(getTask).delete(deleteTask);
router.route("/userid/:id").get(getAllTask);

module.exports = router;