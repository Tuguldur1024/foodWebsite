"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Category = () => {
  const [hover, setHover] = useState<number | null>(null);

  const categories = ["Breakfast", "Main Course", "Soup", "Dessert"];

  return (
    <div className="flex flex-row gap-[32px] px-[120px] py-[32px]">
      {categories.map((category, index) => (
        <Button
          key={index}
          onMouseEnter={() => setHover(index)}
          onMouseLeave={() => setHover(null)}
          style={{
            backgroundColor: hover === index ? "#29cc57" : "white",
            transition: "0.2s",
          }}
          className="w-[280px] "
          variant="outline"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
