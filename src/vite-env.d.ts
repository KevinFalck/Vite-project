// Allow importing image assets like .webp in TS-aware tooling
declare module "*.webp" {
  const src: string;
  export default src;
}
