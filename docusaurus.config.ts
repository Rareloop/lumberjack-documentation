import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Lumberjack",
  tagline: "Supercharge your WordPress Development",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://docs.lumberjack.rareloop.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/lumberjack-documentation/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "rareloop", // Usually your GitHub org/user name.
  projectName: "lumberjack-documentation", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/rareloop/lumberjack-documentation/tree/main/packages/create-docusaurus/templates/shared/",
          routeBasePath: "/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  trailingSlash: false,
  deploymentBranch: "gh-pages",

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: false,
      disableSwitch: true,
      defaultMode: "light",
    },
    navbar: {
      title: "Lumberjack",
      logo: {
        alt: "Lumberjack",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docsVersionDropdown",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "sidebar",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://lumberjack.rareloop.com/",
          label: "Website",
          position: "right",
        },
        {
          href: "https://www.rareloop.com/",
          label: "Rareloop",
          position: "right",
        },
        {
          href: "https://timber.github.io/docs/v2/",
          label: "Timber Docs",
          position: "right",
        },
        {
          href: "https://twig.symfony.com/doc/2.x/",
          label: "Twig Docs",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/",
            },
            {
              label: "Installation",
              to: "/getting-started/installation",
            },
            {
              label: "The Basics",
              to: "/the-basics/lifecycle",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/rareloop/lumberjack",
            },
            {
              label: "X (Twitter)",
              href: "https://x.com/rareloop",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/rareloop",
            },
            {
              label: "Rareloop Website",
              href: "https://www.rareloop.com/",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Timber Documentation",
              href: "https://timber.github.io/docs/",
            },
            {
              label: "Twig Documentation",
              href: "https://twig.symfony.com/",
            },
            {
              label: "Bedrock",
              href: "https://roots.io/bedrock/",
            },
            {
              label: "Submit an Issue",
              href: "https://github.com/rareloop/lumberjack/issues",
            },
          ],
        },
      ],
      copyright: `Copyright © 2015 - ${new Date().getFullYear()} Rareloop Limited. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ["diff"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
