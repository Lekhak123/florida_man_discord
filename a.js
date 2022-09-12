const {fman} = require("./index.js");

async function f_man(month, date) {
    let a = await fman(month, date);
    return a;
}



const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const d = new Date();
let date = ("0" + d.getDate()).slice(-2)
let month = monthNames[d.getMonth()];
async function aa(){
let aaa = await f_man(month, date);

let msg = `https://${aaa[0]}
  ${aaa[1]}`

  var URL = `https://discordapp.com/api/webhooks/${webhook.id}/${webhook.token}`;

  fetch(URL, {
       "method":"POST",
       "headers": {"Content-Type": "application/json"},
       "body": JSON.stringify({
          "content":msg
        })
  
      })
      .then(res=> console.log(res))
      .catch(err => console.error(err));

}

aa();