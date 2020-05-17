import produce from "immer";

export class Factory<AnyEntity extends object> {
  private readonly _import: Promise<{ [key: string]: object }>;
  private _isLoaded: boolean = false;
  private _rom: { [key: string]: object } = {};

  constructor(importFn: Promise<{ [key: string]: object }>) {
    this._import = importFn;
  }

  protected readonly rom = async () => {
    if (this._isLoaded) {
      return this._rom;
    }
    this._rom = produce(await this._import, (_) => _);
    return this._rom;
  };

  readonly generate = async ({ romId }: { romId: string }) => {
    this.rom().then((hoge) => hoge[romId]);
  };
}
