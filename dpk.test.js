const { deterministicPartitionKey } = require("./dpk");
const { newDeterministicPartitionKey, candidateFromEvent } = require("./new-dpk");
const event = {
  partitionKey: 'fdfdfd',
}

const event2 = {
  partitionKey: 'newDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKeynewDeterministicPartitionKey',
}

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' when given no input", () => {
    const trivialKey = newDeterministicPartitionKey();
    expect(trivialKey).toBe(deterministicPartitionKey());
  });

  it("Returns same output string when long input given", () => {
    const trivialKey = newDeterministicPartitionKey(event);
    expect(trivialKey).toBe(event.partitionKey);
  });

  it("Returns same output string when long input given", () => {
    const trivialKey = newDeterministicPartitionKey(event);
    expect(trivialKey).toBe(event.partitionKey);
  });

  it("Returns hash string when long input given", () => {
    const trivialKey = newDeterministicPartitionKey(event2);
    expect(trivialKey).toBe("5e1afc74f2195b3f0a81673b2b8b06d3d4349e99ca97fc7b802f6f13313d7776dea8e53f3a887de0045e1eeee3158fae0b8854c31c82b5fae99f205a2c42d101");
  });

  it("Returns hash string when given empty object input to newDeterministicPartitionKey", () => {
    const trivialKey = newDeterministicPartitionKey({});
    expect(trivialKey).toBe("c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862");
  });

  it("Returns hash string when given empty object input to deterministicPartitionKey", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey).toBe("c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862");
  });

  it("Returns the literal '0' when given null input to newDeterministicPartitionKey", () => {
    const trivialKey = newDeterministicPartitionKey(null);
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' when given null input to deterministicPartitionKey", () => {
    const trivialKey = deterministicPartitionKey(null);
    expect(trivialKey).toBe("0");
  });
});


describe("candidateFromEvent", () => {
  it("Returns the null when given null input", () => {
    const trivialKey = candidateFromEvent(null);
    expect(trivialKey).toBe(null);
  });

  it("Returns the same literal when given string input", () => {
    const trivialKey = candidateFromEvent(event);
    expect(trivialKey).toBe(event.partitionKey);
  });

  it("Returns the hast literal when given other format input", () => {
    const trivialKey = candidateFromEvent(event.partitionKey);
    expect(trivialKey).toBe("08dcb66217491aa6597ae11c4d76e6b205e51f3cfb20db7890a487952e63eb747c73f47f1009e71dc00b11e49a52aed038030d2bd0870be2a846a9a2f15beeee");
  });

});


