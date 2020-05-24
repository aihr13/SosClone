export type RamCharacter = {
  name: string;
  deck: { [key: string]: number };
};

export class Repository<
  Entity extends object,
  T extends { [key: string]: Entity }
> {
  private _data: T;
  private _loaded: boolean = false;
  private readonly _importFn: () => Promise<T>;

  constructor({ path }: { path: () => Promise<T> }) {
    this._importFn = path;
    this._data = {} as any; // load が終わるまでの空データとして保持
  }

  readonly load: (args: {}) => Promise<void> = async () => {
    if (this._loaded) {
      return;
    }

    this._data = await this._importFn();
    this._loaded = true;
  };

  readonly findById: (args: { id: keyof T }) => Entity = ({ id }) => {
    if (!this._loaded) {
      throw new Error();
    }
    if (this._data[id] == null) {
      throw new Error();
    }
    return this._data[id];
  };
}
