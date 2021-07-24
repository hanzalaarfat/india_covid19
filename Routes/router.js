const router = require("express").Router();
const controller = require("../Controller/controller");
const request = require("request");

// router.get("/api", (req, res) => {
//   request(
//     `https://api.covid19india.org/travel_history.json
//   `,
//     function(error, res, body) {
//       if (error) {
//         Console.log("somthin went wrong");
//         console.log(error);
//       } else {
//         if (res.statusCode == 200) {
//           console.log(body);
//         }
//       }
//     }
//   );
// });
router.get("/", controller.Homepage);
router.get("/india_corona", controller.Corona);
module.exports = router;
