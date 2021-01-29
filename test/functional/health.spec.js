'use strict';

const { test, trait } = use('Test/Suite')('HealthController');

trait('Test/ApiClient');

test('health', async ({ client }) => {

  const response = await client.get('/').end();

  response.assertStatus(200);
});
