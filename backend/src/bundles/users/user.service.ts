import { UserEntity } from '~/bundles/users/user.entity.js';
import { type UserRepository } from '~/bundles/users/user.repository.js';
import { ErrorMessage } from '~/common/enums/enums.js';
import { HttpCode, HttpError } from '~/common/http/http.js';
import { type Encrypt } from '~/common/packages/encrypt/encrypt.js';
import { token } from '~/common/packages/packages.js';
import { type Service } from '~/common/types/types.js';

import {
  type ResetToken,
  type UserCreateResponseDto,
  type UserFindResponseDto,
  type UserGetAllResponseDto,
  type UserSignUpRequestDto,
} from './types/types.js';

class UserService implements Service {
  private userRepository: UserRepository;
  private encrypt: Encrypt;

  public constructor(userRepository: UserRepository, encrypt: Encrypt) {
    this.userRepository = userRepository;
    this.encrypt = encrypt;
  }

  public find(
    payload: Record<string, unknown>,
  ): Promise<UserEntity | undefined> {
    return this.userRepository.find({ ...payload });
  }

  public async findById(id: string): Promise<UserFindResponseDto | undefined> {
    const user = await this.userRepository.find({ id });
    return user?.toObject();
  }

  public async findByEmail(
    email: string,
  ): Promise<UserFindResponseDto | undefined> {
    const user = await this.userRepository.find({ email });
    return user?.toObject();
  }

  public async findAll(): Promise<UserGetAllResponseDto> {
    const items = await this.userRepository.findAll();

    return {
      items: items.map((it) => it.toObject()),
    };
  }

  public async findByToken(
    tokenString: string,
  ): Promise<UserFindResponseDto | null> {
    const { payload } = await token.decode(tokenString);

    if (typeof payload.id !== 'string') {
      throw new HttpError({
        message: ErrorMessage.NOT_AUTHORIZED,
        status: HttpCode.UNAUTHORIZED,
      });
    }

    const userData = await this.userRepository.findByToken(payload.id);
    return userData ? userData.toObject() : null;
  }

  public async create(
    payload: UserSignUpRequestDto,
  ): Promise<UserCreateResponseDto> {
    const passwordHash = await this.encrypt.make(payload.password);

    const user = await this.userRepository.create(
      UserEntity.initializeNew({
        email: payload.email,
        role: payload.role,
        passwordHash: passwordHash,
      }),
    );

    return user.toObject();
  }

  public async updateResetToken(resetToken: ResetToken): Promise<void> {
    await this.userRepository.updateResetToken(resetToken);
  }

  public update(): ReturnType<Service['update']> {
    return Promise.resolve(null);
  }

  public delete(): ReturnType<Service['delete']> {
    return Promise.resolve(true);
  }
}

export { UserService };
