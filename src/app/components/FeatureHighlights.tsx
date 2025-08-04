import { forwardRef, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, CreditCard, Users, Zap, CheckCircle } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Calendar className="w-8 h-8 text-primary" />,
    bgColor: "bg-primary/20",
    title: "Bookings made simple",
    description:
      "Intuitive scheduling that works for families, with smart conflict prevention and easy rebooking.",
  },
  {
    icon: <CreditCard className="w-8 h-8 text-aqua" />,
    bgColor: "bg-aqua/20",
    title: "Payments handled for you",
    description:
      "Automated billing, flexible payment plans, and secure processing that just works.",
  },
  {
    icon: <Users className="w-8 h-8 text-cta" />,
    bgColor: "bg-cta/20",
    title: "Members remembered by name",
    description:
      "AI-powered CRM that helps you build real relationships with every family that walks through your door.",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    bgColor: "bg-primary/20",
    title: "Admin time cut in half",
    description:
      "Smart automation handles the busy work, so you can focus on what matters most – your community.",
  },
];

const FeatureHighlights = forwardRef<HTMLDivElement>((props, ref) => {
  const localRef = useRef<HTMLDivElement | null>(null);
  const combinedRef = ref || localRef;

  useEffect(() => {
    if (combinedRef && "current" in combinedRef && combinedRef.current) {
      gsap.fromTo(
        ".feature-card",
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: combinedRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );

      gsap.to(".bg-primary\\/10, .bg-aqua\\/10", {
        x: () => gsap.utils.random(-50, 50),
        y: () => gsap.utils.random(-50, 50),
        duration: 5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [combinedRef]);

  return (
    <section
      id="features"
      ref={combinedRef}
      className="py-16 lg:py-20 bg-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-[-10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-[-10%] w-80 h-80 bg-aqua/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="section-heading text-3xl lg:text-5xl font-bold text-slate">
            Everything You Need, Nothing You Don't
          </h2>
          <p className="text-xl text-slate/70 max-w-2xl mx-auto">
            PulsePal brings together all the tools your leisure centre needs in
            one simple, intelligent platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-8xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="feature-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl bg-white cursor-pointer"
            >
              <CardContent className="p-8 text-center space-y-4">
                <div
                  className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto`}
                >
                  {feature.icon}
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-aqua" />
                  <h3 className="text-xl font-bold text-slate">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-slate/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

FeatureHighlights.displayName = "FeatureHighlights";

export default FeatureHighlights;
