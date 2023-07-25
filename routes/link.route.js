import { Router } from "express";
import { createLink, getLink, getLinks } from "../controllers/link.controller.js";
import { requireToken } from "../middlewares/requireToken.js";
import { bodyLinkValidator } from "../middlewares/validatorManager.js";
const router = Router()

// GET /api/v1/ Links  varios links
//GET /api/v1/Links/:id 1 solo links
//POST /api/v1/links   crear link
//PATCH/PUT /api/v1/:ID   update link
// DELETE /api/v1/links/:id

router.get('/', requireToken ,getLinks);
router.get("/:id", requireToken, getLink)
router.post('/', requireToken, bodyLinkValidator ,createLink);

export default router;
