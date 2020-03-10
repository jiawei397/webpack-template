import compiler from './compiler.js';

test('Inserts name and outputs JavaScript', async () => {
  const stats = await compiler('example.txt');
  // console.log(stats.toJson().modules[0]);
  const output = stats.toJson().modules[0].source;

  expect(output).toBe(`export default "Hey Alice!\\r\\n"`);
});
