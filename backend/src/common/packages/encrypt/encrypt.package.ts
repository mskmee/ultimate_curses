import { compare, hash } from 'bcrypt';

import { type Config } from '~/common/packages/config/config.js';

import { type Encrypt } from './types/types.js';

class EncryptBase implements Encrypt {
  private appConfig: Config;

  public constructor(config: Config) {
    this.appConfig = config;
  }

  public async make(data: string): Promise<string> {
    const { PASSWORD_SALT_ROUNDS } = this.appConfig.ENV.CRYPT;
    return await hash(data, PASSWORD_SALT_ROUNDS);
  }

  public async compare(data: string, encrypted: string): Promise<boolean> {
    return await compare(data, encrypted);
  }
}

export { EncryptBase };
