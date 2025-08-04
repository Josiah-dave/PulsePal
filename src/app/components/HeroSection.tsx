import { forwardRef, MutableRefObject } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { handleStripeCheckout } from "@/lib/utils";


interface HeroSectionProps {
  badgeRef: MutableRefObject<HTMLDivElement | null>;
  titleRef: MutableRefObject<HTMLHeadingElement | null>;
  subtitleRef: MutableRefObject<HTMLParagraphElement | null>;
  buttonsRef: MutableRefObject<HTMLDivElement | null>;
  checklistRef: MutableRefObject<HTMLDivElement | null>;
}



const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ badgeRef, titleRef, subtitleRef, buttonsRef, checklistRef }, ref) => {
    return (
      <section ref={ref} className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <div ref={badgeRef}>
                <Badge className="bg-primary/20 text-primary border-primary/30 rounded-full px-6 py-2 text-sm font-medium">
                  AI-Powered CRM & Booking Platform
                </Badge>
              </div>
              <h1
                ref={titleRef}
                className="text-4xl lg:text-6xl font-bold text-slate leading-tight"
              >
                Meet PulsePal: The Smart, Simple System for{" "}
                <span className="text-primary">Leisure Centres</span>
              </h1>
              <p
                ref={subtitleRef}
                className="text-xl lg:text-2xl text-slate/70 leading-relaxed max-w-3xl mx-auto"
              >
                One platform for bookings, CRM, access control, and payments —
                built for real people and powered by AI.
              </p>
            </div>

            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-cta hover:bg-cta/90 text-white rounded-full px-8 py-4 text-lg shadow-lg font-semibold transform transition-transform hover:scale-105"
              >
                Book a Demo
              </Button>
              <Button
                size="lg"
                className="bg-primary hover:bg-button-hover text-white rounded-full px-8 py-4 text-lg shadow-lg font-semibold transform transition-transform hover:scale-105"
                onClick={() => handleStripeCheckout(9900, "gbp")}
              >
                Preorder PulsePal – £99/month
              </Button>
            </div>

            <div
              ref={checklistRef}
              className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate/60 pt-4"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-aqua" />
                <span>30-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-aqua" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-aqua" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
