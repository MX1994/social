"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = require("../controllers/post.controller");
const router = express_1.Router();
router.route('/')
    .get(post_controller_1.getPosts)
    .post(post_controller_1.createPost);
router.route('/:postId')
    .get(post_controller_1.getPost)
    .delete(post_controller_1.deletePost)
    .put(post_controller_1.updatePost);
exports.default = router;
