import Link from "next/link";
import { Input } from "@/components/ui/input"; // from shadcn/ui
import { Button } from "@/components/ui/button"; // from shadcn/ui
import { Twitter, Instagram, Linkedin } from "lucide-react"; // Social icons

export function Footer() {
  return (
    <footer className="w-full bg-muted/30 pt-12 md:pt-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          
          {/* 1. Brand & Mission */}
          <div className="flex flex-col items-start gap-2">
            <Link href="#" className="flex items-center gap-2 mb-2">
              {/* You can add your logo SVG here */}
              <span className="text-lg font-semibold font-headline">Mann Saathi</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your compassionate companion on the journey to mental wellness and inner peace.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div className="flex flex-col items-start gap-3">
            <h4 className="font-semibold tracking-wide">Explore</h4>
            <Link href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</Link>
            <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">How It Works</Link>
            <Link href="/#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link>
          </div>

          {/* 3. Social Media */}
          <div className="flex flex-col items-start gap-3">
            <h4 className="font-semibold tracking-wide">Connect</h4>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></Link>
            </div>
          </div>
          
          {/* 4. Newsletter Signup */}
          <div className="flex flex-col items-start gap-3">
            <h4 className="font-semibold tracking-wide">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">Get wellness tips and updates delivered to your inbox.</p>
            <form className="flex w-full max-w-sm space-x-2">
              <Input type="email" placeholder="Email" className="flex-1" />
              <Button type="submit" variant="secondary">Subscribe</Button>
            </form>
          </div>

        </div>

        {/* Sub-Footer */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Mann Saathi. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground">Terms of Service</Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground">Privacy Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}