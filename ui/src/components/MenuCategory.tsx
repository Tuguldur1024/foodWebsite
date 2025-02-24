"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image"; // Make sure to import Image from next/image
// import { useQueryState } from "nuqs";

export const UserMenu = () => {
  const params = useParams();
  const router = useRouter();
  // const [search] = useQueryState("search");
  const { category: categoryParam } = params || { category: "all" };

  const [categories, setCategories] = useState<{ _id: string; name: string }[]>(
    []
  );
  const [menuItems, setMenuItems] = useState<
    { _id: string; name: string; price: number; image: string }[]
  >([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:5050/category");
        setCategories(response?.data?.categories || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const endpoint =
          categoryParam === "all"
            ? "http://localhost:5050/foods"
            : `http://localhost:5050/foods/category/${categoryParam}`;
        const response = await axios.get(endpoint);
        setMenuItems(response.data.foods || []);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
  }, [categoryParam]);
  console.log(menuItems);

  // const filteredItems=menuItems.filter((item)=>{
  //   if (!search)return true; return item.category.toLowercae().includes(search.?ToLowercase// ())
  const handleFilterClick = (menu: string) => {
    router.push(`/menu/${menu}`);
  };

  return (
    <div className="w-[1440px] flex flex-col bg-#F7F7F8">
      <div className="flex gap-4 py-4 px-8 bg-white shadow-md">
        <button
          onClick={() => handleFilterClick("all")}
          className={`px-4 py-2 rounded-md ${
            !categoryParam ? "bg-[#29cc57] text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category._id}
            onClick={() => handleFilterClick(category.name)}
            className={`px-4 py-2 rounded-md ${
              decodeURIComponent(`${categoryParam}`).toLowerCase() ===
              category?.name.toLowerCase()
                ? "bg-[#29cc57] text-white"
                : "bg-gray-200"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-6 p-8">
        {menuItems.length > 0 ? (
          menuItems.map((item) => (
            <div
              key={item._id}
              style={{
                width: "200px",
                background: "white",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "120px",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginTop: "8px",
                }}
              >
                {item.name}
              </h3>
              <p style={{ color: "#6B7280", marginTop: "4px" }}>
                ${item.price.toFixed(2)}
              </p>
            </div>
          ))
        ) : (
          <p style={{ color: "#6B7280", textAlign: "center", width: "100%" }}>
            No items found.
          </p>
        )}
      </div>
    </div>
  );
};
