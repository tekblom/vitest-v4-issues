import { describe, it, expect } from "vitest";

import testMethod from "./example.js";

describe("vitest4 testing", () => {
  it("allows to set the token after initialisation", () => {
    testMethod();
  });
});
