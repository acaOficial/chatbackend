export class Result<T, E> {
    private readonly value: T | undefined;
    private readonly error: E | undefined;
    private readonly isSuccess: boolean;
  
    private constructor(isSuccess: boolean, value?: T, error?: E) {
      this.value = value;
      this.error = error;
      this.isSuccess = isSuccess;
    }
  
    static ok<T, E>(value: T): Result<T, E> {
      return new Result<T, E>(true, value, undefined);
    }
  
    static fail<T, E>(error: E): Result<T, E> {
      return new Result<T, E>(false, undefined, error);
    }
  
    isOk(): boolean {
      return this.isSuccess;
    }
  
    isError(): boolean {
      return !this.isSuccess;
    }
  
    getValue(): T | undefined {
      if (this.isSuccess) {
        return this.value;
      } else {
        throw new Error("Cannot get value from an error result.");
      }
    }
  
    getError(): E | undefined {
      if (!this.isSuccess) {
        return this.error;
      } else {
        throw new Error("Cannot get error from a success result.");
      }
    }
  }
  