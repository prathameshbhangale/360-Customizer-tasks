# Task 3.1 : TypeScript feature is being used to specify the return type of function

* The feature in TypeScript that allows you to specify the return type of a function is called **Function Return Type Annotations**.

* In TypeScript, you we specify the return type of a function by annotating the function signature with a type after the parameter list. 

* This helps ensure that the function returns a value of the expected type, providing better type safety and clarity in your code.

# Task 3.2: handle missing the age property

## nullish coalescing operator `??`

* The nullish coalescing operator (`??`) is a logical operator in TypeScript that allows us to provide a default value when dealing with `null` or `undefined`.

```typescript
function getUserInfo(user: { name: string, age?: number }) {
    return {
        name: user.name,
        age: user.age ?? 'Age not provided'
    };
}