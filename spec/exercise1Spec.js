
describe("findLongestWord", function() {

  it("with an empty array", function() {
    expect(findLongestWord([])).toBe(0);
  });

  it("with the largest word being 4 letters", function() {
    expect(findLongestWord(['a', 'as', 'fds', 'asas', 'a', 'as'])).toBe(4);
  });

  it("with two largest words being the same size", function() {
    expect(findLongestWord(['as', 'asas', 'dswd', 'as', 'a'])).toBe(4);
  });
});
