const crypto = require("crypto");
const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const hashSHA3512 = (data) => crypto.createHash("sha3-512").update(data).digest("hex");

const candidateFromEvent = (event) => {
    if (!event) return null;
    if (event?.partitionKey) return event.partitionKey;
    const data = JSON.stringify(event);
    return hashSHA3512(data);
};

const newDeterministicPartitionKey = (event) => {
  let candidate = candidateFromEvent(event);
  if (candidate) {
    candidate = (typeof candidate !== "string") ? JSON.stringify(candidate) : candidate;
  } 
  candidate = candidate || TRIVIAL_PARTITION_KEY;
  return candidate.length > MAX_PARTITION_KEY_LENGTH ? hashSHA3512(candidate) : candidate;
};

module.exports = {
    newDeterministicPartitionKey,
    candidateFromEvent
  };
  