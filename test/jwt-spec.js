const chai = require("chai");
const expect = chai.expect;
const assert = require("assert");

require('dotenv').config();
const jsonwebtoken = require('jsonwebtoken');
const shell = require("shelljs");

const { parseOutput } = require("./utils/parse-output.js");

describe("Signing, decoding, and verifying a JWT", function() {
    let resultHash;

    before(function(){
        const fileResult = shell.exec("npm run run-test-file");
        resultHash = parseOutput(fileResult);
    });

    it("successfully signs (creates) a JWT with header, payload, and signature", function() {
        expect(resultHash.jwtComponents).to.have.length(3);
    });

    it("successfully decodes a JWT payload", function() {
        const decodedPayload = jsonwebtoken.decode(resultHash.jwt);
        expect(resultHash.decodedPayload).to.include(decodedPayload.email);
    });

    it("successfully verifies a JWT", function() {
        assert.strictEqual(resultHash.decodedPayload, resultHash.verifiedPayload);
    });
});
