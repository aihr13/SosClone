export class Repository<T extends object> {
  private static _data: { [key: string]: T } = {};
  private static _loaded: boolean = false;

  static readonly load = () => {
    if (Repository._loaded) {
      return;
    }
  };
}
