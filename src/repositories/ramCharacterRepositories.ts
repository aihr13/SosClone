export type RamCharacter = {
  name: string;
  deck: { [key: string]: number };
};

export class Repository<
  Entity extends object,
  Key extends string,
  T extends { [key: Key]: Entity }
> {
  private _data: T = {};
  private _loaded: boolean = false;
  private readonly _importFn: () => Promise<T>;

  constructor({ path }: { path: () => Promise<T> }) {
    this._importFn = path;
  }

  readonly load: (args: {}) => Promise<void> = async () => {
    if (this._loaded) {
      return;
    }

    this._data = await this._importFn();
    this._loaded = true;
  };

  readonly findById: (args: { id: Key }) => T = ({ id }) => {
    if (!this._loaded) {
      throw new Error();
    }
    if (this._data[id] == null) {
      throw new Error();
    }
    return this._data[id];
  };
}
