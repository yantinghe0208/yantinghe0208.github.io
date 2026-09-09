"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type TrackedEvent =
  | "cv_click"
  | "paper_click"
  | "scholar_click"
  | "email_click"
  | "research_click";

function eventForLink(link: HTMLAnchorElement): TrackedEvent | null {
  const href = link.getAttribute("href") ?? "";

  if (href.startsWith("mailto:")) return "email_click";
  if (/Yanting-He-CV\.pdf/i.test(href)) return "cv_click";
  if (/scholar\.google\./i.test(href)) return "scholar_click";
  if (link.closest(".paper")) return "paper_click";

  try {
    if (new URL(href, window.location.href).pathname === "/research/") {
      return "research_click";
    }
  } catch {
    return null;
  }

  return null;
}

function emailType(link: HTMLAnchorElement) {
  const label = link.closest(".contact-email")?.querySelector("span")?.textContent;
  return label?.trim().toLowerCase() || "unspecified";
}

export function GoogleAnalytics() {
  useEffect(() => {
    const trackClick = (event: MouseEvent) => {
      const element = event.target instanceof Element ? event.target : null;
      const link = element?.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const eventName = eventForLink(link);
      if (!eventName) return;

      const parameters: Record<string, string> = {
        link_text: link.textContent?.replace(/\s+/g, " ").trim() || "unlabeled",
        page_path: window.location.pathname,
      };

      // Never send an email address to Analytics.
      if (eventName === "email_click") {
        parameters.email_type = emailType(link);
      } else {
        parameters.link_url = link.href;
      }

      const paperTitle = link.closest(".paper")?.querySelector("h2")?.textContent;
      if (paperTitle) parameters.paper_title = paperTitle.trim();

      window.gtag?.("event", eventName, parameters);
    };

    document.addEventListener("click", trackClick);

    return () => {
      document.removeEventListener("click", trackClick);
    };
  }, []);

  return null;
}
