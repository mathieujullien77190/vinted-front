import { cn } from "@/helpers/cn";
import type { PropsWithChildren } from "react";

export const Section = ({
  withCssRules,
  children,
}: { withCssRules?: boolean } & PropsWithChildren) => {
  return (
    <section
      className={cn(
        "flex flex-col border border-ink-muted border-solid w-full rounded-sm bg-white",
        withCssRules ? "publish-section" : "",
      )}
    >
      {children}
    </section>
  );
};
