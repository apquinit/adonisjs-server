'use strict';

const Config = use('Config');

class HealthController {
  async index () {
    return {
      name: Config.get('app.name'),
      version: Config.get('app.version')
    };
  }
}

module.exports = HealthController;
