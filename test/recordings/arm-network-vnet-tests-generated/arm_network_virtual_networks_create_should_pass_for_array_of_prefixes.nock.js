// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/arrayOfPrefixesName?api-version=2017-06-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/arrayOfPrefixesName' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '117741c3-21a6-4cf9-b99a-7dcf748c0d70',
  'x-ms-correlation-request-id': '117741c3-21a6-4cf9-b99a-7dcf748c0d70',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T104808Z:117741c3-21a6-4cf9-b99a-7dcf748c0d70',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 07 Aug 2017 10:48:07 GMT',
  connection: 'close',
  'content-length': '172' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/arrayOfPrefixesName?api-version=2017-06-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/arrayOfPrefixesName' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '117741c3-21a6-4cf9-b99a-7dcf748c0d70',
  'x-ms-correlation-request-id': '117741c3-21a6-4cf9-b99a-7dcf748c0d70',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T104808Z:117741c3-21a6-4cf9-b99a-7dcf748c0d70',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 07 Aug 2017 10:48:07 GMT',
  connection: 'close',
  'content-length': '172' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/arrayOfPrefixesName?api-version=2017-06-01', '*')
  .reply(201, "{\r\n  \"name\": \"arrayOfPrefixesName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/arrayOfPrefixesName\",\r\n  \"etag\": \"W/\\\"db86b221-8424-4c10-bd7b-e961640a681a\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"50c5f19b-9603-4b23-8799-7a17af915311\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\",\r\n        \"11.0.0.0/16\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '618',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '7ce338d0-c0f7-4fbf-b22f-b3ccbf1ce412',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/7ce338d0-c0f7-4fbf-b22f-b3ccbf1ce412?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '765fcef7-045c-4cf1-b7d1-9af39c87c9a2',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T104811Z:765fcef7-045c-4cf1-b7d1-9af39c87c9a2',
  date: 'Mon, 07 Aug 2017 10:48:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/arrayOfPrefixesName?api-version=2017-06-01', '*')
  .reply(201, "{\r\n  \"name\": \"arrayOfPrefixesName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/arrayOfPrefixesName\",\r\n  \"etag\": \"W/\\\"db86b221-8424-4c10-bd7b-e961640a681a\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"50c5f19b-9603-4b23-8799-7a17af915311\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\",\r\n        \"11.0.0.0/16\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '618',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '7ce338d0-c0f7-4fbf-b22f-b3ccbf1ce412',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/7ce338d0-c0f7-4fbf-b22f-b3ccbf1ce412?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '765fcef7-045c-4cf1-b7d1-9af39c87c9a2',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T104811Z:765fcef7-045c-4cf1-b7d1-9af39c87c9a2',
  date: 'Mon, 07 Aug 2017 10:48:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/7ce338d0-c0f7-4fbf-b22f-b3ccbf1ce412?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c00746b4-2853-4e07-8e01-6e87ea6bf971',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'd77c3e2a-616c-4261-89c9-142ce3776e11',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T104843Z:d77c3e2a-616c-4261-89c9-142ce3776e11',
  date: 'Mon, 07 Aug 2017 10:48:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/7ce338d0-c0f7-4fbf-b22f-b3ccbf1ce412?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c00746b4-2853-4e07-8e01-6e87ea6bf971',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'd77c3e2a-616c-4261-89c9-142ce3776e11',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T104843Z:d77c3e2a-616c-4261-89c9-142ce3776e11',
  date: 'Mon, 07 Aug 2017 10:48:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/arrayOfPrefixesName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"arrayOfPrefixesName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/arrayOfPrefixesName\",\r\n  \"etag\": \"W/\\\"5acab0ff-83eb-437a-acb0-a2002a914c55\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"50c5f19b-9603-4b23-8799-7a17af915311\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\",\r\n        \"11.0.0.0/16\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '619',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"5acab0ff-83eb-437a-acb0-a2002a914c55"',
  'x-ms-request-id': '3ab87e12-3b10-4d73-95a8-c2682dee825e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'a923d4de-d411-42f9-9815-da5c140ffe83',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T104844Z:a923d4de-d411-42f9-9815-da5c140ffe83',
  date: 'Mon, 07 Aug 2017 10:48:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/arrayOfPrefixesName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"arrayOfPrefixesName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/arrayOfPrefixesName\",\r\n  \"etag\": \"W/\\\"5acab0ff-83eb-437a-acb0-a2002a914c55\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"50c5f19b-9603-4b23-8799-7a17af915311\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\",\r\n        \"11.0.0.0/16\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '619',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"5acab0ff-83eb-437a-acb0-a2002a914c55"',
  'x-ms-request-id': '3ab87e12-3b10-4d73-95a8-c2682dee825e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'a923d4de-d411-42f9-9815-da5c140ffe83',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T104844Z:a923d4de-d411-42f9-9815-da5c140ffe83',
  date: 'Mon, 07 Aug 2017 10:48:44 GMT',
  connection: 'close' });
 return result; }]];