# Vitest v4 Coverage Regression Demo

This repository demonstrates a coverage regression introduced in Vitest v4.0.17 when using the `v8` coverage provider. Certain `if` statements are reported as not covered, even though they are clearly executed during test runs. This issue did not occur in Vitest v3.2.4.

## Issue Description

**Bug:**

- When running tests with Vitest v4.0.17 and the `v8` coverage provider, some `if` statements are marked as uncovered (yellow) in the coverage report, despite being executed.
- This behavior worked as expected in Vitest v3.2.4, where the same code paths were fully covered.

**Affected statements:**

- `if (process.env.NODE_ENV)`
- `if (error instanceof Error)`

**What I am doing:**

- Running tests with Vitest v4.0.17 and coverage enabled using the `v8` provider.

**What I expect:**

- `if` statements that are executed should be marked as covered in the coverage report, as they were in Vitest v3.2.4.

**What actually happens:**

- The test passes and logs confirm execution, but coverage marks the `if` statements as not covered.

**This appears to affect:**

- `if` statements depending on environment variables
- `instanceof` checks inside catch blocks

## Reproduction Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/tekblom/vitest-v4-issues.git
   cd vitest-v4-issues
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run tests with coverage enabled:
   ```bash
   npm test
   # or
   npx vitest run --coverage
   ```
4. Open the coverage report in `coverage/index.html` and observe the uncovered `if` statements.

## Example Code

```
export default function testMethod() {
  console.log("test method start");

  if (process.env.NODE_ENV) {
    console.log("inside if statement");
  }

  try {
    throw new Error("Test error");
  } catch (error) {
    if (error instanceof Error) {
      console.log("inside if statement error");
    }
  }
}
```

##

## Related Issue

See the filed issue for more details: [GitHub Issue](https://github.com/tekblom/vitest-v4-issues)

---

**Summary:**
This repository is a minimal reproduction to help diagnose and resolve the coverage regression in Vitest v4 with the `v8` provider. Please see the code and coverage report for details.
