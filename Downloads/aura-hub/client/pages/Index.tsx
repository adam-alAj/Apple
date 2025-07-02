import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation Header */}
      <header className="border-b border-border bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <AppleLogo />
                <span className="text-xl font-semibold">
                  Apple Sign In Demo
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/signin">
                <Button variant="outline" className="rounded-full">
                  View Sign In
                </Button>
              </Link>
              <Button className="rounded-full bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center">
            <div className="mb-8">
              <ColorfulDotPattern />
            </div>

            <h1 className="text-6xl font-bold text-foreground mb-6 leading-tight">
              Apple Sign In
              <br />
              <span className="text-primary">Experience</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              A pixel-perfect recreation of Apple's sign-in interface, featuring
              their signature design language, colorful dot patterns, and smooth
              user experience.
            </p>

            <div className="flex items-center justify-center space-x-6">
              <Link to="/signin">
                <Button size="lg" className="rounded-full h-14 px-8 text-lg">
                  Try Apple Sign In →
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full h-14 px-8 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ShieldIcon />}
              title="Secure Authentication"
              description="Built with Apple's security standards and modern authentication practices."
            />
            <FeatureCard
              icon={<PaletteIcon />}
              title="Beautiful Design"
              description="Pixel-perfect recreation of Apple's iconic design language and visual elements."
            />
            <FeatureCard
              icon={<ResponsiveIcon />}
              title="Responsive Layout"
              description="Optimized for all screen sizes from mobile to desktop with smooth transitions."
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center text-sm text-muted-foreground">
            <p>
              © 2025 Apple Sign In Demo. Built with React, TypeScript, and
              Tailwind CSS.
            </p>
            <div className="mt-4 flex items-center justify-center space-x-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Apple Logo Component
function AppleLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 814 1000" fill="currentColor">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127.2c-54.7-77.4-96.7-194.1-96.7-315.4 0-191.1 124.4-291.7 247.4-291.7 75.1 0 137.8 49.1 185.8 49.1 45.9 0 117.8-53.4 199.8-53.4 33.8 0 103.9 4.5 140.5 68.1zm-201.1-86.6c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
    </svg>
  );
}

// Colorful Dot Pattern Component (smaller version for homepage)
function ColorfulDotPattern() {
  return (
    <div className="relative w-32 h-32 mx-auto">
      <svg
        className="w-full h-full"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 6 }, (_, ring) => {
          const radius = 25 + ring * 12;
          const dotsInRing = Math.max(8, ring * 4);
          return Array.from({ length: dotsInRing }, (_, i) => {
            const angle = (i * 360) / dotsInRing;
            const x = 100 + radius * Math.cos((angle * Math.PI) / 180);
            const y = 100 + radius * Math.sin((angle * Math.PI) / 180);
            const size = Math.max(1.5, 5 - ring * 0.4);

            const hue = (angle + ring * 30) % 360;
            const color = `hsl(${hue}, 75%, 65%)`;

            return (
              <circle
                key={`${ring}-${i}`}
                cx={x}
                cy={y}
                r={size}
                fill={color}
                opacity={0.9}
                className="animate-pulse"
                style={{
                  animationDelay: `${ring * 0.1 + i * 0.02}s`,
                  animationDuration: "3s",
                }}
              />
            );
          });
        }).flat()}
      </svg>
    </div>
  );
}

// Feature Card Component
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-all duration-300">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

// Icon Components
function ShieldIcon() {
  return (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2z"
      />
    </svg>
  );
}

function ResponsiveIcon() {
  return (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </svg>
  );
}
