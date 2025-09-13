import { User, Map, BarChart } from "lucide-react";

export function HowItWorksSection() {
    return (
        <section id="how-it-works" className="w-full py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              A Simple, Guided Path
            </h2>
            <p className="max-w-[600px] mx-auto text-muted-foreground md:text-lg">
              Getting started on your path to wellness is easy.
            </p>
          </div>
          <div className="relative grid md:grid-cols-3 gap-12">
            <div className="absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2 hidden md:block"></div>
            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center p-4">
              <div className="mb-4 bg-background border p-4 rounded-full shadow-sm z-10">
                <User className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Create Your Account
              </h3>
              <p className="text-muted-foreground">
                Sign up in seconds and tell us a little about your wellness
                goals.
              </p>
            </div>
            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center p-4">
              <div className="mb-4 bg-background border p-4 rounded-full shadow-sm z-10">
                <Map className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Get Your Personal Plan
              </h3>
              <p className="text-muted-foreground">
                Receive daily exercises, guided meditations, and mood-tracking
                tools tailored for you.
              </p>
            </div>
            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center p-4">
              <div className="mb-4 bg-background border p-4 rounded-full shadow-sm z-10">
                <BarChart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Your Progress</h3>
              <p className="text-muted-foreground">
                Watch your personal growth over time and celebrate your
                milestones.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}
