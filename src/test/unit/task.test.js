'use strict';

var expect = require('expect.js');

describe('models/task', function () {
  before(function () {
      return require('../../db/models').sequelize.sync();
  });

  beforeEach(function () {
    this.User = require('../../db/models').User;
    this.Task = require('../../db/models').Task;
  });

  describe('create', function () {
    it('creates a task', function () {
      return this.User.create({ username: 'johndoe' }).bind(this).then(function (user) {
        return this.Task.create({ title: 'a title', UserId: user.id }).then(function (task) {
          expect(task.title).to.equal('a title');
        });
      });
    });
  });
});
