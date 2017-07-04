import * as Maybe from 'data.maybe';

async function test() {
  const { calculate } = await import('./importMe');
  console.log(calculate, Maybe);
}

test()
