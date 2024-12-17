// configure environment - DO NOT MODIFY
require('dotenv').config();

// Import package

const jwt = require('jsonwebtoken');

// Define variables - DO NOT MODIFY

// 1. Sign (create) a JWT containing your email address
let token; // DO NOT MODIFY! Re-assign the token variable below.

const payloadData = { email: "tomlhennessy@outlook.com" };

token = jwt.sign(
    payloadData,
    process.env.SECRET_KEY,
    { expiresIn: '1h' }
)

// See the JWT in the console - DO NOT MODIFY
console.log('JWT:', token);

// 2. Decode a JWT Payload

let payload; // DO NOT MODIFY! Re-assign the payload variable below.

payload = jwt.decode(token);

// See the decoded payload in the console - DO NOT MODIFY
console.log('Payload:', payload);

// 3. Verify a JWT

let verifiedPayload; // DO NOT MODIFY! Re-assign the verifiedPayload variable below.

verifiedPayload = jwt.verify(token, process.env.SECRET_KEY);

// See the verified payload in the console - DO NOT MODIFY
console.log('Verified Payload:', verifiedPayload);

// (Optional) Bonus: Catch Error With Invalid Signature
// Generate an alternate secret key and use it
//    To "try" to get the payload using jwt.verify
//    Then "catch" the error and log it to the console.

try {
    jwt.verify(token, 'wrong-secret');
} catch (err) {
    console.log("Error:", err.message);
}

// (Optional) Bonus: Catch Error With Expired Token
// First, set the token's expiration (above) to 1 second
// Second, add a setTimeout longer than 1 second
//    To "try" to get the payload using jwt.verify (with proper secret)
//    Then "catch" the error and log it to the console

token = jwt.sign(
    { email: "tomlhennessy@outlook.com"},
    process.env.SECRET_KEY,
    { expiresIn: '1s' }
);

setTimeout(() => {
    try {
        jwt.verify(token, process.env.SECRET_KEY);
    } catch (err) {
        console.log("Error:", err.message);
    }
}, 2000);
