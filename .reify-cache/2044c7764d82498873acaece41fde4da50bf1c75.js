"use strict";var express;module.link('express',{default(v){express=v}},0);var request;module.link('supertest',{default(v){request=v}},1);var usersRoute;module.link('../api/routes/users',{default(v){usersRoute=v}},2);var testdata;module.link('../api/models/dummyUsers',{testdata(v){testdata=v}},3);




const app = express();
app.use(express.json());

app.use('/api/v1/users', usersRoute);

  describe('Test Signup route', function() {
    it('check input validation', function(done) {
      request(app)
        .post('/api/v1/users/auth/signup')
        .send(testdata)
        .set('Accept', 'application/json')
        .expect(201,done);
    });

    it('chek if user exists', function(done) {
      request(app)
        .post('/api/v1/users/auth/signup')
        .send(testdata)
        .set('Accept', 'application/json')
        .expect(409,done);
    });

    it('check if user is posted', function(done) {
      request(app)
        .post('/api/v1/users/auth/signup')
        .send(testdata)
        .set('Accept', 'application/json')
        .expect(201,done);
    });
    
  });