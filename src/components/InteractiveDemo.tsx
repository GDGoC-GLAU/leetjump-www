"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";

const InteractiveDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const demoSteps = [
    {
      key: "Alt+L",
      search: "",
      description: "Press Alt+L anywhere on the web",
      showInitial: true,
    },
    {
      key: "",
      search: "two",
      description: "Start typing to search...",
      showInitial: false,
    },
    {
      key: "",
      search: "two",
      description: "Instant results appear",
      showInitial: false,
    },
    {
      key: "Enter",
      search: "two",
      description: "Press Enter to open problem",
      showInitial: false,
    },
  ];

  const searchResults = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      difficultyColor: "text-green-600",
      selected: true,
    },
    {
      id: 2,
      title: "Add Two Numbers",
      difficulty: "Medium",
      difficultyColor: "text-amber-600",
      selected: false,
    },
    {
      id: 4,
      title: "Median of Two Sorted Arrays",
      difficulty: "Hard",
      difficultyColor: "text-red-600",
      selected: false,
    },
    {
      id: 21,
      title: "Merge Two Sorted Lists",
      difficulty: "Easy",
      difficultyColor: "text-green-600",
      selected: false,
    },
    {
      id: 29,
      title: "Divide Two Integers",
      difficulty: "Medium",
      difficultyColor: "text-amber-600",
      selected: false,
    },
    {
      id: 159,
      title: "Longest Substring with At Most Two Dist...",
      difficulty: "Medium",
      difficultyColor: "text-amber-600",
      isPro: true,
      selected: false,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        const nextStep = (prev + 1) % demoSteps.length;
        if (nextStep === 0) {
          setIsVisible(false);
          setSearchValue("");
          setTimeout(() => setIsVisible(true), 500);
        } else {
          setSearchValue(demoSteps[nextStep].search);
          setIsVisible(true);
        }
        return nextStep;
      });
    }, 3000);

    // Initial show
    setTimeout(() => setIsVisible(true), 500);

    return () => clearInterval(timer);
  }, []);

  const currentDemo = demoSteps[currentStep];
  const showResults = searchValue.length > 0 && !currentDemo.showInitial;

  return (
    <div className="relative max-w-md mx-auto">
      {/* Demo Description */}
      <div className="text-center mb-4">
        <div className="text-sm text-muted-foreground mb-2">
          {currentDemo.description}
        </div>
        {currentDemo.key && (
          <kbd className="px-3 py-1.5 bg-primary text-primary-foreground text-sm font-mono rounded">
            {currentDemo.key}
          </kbd>
        )}
      </div>

      {/* Extension Popup - Simplified */}
      <div
        className={`bg-card border border-border shadow-lg transition-all duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{
          minHeight: showResults ? "300px" : "60px",
        }}
      >
        {/* Search Bar */}
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search problems..."
              className="w-full pl-10 pr-4 py-2 bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              value={searchValue}
              readOnly
            />
          </div>
        </div>

        {/* Search Results */}
        {showResults && (
          <div className="bg-background border-t border-border">
            {searchResults.map((result, index) => (
              <div
                key={result.id}
                className={`flex items-center gap-3 px-4 py-3 text-sm hover:bg-accent/50 cursor-pointer border-l-4 ${
                  result.selected
                    ? "bg-accent border-l-primary"
                    : "border-l-transparent"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-muted-foreground font-mono text-xs min-w-[2rem] text-left">
                  {result.id}
                </div>
                <div className="flex-1 text-foreground font-medium">
                  {result.title}
                </div>
                <div className="flex items-center gap-2">
                  {result.isPro && (
                    <span className="bg-purple-100 text-purple-700 px-2 py-0.5 text-xs font-medium rounded">
                      PRO
                    </span>
                  )}
                  <div
                    className={`text-xs font-medium ${result.difficultyColor}`}
                  >
                    {result.difficulty}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Step Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {demoSteps.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentStep ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveDemo;
