describe('arrayContainsString', () => {
  let myArray;

  beforeEach(() => {
    myArray = ['apple', 'banana', 'cherry', 'date'];
  });

  it('should contain string', () => {
    expect(myArray).toContain('banana');
  });
});
