// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '9532a63e-f2eb-4649-bb23-5ed01077ce80',
    name: 'franks-official-test-sub',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westcentralus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName?api-version=2017-10-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '303',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '99f428d3-1394-40ed-b1ba-156b3b50541a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '881f35da-c543-4dc1-beac-04a7daffe5e4',
  'x-ms-routing-request-id': 'WESTEUROPE:20171005T115948Z:881f35da-c543-4dc1-beac-04a7daffe5e4',
  date: 'Thu, 05 Oct 2017 11:59:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName?api-version=2017-10-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '303',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '99f428d3-1394-40ed-b1ba-156b3b50541a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '881f35da-c543-4dc1-beac-04a7daffe5e4',
  'x-ms-routing-request-id': 'WESTEUROPE:20171005T115948Z:881f35da-c543-4dc1-beac-04a7daffe5e4',
  date: 'Thu, 05 Oct 2017 11:59:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName?api-version=2017-10-01', '*')
  .reply(201, "{\r\n  \"name\": \"securityRulesDefaultName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName\",\r\n  \"etag\": \"W/\\\"d526584c-73e7-4b28-9c76-abaff0d32366\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"protocol\": \"*\",\r\n    \"sourcePortRange\": \"*\",\r\n    \"destinationPortRange\": \"80\",\r\n    \"sourceAddressPrefix\": \"*\",\r\n    \"destinationAddressPrefix\": \"*\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 1500,\r\n    \"direction\": \"Inbound\",\r\n    \"sourcePortRanges\": [],\r\n    \"destinationPortRanges\": [],\r\n    \"sourceAddressPrefixes\": [],\r\n    \"destinationAddressPrefixes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '739',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '7f4e04f4-1b18-4ea1-9edd-2deb85028579',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westcentralus/operations/7f4e04f4-1b18-4ea1-9edd-2deb85028579?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'bf0842dd-ed9d-4dec-a9cd-c388d0da8d10',
  'x-ms-routing-request-id': 'WESTEUROPE:20171005T115949Z:bf0842dd-ed9d-4dec-a9cd-c388d0da8d10',
  date: 'Thu, 05 Oct 2017 11:59:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName?api-version=2017-10-01', '*')
  .reply(201, "{\r\n  \"name\": \"securityRulesDefaultName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName\",\r\n  \"etag\": \"W/\\\"d526584c-73e7-4b28-9c76-abaff0d32366\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"protocol\": \"*\",\r\n    \"sourcePortRange\": \"*\",\r\n    \"destinationPortRange\": \"80\",\r\n    \"sourceAddressPrefix\": \"*\",\r\n    \"destinationAddressPrefix\": \"*\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 1500,\r\n    \"direction\": \"Inbound\",\r\n    \"sourcePortRanges\": [],\r\n    \"destinationPortRanges\": [],\r\n    \"sourceAddressPrefixes\": [],\r\n    \"destinationAddressPrefixes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '739',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '7f4e04f4-1b18-4ea1-9edd-2deb85028579',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westcentralus/operations/7f4e04f4-1b18-4ea1-9edd-2deb85028579?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'bf0842dd-ed9d-4dec-a9cd-c388d0da8d10',
  'x-ms-routing-request-id': 'WESTEUROPE:20171005T115949Z:bf0842dd-ed9d-4dec-a9cd-c388d0da8d10',
  date: 'Thu, 05 Oct 2017 11:59:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westcentralus/operations/7f4e04f4-1b18-4ea1-9edd-2deb85028579?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '85467cba-1708-42a3-88d8-e5372d5267c6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'f74270bc-22cb-490a-847b-aebfde523d58',
  'x-ms-routing-request-id': 'WESTEUROPE:20171005T120020Z:f74270bc-22cb-490a-847b-aebfde523d58',
  date: 'Thu, 05 Oct 2017 12:00:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westcentralus/operations/7f4e04f4-1b18-4ea1-9edd-2deb85028579?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '85467cba-1708-42a3-88d8-e5372d5267c6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'f74270bc-22cb-490a-847b-aebfde523d58',
  'x-ms-routing-request-id': 'WESTEUROPE:20171005T120020Z:f74270bc-22cb-490a-847b-aebfde523d58',
  date: 'Thu, 05 Oct 2017 12:00:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"securityRulesDefaultName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName\",\r\n  \"etag\": \"W/\\\"200e80bf-61b8-4231-b036-82e4ad4cea33\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"protocol\": \"*\",\r\n    \"sourcePortRange\": \"*\",\r\n    \"destinationPortRange\": \"80\",\r\n    \"sourceAddressPrefix\": \"*\",\r\n    \"destinationAddressPrefix\": \"*\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 1500,\r\n    \"direction\": \"Inbound\",\r\n    \"sourcePortRanges\": [],\r\n    \"destinationPortRanges\": [],\r\n    \"sourceAddressPrefixes\": [],\r\n    \"destinationAddressPrefixes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '740',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"200e80bf-61b8-4231-b036-82e4ad4cea33"',
  'x-ms-request-id': '8c009afb-17a4-4b21-99ab-59184c42f7c0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '657d105e-3f62-4eba-bfff-18f723d278d3',
  'x-ms-routing-request-id': 'WESTEUROPE:20171005T120021Z:657d105e-3f62-4eba-bfff-18f723d278d3',
  date: 'Thu, 05 Oct 2017 12:00:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"securityRulesDefaultName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName\",\r\n  \"etag\": \"W/\\\"200e80bf-61b8-4231-b036-82e4ad4cea33\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"protocol\": \"*\",\r\n    \"sourcePortRange\": \"*\",\r\n    \"destinationPortRange\": \"80\",\r\n    \"sourceAddressPrefix\": \"*\",\r\n    \"destinationAddressPrefix\": \"*\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 1500,\r\n    \"direction\": \"Inbound\",\r\n    \"sourcePortRanges\": [],\r\n    \"destinationPortRanges\": [],\r\n    \"sourceAddressPrefixes\": [],\r\n    \"destinationAddressPrefixes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '740',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"200e80bf-61b8-4231-b036-82e4ad4cea33"',
  'x-ms-request-id': '8c009afb-17a4-4b21-99ab-59184c42f7c0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '657d105e-3f62-4eba-bfff-18f723d278d3',
  'x-ms-routing-request-id': 'WESTEUROPE:20171005T120021Z:657d105e-3f62-4eba-bfff-18f723d278d3',
  date: 'Thu, 05 Oct 2017 12:00:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"securityRulesDefaultName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName\",\r\n  \"etag\": \"W/\\\"200e80bf-61b8-4231-b036-82e4ad4cea33\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"protocol\": \"*\",\r\n    \"sourcePortRange\": \"*\",\r\n    \"destinationPortRange\": \"80\",\r\n    \"sourceAddressPrefix\": \"*\",\r\n    \"destinationAddressPrefix\": \"*\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 1500,\r\n    \"direction\": \"Inbound\",\r\n    \"sourcePortRanges\": [],\r\n    \"destinationPortRanges\": [],\r\n    \"sourceAddressPrefixes\": [],\r\n    \"destinationAddressPrefixes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '740',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"200e80bf-61b8-4231-b036-82e4ad4cea33"',
  'x-ms-request-id': 'aa7a9026-e6e9-4beb-ab0a-b20b64ddb835',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'bce946aa-388a-4dc1-b662-63b12c7b3808',
  'x-ms-routing-request-id': 'WESTEUROPE:20171005T120022Z:bce946aa-388a-4dc1-b662-63b12c7b3808',
  date: 'Thu, 05 Oct 2017 12:00:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"securityRulesDefaultName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName\",\r\n  \"etag\": \"W/\\\"200e80bf-61b8-4231-b036-82e4ad4cea33\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"protocol\": \"*\",\r\n    \"sourcePortRange\": \"*\",\r\n    \"destinationPortRange\": \"80\",\r\n    \"sourceAddressPrefix\": \"*\",\r\n    \"destinationAddressPrefix\": \"*\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 1500,\r\n    \"direction\": \"Inbound\",\r\n    \"sourcePortRanges\": [],\r\n    \"destinationPortRanges\": [],\r\n    \"sourceAddressPrefixes\": [],\r\n    \"destinationAddressPrefixes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '740',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"200e80bf-61b8-4231-b036-82e4ad4cea33"',
  'x-ms-request-id': 'aa7a9026-e6e9-4beb-ab0a-b20b64ddb835',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'bce946aa-388a-4dc1-b662-63b12c7b3808',
  'x-ms-routing-request-id': 'WESTEUROPE:20171005T120022Z:bce946aa-388a-4dc1-b662-63b12c7b3808',
  date: 'Thu, 05 Oct 2017 12:00:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName?api-version=2017-10-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westcentralus/operationResults/8546938f-f789-4cbf-8883-fc12e09cc06c?api-version=2017-10-01',
  'retry-after': '10',
  'x-ms-request-id': '8546938f-f789-4cbf-8883-fc12e09cc06c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westcentralus/operations/8546938f-f789-4cbf-8883-fc12e09cc06c?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '5fc6bd24-35d8-49e3-b8c5-5f7b2a04bcac',
  'x-ms-routing-request-id': 'WESTEUROPE:20171005T120023Z:5fc6bd24-35d8-49e3-b8c5-5f7b2a04bcac',
  date: 'Thu, 05 Oct 2017 12:00:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName?api-version=2017-10-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westcentralus/operationResults/8546938f-f789-4cbf-8883-fc12e09cc06c?api-version=2017-10-01',
  'retry-after': '10',
  'x-ms-request-id': '8546938f-f789-4cbf-8883-fc12e09cc06c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westcentralus/operations/8546938f-f789-4cbf-8883-fc12e09cc06c?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '5fc6bd24-35d8-49e3-b8c5-5f7b2a04bcac',
  'x-ms-routing-request-id': 'WESTEUROPE:20171005T120023Z:5fc6bd24-35d8-49e3-b8c5-5f7b2a04bcac',
  date: 'Thu, 05 Oct 2017 12:00:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westcentralus/operations/8546938f-f789-4cbf-8883-fc12e09cc06c?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '20db2bc5-ea35-4f2f-bc2c-0b2f00017357',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'a199b08a-01a8-4b2c-b6f5-ad63622cc793',
  'x-ms-routing-request-id': 'WESTEUROPE:20171005T120054Z:a199b08a-01a8-4b2c-b6f5-ad63622cc793',
  date: 'Thu, 05 Oct 2017 12:00:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westcentralus/operations/8546938f-f789-4cbf-8883-fc12e09cc06c?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '20db2bc5-ea35-4f2f-bc2c-0b2f00017357',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'a199b08a-01a8-4b2c-b6f5-ad63622cc793',
  'x-ms-routing-request-id': 'WESTEUROPE:20171005T120054Z:a199b08a-01a8-4b2c-b6f5-ad63622cc793',
  date: 'Thu, 05 Oct 2017 12:00:54 GMT',
  connection: 'close' });
 return result; }]];