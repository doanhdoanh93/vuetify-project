export {};

declare global {
  interface String {
    trimAny(target: string): string;
  }
}

String.prototype.trimAny = function (this: string, target: string): string {
  const str = this as string;
  return str.replace(new RegExp(`^${target}+|${target}+$`, "g"), "");
};
