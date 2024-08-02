import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessages); //protectRoute is adding authorization process by creating a middleware
router.post("/send/:id", protectRoute, sendMessage); 

export default router;