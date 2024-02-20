const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const should = chai.should()
const server = require('../index')
const User = require('../models/user')

chai.use(chaiHttp)


describe('/user test collection', () => {

  it('should return all users', (done) => {
    chai.request(server)
    .get('/users')
    .end((req, res) => {
      res.should.have.status(200)
      res.body.should.be.an('array')
      done()
    })
  })
 
})