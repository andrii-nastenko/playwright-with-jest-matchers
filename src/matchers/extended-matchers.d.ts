import type JestSorter from 'jest-sorted'

declare global {
  namespace PlaywrightTest {
    interface Matchers<R, T> extends jest.Matchers<R>, JestSorter<R> {}
  }
}

export {};
