var axios = require('axios');
var data = JSON.stringify({
    "firstname": "Anna",
    "lastname": "M",
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2017-12-31",
        "checkout": "2019-01-04"
    },
    "additionalneeds": "Breakfast"
});

var config = {
    method: 'post',
    url: 'https://restful-booker.herokuapp.com/booking',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM='
    },
    data : data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
