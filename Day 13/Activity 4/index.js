// const _ = require("lodash");
import _ from "lodash";
import axios from "axios";

let toLowerCase = _.lowerCase("VARUN");
console.log(toLowerCase);

axios
  .get("https://randomuser.me/api/")
  .then((res) => console.log(res.data.results[0].name))
  .catch((e) => console.log(e));
