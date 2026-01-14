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
