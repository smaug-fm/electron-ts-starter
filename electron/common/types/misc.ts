export type UnpackArray<T> = T extends (infer U)[] ? U : T;

export type SpinWaitResult<T> =
  | {
      status: 'main';
      result: T;
    }
  | {
      status: 'spin';
      result: boolean;
    };

export interface PermissionsType {
  accessibility: boolean;
  screen: boolean;
}
