import type { HeadersFunction, LoaderFunctionArgs } from "react-router";
import { Outlet, useLoaderData, useRouteError } from "react-router";
import { boundary } from "@shopify/shopify-app-react-router/server";
import { AppProvider as ShopifyAppProvider } from "@shopify/shopify-app-react-router/react";
import { AppProvider as PolarisAppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import { authenticate } from "../shopify.server";

/**
 * Custom Element Type Declarations for Shopify App Bridge Navigation
 *
 * These elements (<s-app-nav>, <s-link>) are Shopify App Bridge web components
 * that handle navigation in embedded Shopify apps. They're rendered by the
 * Shopify admin shell, not by React.
 *
 * The ESLint rule @typescript-eslint/no-namespace prefers ES modules over
 * TypeScript namespaces. However, JSX.IntrinsicElements augmentation requires
 * the namespace pattern because it's part of the JSX global namespace that
 * TypeScript's JSX transform expects.
 *
 * Alternative approaches:
 * 1. Use a .d.ts declaration file (cleaner separation)
 * 2. Cast elements with 'as any' (loses type safety)
 * 3. Disable rule project-wide in eslintrc (affects other code)
 */

// eslint-disable-next-line @typescript-eslint/no-namespace
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Shopify App Bridge navigation container.
       * Renders the app's sidebar navigation in the Shopify admin.
       */
      's-app-nav': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      /**
       * Shopify App Bridge link component.
       * Handles client-side navigation within embedded apps.
       */
      's-link': React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string },
        HTMLAnchorElement
      >;
    }
  }
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);
  return { apiKey: process.env.SHOPIFY_API_KEY || "" };
};

export default function App() {
  const { apiKey } = useLoaderData<typeof loader>();

  return (
    <ShopifyAppProvider embedded apiKey={apiKey}>
      <PolarisAppProvider i18n={enTranslations}>
        <s-app-nav>
          <s-link href="/app">Home</s-link>
          <s-link href="/app/additional">Additional page</s-link>
        </s-app-nav>
        <Outlet />
      </PolarisAppProvider>
    </ShopifyAppProvider>
  );
}

export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};
