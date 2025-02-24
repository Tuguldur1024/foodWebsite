"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import AddFoodButton from "./AddFoodButton";
import AddCategoryButton from "./AddCategoryButton";
import AdminFoodItems from "./menu-items/AdminFoodItems";
import { ShowCategory } from "./ShowCategory";
import { useParams } from "next/navigation";

const SidebarCategory = () => {
  const params = useParams();
  const { category } = params;

  const [categories, setCategories] = useState<{ _id: string; name: string }[]>(
    []
  );

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:5050/category");
        setCategories(response?.data?.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-[1440px] flex bg-#F7F7F8">
      <div className="flex flex-col gap-[32px] py-[32px] pr-[24px] pl-[120px] ">
        <h1 className="w-[127px] h-[33px] font-bold text-[22px] leading-[33px]">
          Food menu
        </h1>
        <ShowCategory
          onclick={() => setCategoryName()}
          categories={categories}
        />
        <div>
          <AddCategoryButton />
        </div>
      </div>
      <div className="px-[24px] w-full py-8">
        <div className="flex justify-between py-4">
          <p className="w-[150px] h-[33px] font-bold text-[22px] leading-[33px] ">
            {decodeURIComponent(category)}
          </p>
          <AddFoodButton />
        </div>
        <AdminFoodItems categoryName={category} />
      </div>
    </div>
  );
};

export default SidebarCategory;
