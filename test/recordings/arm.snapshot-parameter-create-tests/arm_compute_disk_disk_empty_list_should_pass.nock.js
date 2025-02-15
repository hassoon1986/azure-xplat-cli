// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '21466899-20b2-463c-8c30-b8fb28a43248',
    name: 'Core-RP Alpha Subscription-11',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
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
  .get('/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/resourceGroups/xTestDiskCreate4761/providers/Microsoft.Compute/disks?api-version=2017-03-30')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14978',
  'x-ms-request-id': '47a93182-f1cd-4250-80ba-e9be9ef1adad',
  'x-ms-correlation-request-id': '47a93182-f1cd-4250-80ba-e9be9ef1adad',
  'x-ms-routing-request-id': 'WESTUS2:20170202T231855Z:47a93182-f1cd-4250-80ba-e9be9ef1adad',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Feb 2017 23:18:55 GMT',
  connection: 'close',
  'content-length': '12' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/resourceGroups/xTestDiskCreate4761/providers/Microsoft.Compute/disks?api-version=2017-03-30')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14978',
  'x-ms-request-id': '47a93182-f1cd-4250-80ba-e9be9ef1adad',
  'x-ms-correlation-request-id': '47a93182-f1cd-4250-80ba-e9be9ef1adad',
  'x-ms-routing-request-id': 'WESTUS2:20170202T231855Z:47a93182-f1cd-4250-80ba-e9be9ef1adad',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Feb 2017 23:18:55 GMT',
  connection: 'close',
  'content-length': '12' });
 return result; }]];
