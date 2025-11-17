/* tslint:disable */
/* eslint-disable */
/**
 * input_bytes: original image (PNG/JPEG/etc)
 * dice_pngs:   JS Array of 6 Uint8Array dice images (faces 1..6, your order)
 */
export function process_dice_image(input_bytes: Uint8Array, dice_pngs: Array<any>, opts: DiceOptions): Uint8Array;
/**
 * Chroma subsampling format
 */
export enum ChromaSampling {
  /**
   * Both vertically and horizontally subsampled.
   */
  Cs420 = 0,
  /**
   * Horizontally subsampled.
   */
  Cs422 = 1,
  /**
   * Not subsampled.
   */
  Cs444 = 2,
  /**
   * Monochrome.
   */
  Cs400 = 3,
}
export enum IntensityPreset {
  Default = 0,
  HighContrast = 1,
  LowContrast = 2,
  Bright = 3,
  Dark = 4,
}
export class DiceOptions {
  free(): void;
  [Symbol.dispose](): void;
  constructor(dice_size: number, invert_input: boolean, invert_dice: boolean, preset: IntensityPreset, output_width: number | null | undefined, output_height: number | null | undefined, add_debug: boolean);
  dice_size: number;
  invert_input: boolean;
  invert_dice: boolean;
  preset: IntensityPreset;
  get output_width(): number | undefined;
  set output_width(value: number | null | undefined);
  get output_height(): number | undefined;
  set output_height(value: number | null | undefined);
  add_debug: boolean;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_diceoptions_free: (a: number, b: number) => void;
  readonly __wbg_get_diceoptions_add_debug: (a: number) => number;
  readonly __wbg_get_diceoptions_dice_size: (a: number) => number;
  readonly __wbg_get_diceoptions_invert_dice: (a: number) => number;
  readonly __wbg_get_diceoptions_invert_input: (a: number) => number;
  readonly __wbg_get_diceoptions_output_height: (a: number) => number;
  readonly __wbg_get_diceoptions_output_width: (a: number) => number;
  readonly __wbg_get_diceoptions_preset: (a: number) => number;
  readonly __wbg_set_diceoptions_add_debug: (a: number, b: number) => void;
  readonly __wbg_set_diceoptions_dice_size: (a: number, b: number) => void;
  readonly __wbg_set_diceoptions_invert_dice: (a: number, b: number) => void;
  readonly __wbg_set_diceoptions_invert_input: (a: number, b: number) => void;
  readonly __wbg_set_diceoptions_output_height: (a: number, b: number) => void;
  readonly __wbg_set_diceoptions_output_width: (a: number, b: number) => void;
  readonly __wbg_set_diceoptions_preset: (a: number, b: number) => void;
  readonly diceoptions_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly process_dice_image: (a: any, b: any, c: number) => [number, number, number];
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_externrefs: WebAssembly.Table;
  readonly __externref_table_dealloc: (a: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
