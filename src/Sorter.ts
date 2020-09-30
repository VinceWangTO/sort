// export interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }
//
//  Inferface - Use when objects have different purposes
//  Sets up a contract betwee different classes,
//  Use when we have very different objects that we want to work together
//  Promotes loose coupling
//
//  Inheritance/Abstract Classes - Objects have the same purpose
//  Setup up a contract between different classes
//  Use when we are trying to build up a definition of an object
//  Strongly coupless classes together
//
export abstract class Sorter {
  abstract length: number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        //
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
