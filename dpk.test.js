const { deterministicPartitionKey } = require("./dpk");
const { newDeterministicPartitionKey } = require("./new-dpk");
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
});

describe("newDeterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = newDeterministicPartitionKey();
    expect(trivialKey).toBe(deterministicPartitionKey());
  });
});


describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = newDeterministicPartitionKey(event);
    expect(trivialKey).toBe(event.partitionKey);
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = newDeterministicPartitionKey(event);
    expect(trivialKey).toBe(event.partitionKey);
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = newDeterministicPartitionKey(event2);
    expect(trivialKey).toBe("5e1afc74f2195b3f0a81673b2b8b06d3d4349e99ca97fc7b802f6f13313d7776dea8e53f3a887de0045e1eeee3158fae0b8854c31c82b5fae99f205a2c42d101");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = newDeterministicPartitionKey({});
    expect(trivialKey).toBe("c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey).toBe("c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = newDeterministicPartitionKey(null);
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey(null);
    expect(trivialKey).toBe("0");
  });
});



