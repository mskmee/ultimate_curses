import { type ValueOf } from '~/shared/types/types.js';

import { type Storage, type StorageKey } from './model/model.js';

class StorageBase implements Storage {
  private store: globalThis.Storage;

  public constructor(store: globalThis.Storage) {
    this.store = store;
  }

  public set(key: ValueOf<typeof StorageKey>, value: string): void {
    this.store.setItem(key as string, value);
  }

  public get<R = string>(key: ValueOf<typeof StorageKey>): R | null {
    return this.store.getItem(key as string) as R;
  }

  public drop(key: ValueOf<typeof StorageKey>): void {
    this.store.removeItem(key as string);
  }

  public has(key: ValueOf<typeof StorageKey>): boolean {
    const value = this.get(key);

    return Boolean(value);
  }
}

export { StorageBase };
