function parseOutput(fileString) {
    let resultHash = {};

    let parsed = fileString.trim()
        .replace(/{\n/g, "{")
        .replace(/,\n/g, ",")
        .replace(/\n}/g, "}")
        .replace(/\n/g, "xxxxx").split("xxxxx");

    resultHash.jwt = parsed[3].trim().slice(5);
    resultHash.jwtComponents = resultHash.jwt.split(".");
    resultHash.encodedPayload = resultHash.jwtComponents[1];
    resultHash.decodedPayload = parsed[4].trim().slice(9);
    resultHash.verifiedPayload = parsed[5].trim().slice(18);

    return resultHash;
}

module.exports = { parseOutput };
