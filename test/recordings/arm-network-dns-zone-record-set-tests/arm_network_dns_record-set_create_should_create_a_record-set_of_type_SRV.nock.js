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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set3499/providers/Microsoft.Network/dnsZones/exampledns.com/SRV/set-srv?api-version=2017-09-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set3499\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/SRV\\/set-srv\",\"name\":\"set-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"cf191e88-4daa-401d-99b0-aa0e88122cd8\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-srv.exampledns.com.\",\"TTL\":3600,\"SRVRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '403',
  'content-type': 'application/json; charset=utf-8',
  etag: 'cf191e88-4daa-401d-99b0-aa0e88122cd8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '21a4620a-6c82-40b2-ab28-e80e5d8e71c9',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '72541430-762e-4066-83e0-a98c4ba2d5ae',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T131221Z:72541430-762e-4066-83e0-a98c4ba2d5ae',
  date: 'Thu, 09 Nov 2017 13:12:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set3499/providers/Microsoft.Network/dnsZones/exampledns.com/SRV/set-srv?api-version=2017-09-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set3499\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/SRV\\/set-srv\",\"name\":\"set-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"cf191e88-4daa-401d-99b0-aa0e88122cd8\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-srv.exampledns.com.\",\"TTL\":3600,\"SRVRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '403',
  'content-type': 'application/json; charset=utf-8',
  etag: 'cf191e88-4daa-401d-99b0-aa0e88122cd8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '21a4620a-6c82-40b2-ab28-e80e5d8e71c9',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '72541430-762e-4066-83e0-a98c4ba2d5ae',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T131221Z:72541430-762e-4066-83e0-a98c4ba2d5ae',
  date: 'Thu, 09 Nov 2017 13:12:20 GMT',
  connection: 'close' });
 return result; }]];