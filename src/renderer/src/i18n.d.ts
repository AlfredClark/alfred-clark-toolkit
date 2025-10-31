declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $t: (key: string, ...args: never[]) => string
    $d: (value: number | Date) => string
    $n: (value: number) => string
  }
}
