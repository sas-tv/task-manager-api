const request = require('supertest');
const app = require('../src/app');
const Task = require('../src/models/task');
const { userOneId, userOne, userTwo, taskOne, setupDatabase } = require('./fixtures/db');

beforeEach(setupDatabase);

test('Should create task for the user', async () => {
  const response = await request(app)
  .post('/tasks')
  .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
  .send({
    description: "Testing Task Endpoint"
  })
  .expect(201);
  
  const task = await Task.findById(response.body._id);
  expect(task).not.toBeNull();
  expect(task.completed).toEqual(false);
});

test('Should fetch all tasks for user', async () => {
  const response = await request(app)
  .get('/tasks')
  .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
  .send()
  .expect(200);

  expect(response.body.length).toBe(2);
});

test('Should fail delete for other user task', async () => {
  await request(app)
  .delete(`/tasks/${taskOne._id}`)
  .set('Authorization', `Bearer ${userTwo.tokens[0].token}`)
  .expect(404);

  const task = await Task.findById(taskOne._id);
  expect(task).not.toBeNull();
});
