const express = require("express");
const route = express.Router();
const admincontroller = require("../../app/controllers/admin/AdminController");

// acount
route.get("/login", admincontroller.sign_in);
route.get("/resgister", admincontroller.sign_up);

// courses
route.get("/creater", admincontroller.creater_item);
route.get("/editcourse/:id", admincontroller.edit_course);
// save data create course
route.post("/store", admincontroller.store);
// ListCourses
route.get("/list_courses", admincontroller.list_course);
// update coures
route.put("/updatecourse/:id", admincontroller.update);
// Xóa khóa học
route.delete("/deletecourse/:id", admincontroller.destroy);
// xóa vĩnh viễn
route.delete("/force/deletecourse/:id", admincontroller.forceDestroy);
// trash courses
route.get("/trash", admincontroller.showscoursedelete);
// restore
route.patch("/restore/:id", admincontroller.restoreCourses);
// select all form
route.post("/courses/handle-form-actions", admincontroller.handleFormActions);

// trang home
route.get("/", admincontroller.index);
module.exports = route;
