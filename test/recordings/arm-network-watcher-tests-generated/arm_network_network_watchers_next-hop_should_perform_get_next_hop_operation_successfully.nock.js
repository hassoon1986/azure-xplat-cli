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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westcentralus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"networkWatcherName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName\",\r\n  \"etag\": \"W/\\\"d95ed6b2-3df3-4c16-98f0-cb1fdf437a16\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '429',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"d95ed6b2-3df3-4c16-98f0-cb1fdf437a16"',
  'x-ms-request-id': 'a359959e-3a4a-47ba-ba87-c0b6a5007471',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '2034961a-5b0c-4a75-847f-af27b93c3cc2',
  'x-ms-routing-request-id': 'WESTEUROPE:20170815T110940Z:2034961a-5b0c-4a75-847f-af27b93c3cc2',
  date: 'Tue, 15 Aug 2017 11:09:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"networkWatcherName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName\",\r\n  \"etag\": \"W/\\\"d95ed6b2-3df3-4c16-98f0-cb1fdf437a16\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '429',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"d95ed6b2-3df3-4c16-98f0-cb1fdf437a16"',
  'x-ms-request-id': 'a359959e-3a4a-47ba-ba87-c0b6a5007471',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '2034961a-5b0c-4a75-847f-af27b93c3cc2',
  'x-ms-routing-request-id': 'WESTEUROPE:20170815T110940Z:2034961a-5b0c-4a75-847f-af27b93c3cc2',
  date: 'Tue, 15 Aug 2017 11:09:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName/nextHop?api-version=2017-06-01', '*')
  .reply(200, "{\r\n  \"nextHopType\": \"None\",\r\n  \"routeTableId\": \"System Route\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '64',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operationResults/0ffd0fc4-e3f8-484f-9c3d-fd1c159f5a19?api-version=2017-06-01',
  'x-ms-request-id': '0ffd0fc4-e3f8-484f-9c3d-fd1c159f5a19',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'ac30e12f-9b76-4f6c-8766-c924f07d8b6e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170815T110947Z:ac30e12f-9b76-4f6c-8766-c924f07d8b6e',
  date: 'Tue, 15 Aug 2017 11:09:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName/nextHop?api-version=2017-06-01', '*')
  .reply(200, "{\r\n  \"nextHopType\": \"None\",\r\n  \"routeTableId\": \"System Route\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '64',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operationResults/0ffd0fc4-e3f8-484f-9c3d-fd1c159f5a19?api-version=2017-06-01',
  'x-ms-request-id': '0ffd0fc4-e3f8-484f-9c3d-fd1c159f5a19',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'ac30e12f-9b76-4f6c-8766-c924f07d8b6e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170815T110947Z:ac30e12f-9b76-4f6c-8766-c924f07d8b6e',
  date: 'Tue, 15 Aug 2017 11:09:47 GMT',
  connection: 'close' });
 return result; }]];