export class InputValidator {
    // Checks if the input is not null, undefined, or an empty string.
    static isValidString(input: string): boolean {
      return input !== null && input !== undefined && input.trim() !== '';
    }
  
    // Checks if the input is a positive number.
    static isValidPositiveNumber(input: number): boolean {
      return input !== null && input !== undefined && input > 0;
    }
  
    // Checks if the input is a valid email.
    static isValidEmail(input: string): boolean {
      let emailRegex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return this.isValidString(input) && emailRegex.test(input);
    }
  
    // Add more methods as needed...
  }
  