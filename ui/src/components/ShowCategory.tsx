"use client";

import { useState } from "react";
import { EllipsisVertical } from "lucide-react";
import { Button } from "./ui/button";
import { useParams, useRouter } from "next/navigation";

type FoodCategory = {
  _id: string;
  name: string;
};

type ShowCategoryProps = {
  categories: FoodCategory[];
};

export const ShowCategory = ({ categories }: ShowCategoryProps) => {
  const params = useParams();
  const router = useRouter();
  const { category: categoryParam } = params;
  const [hover, setHover] = useState<number | null>(null);

  const onSelectFoodCategory = (category: FoodCategory) => {
    router.push(`/admin/${category.name}`);
  };
  return (
    <div className="flex flex-col gap-7">
      {categories.map((category, index) => (
        <Button
          key={category._id}
          onClick={() => onSelectFoodCategory(category)}
          onMouseEnter={() => setHover(index)}
          onMouseLeave={() => setHover(null)}
          style={{
            // backgroundColor: hover === index ? "" : "white",
            backgroundColor:
              category.name === categoryParam ? "#29cc57" : "white",
            transition: "0.2s",
            color: hover === index ? "white" : "black",
          }}
          className="w-[280px] flex justify-between hover:bg-[#29cc57]"
          variant="outline"
        >
          {category.name}
          <EllipsisVertical />
        </Button>
      ))}
    </div>
  );
};
