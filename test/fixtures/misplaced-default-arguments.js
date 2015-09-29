export default function demo (foo = 'hello world', bar: number): boolean {
  return foo.length > 0 && bar > 0;
}