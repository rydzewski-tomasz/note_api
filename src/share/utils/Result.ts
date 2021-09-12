
export type Result<Value, Error = string> =
  { isValid: true, value: Value } |
  { isValid: false, error: Error };

export function createSuccessResult<Value, Error = string>(value: Value): Result<Value, Error> {
  return { isValid: true, value };
}

export function createErrorResult<Value, Error = string>(error: Error): Result<Value, Error> {
  return { isValid: false, error };
}
