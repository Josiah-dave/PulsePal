import React, { forwardRef } from "react";
import { Button } from "@/components/ui/button";

const CTASection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="py-16 lg:py-20 bg-gradient-to-br from-primary/10 to-aqua/10"
    >
      <div className="container mx-auto px-4">
        <div className="cta-content max-w-3xl mx-auto text-center space-y-8">
          <h2 className="section-heading text-3xl lg:text-5xl font-bold text-slate">
            Ready to Transform Your Centre?
          </h2>
          <p className="text-xl text-slate/70">
            Join the growing community of leisure centres using PulsePal to
            create better experiences for families while saving time and money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-cta hover:bg-cta/90 text-white rounded-full px-8 py-4 text-lg shadow-lg font-semibold"
            >
              Book a Demo
            </Button>
            <Button
              size="lg"
              className="bg-primary hover:bg-button-hover text-white rounded-full px-8 py-4 text-lg shadow-lg font-semibold"
            >
              Preorder PulsePal – £99/month
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
});

CTASection.displayName = "CTASection";

export default CTASection;
