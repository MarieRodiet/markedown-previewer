export {}

declare global {
  interface Window {
    marked: any
  }
}

declare module 'https://*'

declare module 'https://cdn.skypack.dev/marked@4.0.0' {
  export { default } from 'marked'
}
