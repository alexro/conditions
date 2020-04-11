'use strict';

const chaiHttp = require('chai-http');
const chai = require('chai');
const { expect } = chai;
chai.use(chaiHttp);

const sinon = require('sinon');
const fs = require('fs');
const path = require('path');

const app = require('../app');
let sandbox;

describe('API', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return `conditions.json`', (done) => {
    // normally data is not residing on the same server
    // so we need to have a replacement in our test directory
    const file = path.join(__dirname, './data/conditions.json');
    const data = fs.readFileSync(file);

    // normally we get data from a remote and should stub the request methods
    // but here we stud the file system method as our api is reading the file from disk
    // our test data could have been different to data under API if needed
    sandbox.stub(fs, 'readFileSync').callsFake(() => data);

    chai
      .request(app)
      .get('/api/conditions')
      .end((err, res) => {
        if (err) done(err);

        expect(res).to.have.status(200);
        const data = JSON.parse(res.text);
        expect(data.conditions[0].label).to.eql('Test Acanthosis nigricans');
        done();
      });
  });

  it('should return `500` if there is an error', (done) => {
    sandbox.stub(fs, 'readFileSync').callsFake(() => {
      throw 'no file';
    });

    chai
      .request(app)
      .get('/api/conditions')
      .end((err, res) => {
        if (err) done(err);

        expect(res).to.have.status(500);
        expect(res.text).to.eql('"no file"');
        done();
      });
  });
});
