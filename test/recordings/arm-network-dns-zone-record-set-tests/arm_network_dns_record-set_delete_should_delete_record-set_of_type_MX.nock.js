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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set3499/providers/Microsoft.Network/dnsZones/exampledns.com/MX/set-mx?api-version=2017-09-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set3499\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/MX\\/set-mx\",\"name\":\"set-mx\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"19b4b55e-7f31-4546-a13e-c98ea3206815\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-mx.exampledns.com.\",\"TTL\":3600,\"MXRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '397',
  'content-type': 'application/json; charset=utf-8',
  etag: '19b4b55e-7f31-4546-a13e-c98ea3206815',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'fcbacbc4-ece5-4272-a472-25593544b87d',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'b456f20d-846e-43b2-b45d-8f8b3664f00e',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T131202Z:b456f20d-846e-43b2-b45d-8f8b3664f00e',
  date: 'Thu, 09 Nov 2017 13:12:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set3499/providers/Microsoft.Network/dnsZones/exampledns.com/MX/set-mx?api-version=2017-09-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set3499\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/MX\\/set-mx\",\"name\":\"set-mx\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"19b4b55e-7f31-4546-a13e-c98ea3206815\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-mx.exampledns.com.\",\"TTL\":3600,\"MXRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '397',
  'content-type': 'application/json; charset=utf-8',
  etag: '19b4b55e-7f31-4546-a13e-c98ea3206815',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'fcbacbc4-ece5-4272-a472-25593544b87d',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'b456f20d-846e-43b2-b45d-8f8b3664f00e',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T131202Z:b456f20d-846e-43b2-b45d-8f8b3664f00e',
  date: 'Thu, 09 Nov 2017 13:12:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set3499/providers/Microsoft.Network/dnsZones/exampledns.com/MX/set-mx?api-version=2017-09-01')
  .reply(200, "", { 'cache-control': 'private',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '17195905-d366-4a17-ac1a-afff582cede6',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '07c885b4-8dbf-4f81-8493-ebcf45d25ef8',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T131203Z:07c885b4-8dbf-4f81-8493-ebcf45d25ef8',
  date: 'Thu, 09 Nov 2017 13:12:02 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set3499/providers/Microsoft.Network/dnsZones/exampledns.com/MX/set-mx?api-version=2017-09-01')
  .reply(200, "", { 'cache-control': 'private',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '17195905-d366-4a17-ac1a-afff582cede6',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '07c885b4-8dbf-4f81-8493-ebcf45d25ef8',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T131203Z:07c885b4-8dbf-4f81-8493-ebcf45d25ef8',
  date: 'Thu, 09 Nov 2017 13:12:02 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set3499/providers/Microsoft.Network/dnsZones/exampledns.com/MX/set-mx?api-version=2017-09-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The resource record 'set-mx' does not exist in resource group 'xplat-test-dns-zone-record-set3499' of subscription '947d47b4-7883-4bb9-9d85-c5e8e2f572ce'.\"}", { 'cache-control': 'private',
  'content-length': '186',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '4027df12-5093-4c1f-8a89-c40367fb5ab2',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '6e080c0f-2400-4a90-97b6-f0a797f8a22e',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T131204Z:6e080c0f-2400-4a90-97b6-f0a797f8a22e',
  date: 'Thu, 09 Nov 2017 13:12:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set3499/providers/Microsoft.Network/dnsZones/exampledns.com/MX/set-mx?api-version=2017-09-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The resource record 'set-mx' does not exist in resource group 'xplat-test-dns-zone-record-set3499' of subscription '947d47b4-7883-4bb9-9d85-c5e8e2f572ce'.\"}", { 'cache-control': 'private',
  'content-length': '186',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '4027df12-5093-4c1f-8a89-c40367fb5ab2',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '6e080c0f-2400-4a90-97b6-f0a797f8a22e',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T131204Z:6e080c0f-2400-4a90-97b6-f0a797f8a22e',
  date: 'Thu, 09 Nov 2017 13:12:03 GMT',
  connection: 'close' });
 return result; }]];