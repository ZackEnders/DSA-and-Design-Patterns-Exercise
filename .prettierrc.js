/** @typedef  {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig*/
/** @typedef  {import("prettier").Config} PrettierConfig*/

/** @type { PrettierConfig | SortImportsConfig } */
const config = {
  trailingComma: 'all',
  singleQuote: true,
  semi: true,
  endOfLine: 'lf',
  importOrder: [
    '<TYPES>react',
    '<TYPES>',
    '<BUILTIN_MODULES>',
    'react',
    '<THIRD_PARTY_MODULES>',
    '',
    '<TYPES>^[./]',
    '',
    '^[./]',
  ],
  plugins: [require.resolve('@ianvs/prettier-plugin-sort-imports')],
};

module.exports = config;
