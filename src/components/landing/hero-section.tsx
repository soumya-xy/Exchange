import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WavesDemo } from "@/components/ui/waves-demo";

export function HeroSection() {
  return (
    <section className="relative w-full pt-32 pb-50 md:pt-48 md:pb-60 text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <WavesDemo />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-background to-accent/10 -z-10"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline text-foreground">
            Mann Saathi: A Friend for Your Mind.
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Embrace a guided journey to reduce stress, understand your
            emotions, and build a lasting sense of peace. Your wellness
            companion is here.
          </p>
          <div className="mt-6">
            <Button asChild size="lg" className="shadow-lg">
              <Link href="/auth">Start Your Journey for Free</Link>
            </Button>
          </div>
        </div>
        <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[150%] h-[80%] bg-primary/5 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
}
