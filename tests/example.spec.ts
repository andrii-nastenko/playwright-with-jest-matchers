import {test, expect} from '@playwright/test';

test('testing Playwright with Jest matchers', () => {
  expect({}).not.toContainKey('qwerty');
  expect(['a', 'b', 'c']).toIncludeAllPartialMembers(['a']);
  expect([1, 2, 3]).toBeSorted({descending: false});
  expect([{age: 40}, {age: 30}, {age: 20}]).toBeSortedBy('age', {descending: true});
})
