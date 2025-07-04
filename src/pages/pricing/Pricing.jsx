import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/Button";
import { 
  CheckIcon, 
  StarIcon, 
  TrendingUpIcon, 
  TargetIcon, 
  TrophyIcon,
  MailIcon,
  CreditCardIcon,
  ArrowLeftIcon
} from 'lucide-react';

function Pricing() {
  const navigate = useNavigate();
  const [isAnnual, setIsAnnual] = useState(false);
  
  // Premium pricing (monthly vs annual)
  const monthlyPrice = 19.99;
  const annualPrice = 199.99; // ~$16.67/month when billed annually
  const savings = ((monthlyPrice * 12) - annualPrice).toFixed(0);

  const currentPrice = isAnnual ? annualPrice : monthlyPrice;
  const priceLabel = isAnnual ? 'year' : 'month';

  const handleGoBack = () => {
    navigate(-1); // Go back to previous page
  };

  const freeFeatures = [
    "Access all essential features",
    "Track your carbon footprint", 
    "Simple reports & insights",
    "Unlimited usage",
    "Basic emission calculations"
  ];

  const premiumFeatures = [
    "Everything in Free, plus:",
    "Personalized & Customized Recommendations",
    "Detailed Report Analysis with trends",
    "Advanced Goal Setting & Tracking", 
    "Gamification with badges & challenges",
    "Priority customer support",
    "Export detailed reports (PDF/CSV)",
    "Industry benchmarking"
  ];

  return (
    <div className="min-h-screen bg-base-background">
      {/* Header */}
      <div className="py-12 bg-base-background border-b border-base-border">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <div className="mb-8">
            <Button 
              variant="secondaryOutlined" 
              onClick={handleGoBack}
              className="inline-flex items-center gap-2"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Back
            </Button>
          </div>
          
          {/* Header Content */}
          <div className="text-center">
            <h1 className="text-4xl font-bold font-['Inter'] text-base-foreground mb-4">
              Choose Your Carbonwise Plan
            </h1>
            <p className="text-lg text-base-muted-foreground max-w-2xl mx-auto">
              Start your sustainability journey today. Track, analyze, and reduce your carbon footprint with tools designed for impact.
            </p>
          </div>
        </div>
      </div>

      {/* Billing Toggle */}
      <div className="py-8 bg-base-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center items-center gap-4 mb-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-base-foreground' : 'text-base-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                isAnnual ? 'bg-lime-400' : 'bg-neutral-700'
              }`}
            >
              <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-base-foreground' : 'text-base-muted-foreground'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="text-xs bg-lime-400 text-black px-2 py-1 rounded-full font-medium">
                Save ${savings}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="pb-16 bg-base-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Free Plan */}
            <div className="p-6 rounded-2xl outline-1 outline-offset-[-1px] outline-base-border bg-base-background flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold font-['Inter'] text-base-foreground mb-2">
                  Free Plan
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-base-foreground">$0</span>
                  <span className="text-base-muted-foreground">/ month</span>
                </div>
                <p className="text-base-muted-foreground text-sm">
                  Start reducing your impact today!
                </p>
              </div>

              <div className="flex-1 mb-6">
                <ul className="space-y-3">
                  {freeFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-base-card-foreground font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="secondaryOutlined" className="w-full">
                Get Started Free
              </Button>
            </div>

            {/* Premium Plan */}
            <div className="relative p-6 rounded-2xl bg-base-background outline-2 outline-offset-[-2px] outline-lime-400 flex flex-col">
              {/* Popular Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-lime-400 text-black px-4 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <StarIcon className="w-3 h-3" />
                  Most Popular
                </div>
              </div>

              <div className="mb-6 pt-2">
                <h3 className="text-2xl font-bold font-['Inter'] text-base-foreground mb-2">
                  Premium Plan
                </h3>
                <p className="text-sm text-lime-400 font-medium mb-4">
                  Unlock your sustainable potential
                </p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-base-foreground">
                    ${currentPrice}
                  </span>
                  <span className="text-base-muted-foreground">/ {priceLabel}</span>
                </div>
                {isAnnual && (
                  <p className="text-xs text-lime-400">
                    That's just ${(annualPrice / 12).toFixed(2)}/month billed annually
                  </p>
                )}
              </div>

              <div className="flex-1 mb-6">
                <ul className="space-y-3">
                  {premiumFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      {index === 0 ? (
                        <span className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      ) : (
                        <CheckIcon className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0" />
                      )}
                      <span className={`text-sm font-medium ${
                        index === 0 
                          ? 'text-base-muted-foreground' 
                          : 'text-base-card-foreground'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="default" className="w-full bg-lime-400 hover:bg-lime-500 text-black">
                <CreditCardIcon className="w-4 h-4 mr-2" />
                Upgrade to Premium
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="py-16 bg-base-background border-t border-base-border">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-base-foreground mb-12">
            Why Choose Premium?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUpIcon className="w-6 h-6 text-lime-400" />
              </div>
              <h3 className="font-semibold text-base-foreground mb-2">Personalized Insights</h3>
              <p className="text-sm text-base-muted-foreground">
                Get tailored recommendations based on your unique footprint
              </p>
            </div>

            <div className="text-center p-4">
              <div className="w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TargetIcon className="w-6 h-6 text-lime-400" />
              </div>
              <h3 className="font-semibold text-base-foreground mb-2">Goal Tracking</h3>
              <p className="text-sm text-base-muted-foreground">
                Set and achieve sustainability milestones with smart tracking
              </p>
            </div>

            <div className="text-center p-4">
              <div className="w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrophyIcon className="w-6 h-6 text-lime-400" />
              </div>
              <h3 className="font-semibold text-base-foreground mb-2">Gamification</h3>
              <p className="text-sm text-base-muted-foreground">
                Stay motivated with badges, challenges, and achievements
              </p>
            </div>

            <div className="text-center p-4">
              <div className="w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <StarIcon className="w-6 h-6 text-lime-400" />
              </div>
              <h3 className="font-semibold text-base-foreground mb-2">Advanced Analytics</h3>
              <p className="text-sm text-base-muted-foreground">
                Deep dive into trends and detailed impact analysis
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-12 bg-base-background border-t border-base-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-xl font-semibold text-base-foreground mb-4">
            Questions about our plans?
          </h2>
          <p className="text-base-muted-foreground mb-6">
            Our team is here to help you choose the right plan for your sustainability journey.
          </p>
          <Button variant="secondaryOutlined" className="inline-flex items-center">
            <MailIcon className="w-4 h-4 mr-2" />
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
