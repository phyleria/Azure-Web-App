import { Router } from 'express';
var router = Router();
let launchTime = new Date("05/17/2002 11:00").get.Time();

/* GET home page. */
router.get('/', function(req, res) {
  let currentTime = new Date().getTime();
  let numberOfMilliseconds = parseInt(launchTime - currentTime);
  res.render('index', { title: 'Countdown to Launch', countDown: numberOfMilliseconds });
});

export default router;
