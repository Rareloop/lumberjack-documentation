/* eslint-disable @typescript-eslint/no-require-imports */
import siteConfig from "@generated/docusaurus.config";
import type * as PrismNamespace from "prismjs";

export default function prismIncludeLanguages(
  PrismObject: typeof PrismNamespace,
): void {
  const {
    themeConfig: { prism },
  } = siteConfig;
  const { additionalLanguages } = prism as { additionalLanguages: string[] };

  globalThis.Prism = PrismObject;

  additionalLanguages.forEach((lang) => {
    if (lang === "php" || lang === "twig") {
      require("prismjs/components/prism-markup-templating.js");
    }
    require(`prismjs/components/prism-${lang}`);
  });
}
