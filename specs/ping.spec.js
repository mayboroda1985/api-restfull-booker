const axios = require('axios');
const chai = require('chai');
const {describe} = require("mocha");
const expect = chai.expect;

describe("Ping check", () => {
    it("Should verify ping response", async() => {

        const config = {
            method: 'get',
            url: 'https://restful-booker.herokuapp.com/ping',
            headers: { }
        };

       await axios(config)
            .then(function (response) {
       console.log(response.status);
                expect(response.status).to.eql(201);
                expect(response.statusText).to.eql('Created');
            })
            // .catch(function (error) {
            //     console.log(error);
            // });
    });
});