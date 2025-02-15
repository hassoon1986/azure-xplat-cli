/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var should = require('should');
var util = require('util');
var _ = require('underscore');

var CLITest = require('../../../framework/arm-cli-test');
var testUtils = require('../../../util/util');

var networkTestUtil = new (require('../../../util/networkTestUtil'))();

var testPrefix = 'arm-network-dns-zone-record-set-tests',
  groupName = 'xplat-test-dns-zone-record-set',
  location;

var zoneProp = {
  name: 'exampledns.com',
  tags: networkTestUtil.tags
};

var aProp = {
  name: 'set-a',
  type: 'A',
  ttl: 3600,
  newTtl: 255,
  params: '-a 192.168.17.18',
  zoneName: zoneProp.name,
  metadata: networkTestUtil.tags,
  newMetadata: networkTestUtil.newTags
};
var aaaaProp = {
  name: 'set-aaaa',
  type: 'AAAA',
  ttl: 3600,
  params: '-b 2001:cafe:130::100',
  zoneName: zoneProp.name,
  metadata: networkTestUtil.tags
};
var cnameProp = {
  name: 'set-cname',
  type: 'CNAME',
  ttl: 3600,
  params: '-c testcname',
  zoneName: zoneProp.name,
  metadata: networkTestUtil.tags
};
var mxProp = {
  name: 'set-mx',
  type: 'MX',
  ttl: 3600,
  params: '-f 100 -e mail.test.com.',
  zoneName: zoneProp.name,
  metadata: networkTestUtil.tags
};
var nsProp = {
  name: 'set-ns',
  type: 'NS',
  ttl: 3600,
  params: '-d ns1.com.',
  zoneName: zoneProp.name,
  metadata: networkTestUtil.tags
};
var soaProp = {
  name: '@',
  type: 'SOA',
  ttl: 3600,
  params: '-e mail.microsoft.com -i 60000 -S 123 -n 2400 -r 3600 -j 6400',
  zoneName: zoneProp.name,
  metadata: networkTestUtil.tags
};
var srvProp = {
  name: 'set-srv',
  type: 'SRV',
  ttl: 3600,
  params: '-p 1 -w 2 -o 3 -u target.com.',
  zoneName: zoneProp.name,
  metadata: networkTestUtil.tags
};
var caaProp = {
  name: 'set-caa',
  type: 'CAA',
  ttl: 3600,
  params: '--caaflags 1 --caatag tag1 --caavalue val1',
  zoneName: zoneProp.name,
  metadata: networkTestUtil.tags
};
var txtProp = {
  name: 'set-txt',
  type: 'TXT',
  ttl: 3600,
  params: '-x longtexthere',
  zoneName: zoneProp.name,
  metadata: networkTestUtil.tags
};

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'eastus'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;

    before(function (done) {
      suite = new CLITest(this, testPrefix, requiredEnvironment);
      suite.setupSuite(function () {
        location = process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.generateId(groupName, null);

        zoneProp.location = location;
        zoneProp.group = groupName;

        aProp.group = zoneProp.group;
        aaaaProp.group = zoneProp.group;
        mxProp.group = zoneProp.group;
        nsProp.group = zoneProp.group;
        txtProp.group = zoneProp.group;
        srvProp.group = zoneProp.group;
        caaProp.group = zoneProp.group;
        cnameProp.group = zoneProp.group;
        soaProp.group = zoneProp.group;

        done();
      });
    });
    after(function (done) {
      networkTestUtil.deleteGroup(groupName, suite, function () {
        suite.teardownSuite(done);
      });
    });
    beforeEach(function (done) {
      suite.setupTest(done);
    });
    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('dns record-set', function () {
      it('create should create dns zone', function (done) {
        networkTestUtil.createGroup(groupName, location, suite, function () {
          networkTestUtil.createDnsZone(zoneProp, suite, function () {
            done();
          });
        });
      });
      /**
       * A
       */
      it('create should create a record-set of type A', function (done) {
        networkTestUtil.createDnsRecordSet(aProp, suite, done);
      });
      it('show should display details of record-set', function (done) {
        networkTestUtil.showDnsRecordSet(aProp, suite, function (aSet) {
          aSet.name.should.equal(aProp.name);
          aSet.tTL.should.equal(aProp.ttl);
          aSet.type.substring(aSet.type.lastIndexOf('/') + 1).should.equal(aProp.type);
          networkTestUtil.shouldHaveTags(aSet, 'metadata');
          done();
        });
      });
      it('set should modify a record-set', function (done) {
        var cmd = 'network dns record-set set -g {group} -z {zoneName} -n {name} -y {type} -l {newTtl} -m {newMetadata} --json'.formatArgs(aProp);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var aSet = JSON.parse(result.text);
          aSet.name.should.equal(aProp.name);
          aSet.tTL.should.equal(aProp.newTtl);
          networkTestUtil.shouldAppendTags(aSet, 'metadata');
          done();
        });
      });
      it('add-record should add a record of type A', function (done) {
        networkTestUtil.addDnsRecord(aProp, suite, function (aSet) {
          aSet.aRecords.should.containEql({ipv4Address: '192.168.17.18'});
          done();
        });
      });
      it('delete-record should delete a record of type A', function (done) {
        networkTestUtil.deleteDnsRecord(aProp, suite, done);
      });
      it('list should display all record-sets in dns zone', function (done) {
        networkTestUtil.listDnsRecordSets(zoneProp, suite, function (sets) {
          var added = sets.length >= 2;
          added.should.equal(true);
          done();
        });
      });
      it('delete should delete record-set of type A', function (done) {
        networkTestUtil.deleteDnsRecordSet(aProp, suite, done);
      });

      /**
       * AAAA
       */
      it('create should create a record-set of type AAAA', function (done) {
        networkTestUtil.createDnsRecordSet(aaaaProp, suite, done);
      });
      it('add-record should add a record of type AAAA', function (done) {
        networkTestUtil.addDnsRecord(aaaaProp, suite, function (aaaaSet) {
          aaaaSet.aaaaRecords.should.containEql({ipv6Address: '2001:cafe:130::100'});
          done();
        });
      });
      it('delete-record should delete a record of type AAAA', function (done) {
        networkTestUtil.deleteDnsRecord(aaaaProp, suite, done);
      });
      it('delete should delete record-set of type AAAA', function (done) {
        networkTestUtil.deleteDnsRecordSet(aaaaProp, suite, done);
      });

      /**
       * CAA
       */
      it('create should create a record-set of type CAA', function (done) {
        networkTestUtil.createDnsRecordSet(caaProp, suite, done);
      });
      it('add-record should add a record of type CAA', function (done) {
        networkTestUtil.addDnsRecord(caaProp, suite, function (caaSet) {
          caaSet.caaRecords.should.containEql({flags: 1, tag: 'tag1', value: 'val1'});
          done();
        });
      });
      it('delete-record should delete a record of type CAA', function (done) {
        networkTestUtil.deleteDnsRecord(caaProp, suite, done);
      });
      it('delete should delete record-set of type CAA', function (done) {
        networkTestUtil.deleteDnsRecordSet(caaProp, suite, done);
      });

      /**
       * CNAME
       */
      it('add-record should add a record of type CNAME', function (done) {
        networkTestUtil.addDnsRecord(cnameProp, suite, function (cnameSet) {
          cnameSet.cnameRecord.cname.should.equal('testcname');
          done();
        });
      });
      it('delete-record should delete a record of type CNAME', function (done) {
        networkTestUtil.deleteDnsRecord(cnameProp, suite, done);
      });

      /**
       * MX
       */
      it('create should create a record-set of type MX', function (done) {
        networkTestUtil.createDnsRecordSet(mxProp, suite, done);
      });
      it('add-record should add a record of type MX', function (done) {
        networkTestUtil.addDnsRecord(mxProp, suite, function (mxSet) {
          mxSet.mxRecords.should.containEql({preference: 100, exchange: 'mail.test.com'});
          done();
        });
      });
      it('delete-record should delete a record of type MX', function (done) {
        networkTestUtil.deleteDnsRecord(mxProp, suite, done);
      });
      it('delete should delete record-set of type MX', function (done) {
        networkTestUtil.deleteDnsRecordSet(mxProp, suite, done);
      });

      /**
       * NS
       */
      it('create should create a record-set of type NS', function (done) {
        networkTestUtil.createDnsRecordSet(nsProp, suite, done);
      });
      it('add-record should add a record of type NS', function (done) {
        networkTestUtil.addDnsRecord(nsProp, suite, function (nsSet) {
          nsSet.nsRecords.should.containEql({nsdname: 'ns1.com.'});
          done();
        });
      });
      it('delete-record should delete a record of type NS', function (done) {
        networkTestUtil.deleteDnsRecord(nsProp, suite, done);
      });
      it('delete should delete record-set of type NS', function (done) {
        networkTestUtil.deleteDnsRecordSet(nsProp, suite, done);
      });

      /**
       * SOA
       */
      it('set SOA record should create a record-set of type SOA', function (done) {
        var cmd = util.format('network dns record-set set-soa-record -g {group} -z {zoneName} -l {ttl} ' +
          '-m {metadata} {params} --json').formatArgs(soaProp);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });

      /**
       * SRV
       */
      it('create should create a record-set of type SRV', function (done) {
        networkTestUtil.createDnsRecordSet(srvProp, suite, done);
      });
      it('add-record should add a record of type SRV', function (done) {
        networkTestUtil.addDnsRecord(srvProp, suite, function (srvSet) {
          srvSet.srvRecords.should.containEql({priority: 1, weight: 2, port: 3, target: 'target.com'});
          done();
        });
      });
      it('delete-record should delete a record of type SRV', function (done) {
        networkTestUtil.deleteDnsRecord(srvProp, suite, done);
      });
      it('delete should delete record-set of type SRV', function (done) {
        networkTestUtil.deleteDnsRecordSet(srvProp, suite, done);
      });

      /**
       * TXT
       */
      it('create should create a record-set of type TXT', function (done) {
        networkTestUtil.createDnsRecordSet(txtProp, suite, done);
      });
      it('add-record should add a record of type TXT', function (done) {
        networkTestUtil.addDnsRecord(txtProp, suite, function (txtSet) {
          txtSet.txtRecords.should.containEql({value: ['longtexthere']});
          done();
        });
      });
      it('delete-record should delete a record of type TXT', function (done) {
        networkTestUtil.deleteDnsRecord(txtProp, suite, done);
      });
      it('delete should delete record-set of type TXT', function (done) {
        networkTestUtil.deleteDnsRecordSet(txtProp, suite, done);
      });
     });
  });
});