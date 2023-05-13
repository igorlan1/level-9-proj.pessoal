import { Router } from "./router.js";

const router = new Router();
router.add("/", "/pages/home.html");
router.add("/about", "/pages/about.html");
router.add("/doubts", "/pages/doubts.html");
router.add("/signup", "/pages/signup.html");

router.handle();
window.onpopstate = () => router.handle();
window.route = () => router.route();
