# Task 8: User Input Validation (TypeScript)

## Target
Validate user input in a TypeScript application and enhance the `UserInput` interface with validation rules, such as checking email format, and develop a strategy for input validation using regular expressions.

## Key Points
1. **Email Validation**: Use `regex` to ensure the email is correctly formatted.
2. **Password Validation**: Requires passwords to be at least 6 characters long and contain at least one digit.(we can include other conditions also)
3. **Optional Fields**: Validates optional fields like `age` only when provided.
4. **Error Handling**: Throws clear error messages to indicate which input fails validation.


It is better, to place validation code in a `utils` folder to enhance code readability.