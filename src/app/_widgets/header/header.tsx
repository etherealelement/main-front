import { Button } from "@/shared/ui/button";
import { Layout } from "./_ui/layout";
import { Logo } from "./_ui/logo";
import { MainNav } from "./_ui/main-nav";
import { HelpCircle } from "lucide-react";

export function AppHeader() {
  return (
    <Layout
      logo={<Logo />}
      nav={<MainNav />}
      actions={
        <Button size={"icon"} variant={"ghost"} asChild>
          <a href="https://t.me/microcourses_support">
            <HelpCircle className="h-5 w-5" />
          </a>
        </Button>
      }
    />
  );
}
