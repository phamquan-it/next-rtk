/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    transpilePackages:[
      "@ant-design",
      "@rc-component",
      "antd",
      "rc-cascader",
      "rc-checkbox",
      "rc-collapse",
      "rc-dialog",
      "rc-drawer",
      "rc-dropdown",
      "rc-field-form",
      "rc-image",
      "rc-input",
      "rc-input-number",
      "rc-mentions",
      "rc-menu",
      "rc-motion",
      "rc-notification",
      "rc-pagination",
      "rc-picker",
      "rc-progress",
      "rc-rate",
      "rc-resize-observer",
      "rc-segmented",
      "rc-select",
      "rc-slider",
      "rc-steps",
      "rc-switch",
      "rc-table",
      "rc-tabs",
      "rc-textarea",
      "rc-tooltip",
      "rc-tree",
      "rc-tree-select",
      "rc-upload",
      "rc-util",
    ],
    i18n: {
      // These are all the locales you want to support in
      // your application
      locales: ['en', 'de'],
      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: 'en',
      // This is a list of locale domains and the default locale they
      // should handle (these are only required when setting up domain routing)
      // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
      domains: [],
    },
};

export default nextConfig;
