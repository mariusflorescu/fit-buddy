/** @type {import("prettier").Config} */
module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  plugins: [require.resolve('prettier-plugin-tailwindcss')]
}
