module.exports = {
  presets: [
    "next/babel", // This ensures compatibility with Next.js
    "@babel/preset-env",
    "@babel/preset-react",
  ],
  plugins: [["@babel/plugin-transform-react-jsx", { runtime: "automatic" }]],
}
