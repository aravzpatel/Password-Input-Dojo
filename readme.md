# Password Input Field Validation

### The goal

Create an endpoint that checks whether a password field is valid.

**The input** A string

**The output** A boolean to confirm if the password is valid & any possible validation errors

### Requirements

1. The password must be at least 8 characters long. If it is not met, then the following error message should be returned: “Password must be at least 8 characters”

2. The password must contain at least 2 numbers. If it is not met, then the following error message should be returned: “The password must contain at least 2 numbers”

3. The validation function should handle multiple validation errors.

`For example, “somepassword” should an error message: “Password must be at least 8 characters\nThe password must contain at least 2 numbers”`

4. The password must contain at least one capital letter. If it is not met, then the following error message should be returned: “password must contain at least one capital letter”

5. The password must contain at least one special character. If it is not met, then the following error message should be returned: “password must contain at least one special character”

### Setting up the repo

1. Run `npm install` to get the packages
2. Run `npm test` to check if the tests work
