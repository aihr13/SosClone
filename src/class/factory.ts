export class Factory {
  private readonly import: Promise<object>;
  protected readonly rom: object;

  constructor(importFn: Promise<object>) {
    this.import = importFn;
    this.rom = importFn;
  }

  readonly readRom = async () => {
    this.readRom;
  };
}
