const fetch = require("node-fetch");
const request = require("request");

// exports.Homepage = (req, res) => {
//   res.render("index.ejs", {
//     pageTitle: "Home page",
//     path: "/"
//   });
// };

exports.Homepage = (req, resp) => {
  const option = { json: true };
  const url = `https://api.covid19india.org/raw_data.json`; //  all data k liye
  const url_active_rec = `https://api.covid19india.org/data.json `; //acitve aur recover dekhne k liye
  let filter_data = "";
  let current = "";
  request(url_active_rec, option, (error, res, body) => {
    if (error) {
      console.log("somthin went wrong");
      console.log(error);
    } else {
      if (res.statusCode == 200) {
        current = body["statewise"];
        // console.log(current);
      }
    }
  });

  request(url, option, function(error, res, body) {
    if (error) {
      console.log("somthin went wrong");
      console.log(error);
    } else {
      if (res.statusCode == 200) {
        const data = body["raw_data"];

        const filter_data20_30 = data.filter(function(val) {
          return (
            parseInt(val.agebracket) >= 20 && parseInt(val.agebracket) <= 30
          );
        });

        const filter_data31_40 = data.filter(function(val) {
          return (
            parseInt(val.agebracket) >= 30 && parseInt(val.agebracket) <= 40
          );
        });

        const filter_data41_50 = data.filter(function(val) {
          return (
            parseInt(val.agebracket) >= 41 && parseInt(val.agebracket) <= 50
          );
        });

        const filter_data51_60 = data.filter(function(val) {
          return (
            parseInt(val.agebracket) >= 51 && parseInt(val.agebracket) <= 60
          );
        });

        const filter_data60_above = data.filter(function(val) {
          return parseInt(val.agebracket) >= 61;
        });
        const filter_data_21_lss = data.filter(function(val) {
          return parseInt(val.agebracket) < 21;
        });
        const filter_data_not_mention = data.filter(function(val) {
          return val.agebracket == "";
        });
        //console.log("filterd data", filter_data_not_mention);

        filter_data = {
          "21-30": filter_data20_30,
          "31-40": filter_data31_40,
          "41-50": filter_data41_50,
          "51-60": filter_data51_60,
          "60-above": filter_data60_above,
          "20-less": filter_data_21_lss,
          "not-mention": filter_data_not_mention
        };

        // console.log(
        //   "filterdddddddddddddd data",
        //   filter_data["21-30"].length + filter_data["31-40"].length
        // );
        resp.render("index.ejs", {
          pageTitle: "Home",
          current,
          filter_data,
          path: "/"
        });
      }
    }
  });
};

// var filter_data = {
//     "21-30": [
//         {.......data.......}
//     ],
//     "31-40": []
// }

// filter_data["21-30"].length

exports.Corona = async (req, res) => {
  const apiurl = `https:api.covid19india.org/raw_data.json`;
  const res_url = await fetch(apiurl);
  const json = await res_url.json();
  console.log(json);
};
