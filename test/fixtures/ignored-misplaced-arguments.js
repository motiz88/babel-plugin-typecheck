export default function demo (foo?: string, bar): boolean {
  return foo !== undefined && foo.length > 0 && bar > 0 && demo2(foo,bar) && demo3(foo, bar);
}

function demo2 (foo = 'hello world', bar): boolean {
  return foo.length > 0 && bar > 0;
}

function demo3 (foo: string = 'hello world', bar): boolean {
  return foo.length > 0 && bar > 0;
}