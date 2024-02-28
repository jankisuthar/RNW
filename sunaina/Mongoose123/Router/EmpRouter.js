const express = require("express");
const {
  getAllEmp,
  addEmp,
  updateEmp,
  deleteEmp,
  ui,
} = require("../Controller/EmpController");
const { findByIdAndDelete } = require("../Database/model");
const upload = require("../util/fileUpload");

const router = express.Router();

router.get("/emp", async (req, res) => {
  let employee = await getAllEmp();
  res.cookie("name", "data").send(employee);
  console.log(req.cookies.name);
});

// router.post("/emp", upload.single("profile"), async (req, res) => {
//   let employee = await addEmp({
//     username: req.body.username,
//     gender: req.body.gender,
//     profile: req.file.filename
//   });

//   return res.send({
//     data: employee,
//   });
// });

// router.post("/emp", upload.array("profile", 4), async (req, res) => {
//   let employee = await addEmp({
//     username: req.body.username,
//     gender: req.body.gender,
//     profile: req.files,
//   });

//   return res.send({
//     data: employee,
//   });
// });

router.post(
  "/emp",
  upload.fields([
    { name: "profile1", maxCount: 1 },
    { name: "profile2", maxCount: 8 },
  ]),
  async (req, res) => {
    const fileNames = req.files["profile1"].map((file)=>file.filename)
    const profile2fileNames = req.files["profile2"].map((file)=>file.filename)
    let employee = await addEmp({
      username: req.body.username,
      gender: req.body.gender,
      profile1: fileNames,
      profile2:profile2fileNames
    });

    return res.send({
      data: employee,
    });
  }
);

router.patch("/emp/:id", async (req, res) => {
  let employee = await updateEmp(req.params.id, req.body);

  return res.send({
    data: employee,
  });
});

router.delete("/emp/:id", async (req, res) => {
  try {
    let employee = await deleteEmp(req.params.id);

    return res.send({
      data: employee,
    });
  } catch (error) {
    return res.status(404).send({
      msg: "unexpected",
    });
  }
});

router.get("/", ui);

module.exports = router;
