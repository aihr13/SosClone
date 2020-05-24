export class RomRepository<
  Entity extends object,
  T extends { [key: string]: Entity }
> {
  private _data: T;
  private _loaded: boolean = false;
  private readonly _importFn: Promise<{ default: {} }>;

  constructor({ path }: { path: Promise<{ default: {} }> }) {
    this._importFn = path;
    this._data = {} as any; // load が終わるまでの空データとして保持
  }

  readonly load: () => Promise<void> = async () => {
    if (this._loaded) {
      throw new Error(
        "each Repository instances can load rom data only one time."
      );
    }

    this._data = (await this._importFn) as any;
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
