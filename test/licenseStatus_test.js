var should = require('chai').should(),
expect = require('chai').expect,
supertest = require('supertest'),
api = supertest('https://enterprise-api-stg.autodesk.com');

describe('License V2 status', function(){
    it('should return a 200 response', function(done){
        api.get('/service/license/v2/status')
            .set('Accept', 'application/json')
            .expect(200, done);
    });
});

