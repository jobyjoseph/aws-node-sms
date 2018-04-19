const AWS = require('aws-sdk');

const credentials = new AWS.SharedIniFileCredentials({
  profile: 'my-account'
});
AWS.config.credentials = credentials;

AWS.config.region = 'ap-southeast-1'; // Singapore

var sns = new AWS.SNS();
var params = {
  Message: 'Hi, This is a message through AWS',
  MessageStructure: 'string',
  PhoneNumber: '00919999988888'
};

sns.publish(params, function(err, data) {
  if (err) console.log(err, err.stack);
  else console.log(data); // successful response
});
