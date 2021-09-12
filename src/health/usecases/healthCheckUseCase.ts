import { createSuccessResult, Result } from '../../share/utils/Result';

export enum HealthCheckError {
  DB_ERROR = 'DB_ERROR'
}

export async function healthCheckUseCase(): Promise<Result<{}, HealthCheckError[]>> {
  return createSuccessResult({});
}
