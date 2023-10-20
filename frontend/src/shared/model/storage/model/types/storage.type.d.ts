type Storage = {
  set(key: string, value: unknown): void;
  get<R>(key: string): R | null;
  drop(key: string): void;
  has(key: string): boolean;
};
export { type Storage };
