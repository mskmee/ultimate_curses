import knex, { type Knex } from 'knex';
import { knexSnakeCaseMappers, Model } from 'objection';

import { AppEnvironment } from '~/common/enums/enums.js';
import { type Config } from '~/common/packages/config/config.js';
import { type Logger } from '~/common/packages/logger/logger.js';

import { DatabaseTableName } from './enums/enums.js';
import { type Database } from './types/types.js';

class DatabaseBase implements Database {
  private appConfig: Config;

  private logger: Logger;

  public constructor(config: Config, logger: Logger) {
    this.appConfig = config;
    this.logger = logger;
  }

  public connect(): ReturnType<Database['connect']> {
    this.logger.info('Establish DB connection...');

    Model.knex(knex.default(this.environmentConfig));
  }

  public get environmentsConfig(): Database['environmentsConfig'] {
    return {
      [AppEnvironment.DEVELOPMENT]: this.initialConfig,
      [AppEnvironment.PRODUCTION]: this.initialConfig,
    };
  }

  private get initialConfig(): Knex.Config {
    const sslConfig =
      this.appConfig.ENV.APP.ENVIRONMENT === AppEnvironment.DEVELOPMENT
        ? {}
        : { ssl: { rejectUnauthorized: false } };

    return {
      client: this.appConfig.ENV.DB.DIALECT,
      connection: {
        port: this.appConfig.ENV.DB.PORT,
        host: this.appConfig.ENV.DB.HOST,
        database: this.appConfig.ENV.DB.NAME,
        user: this.appConfig.ENV.DB.USERNAME,
        password: this.appConfig.ENV.DB.PASSWORD,
        ...sslConfig,
      },
      pool: {
        min: this.appConfig.ENV.DB.POOL_MIN,
        max: this.appConfig.ENV.DB.POOL_MAX,
      },
      migrations: {
        directory: 'src/migrations',
        tableName: DatabaseTableName.MIGRATIONS,
      },
      seeds: {
        directory: 'src/seeds',
      },
      debug: false,
      ...knexSnakeCaseMappers({
        underscoreBetweenUppercaseLetters: true,
      }),
    };
  }

  private get environmentConfig(): Knex.Config {
    return this.environmentsConfig[this.appConfig.ENV.APP.ENVIRONMENT];
  }
}

export { DatabaseBase };
export { DatabaseTableName } from './enums/enums.js';
export { type Database } from './types/types.js';
