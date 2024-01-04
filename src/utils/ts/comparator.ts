type FunctionArgument = string | number;

export default class Comparator {
  compare;

  constructor(compareFunction?: typeof Comparator.defaultCompareFunction) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  /**
   * Default comparison function. It just assumes that "a" and "b" are strings or numbers.
   */
  static defaultCompareFunction(a: FunctionArgument, b: FunctionArgument) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }

  /**
   * Checks if two variables are equal.
   */
  equal(a: FunctionArgument, b: FunctionArgument) {
    return this.compare(a, b) === 0;
  }

  /**
   * Checks if variable "a" is less than "b".
   */
  lessThan(a: FunctionArgument, b: FunctionArgument) {
    return this.compare(a, b) < 0;
  }

  /**
   * Checks if variable "a" is greater than "b".
   */
  greaterThan(a: FunctionArgument, b: FunctionArgument) {
    return this.compare(a, b) > 0;
  }

  /**
   * Checks if variable "a" is less than or equal to "b".
   */
  lessThanOrEqual(a: FunctionArgument, b: FunctionArgument) {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  /**
   * Checks if variable "a" is greater than or equal to "b".
   */
  greaterThanOrEqual(a: FunctionArgument, b: FunctionArgument) {
    return this.greaterThan(a, b) || this.equal(a, b);
  }

  /**
   * Reverses the comparison order.
   */
  reverse() {
    const compareOriginal = this.compare;
    this.compare = (a: FunctionArgument, b: FunctionArgument) =>
      compareOriginal(b, a);
  }
}
