"use client";
import axios from "axios";
import FoodCardEdit from "./FoodCardEdit";
import { useEffect, useState } from "react";

type Food = {
  _id: string;
  price: number;
  name: string;
  image: string;
  ingredient: string;
};

type AdminFoodItemsProps = {
  categoryName: string;
};

const AdminFoodItems = (props: AdminFoodItemsProps) => {
  const { categoryName } = props;
  const [foodItem, setFoodItem] = useState<Food[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!categoryName) return;
      try {
        const response = await axios.get(
          `http://localhost:5050/foods/${categoryName}`
        );
        setFoodItem(response?.data.foods);
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    };

    fetchData();
  }, [categoryName]);

  return (
    <div className="container mx-auto">
      <div className=" flex flex-wrap gap-6 ml-16 ">
        {foodItem?.map((item, index) => (
          <div key={index}>
            <FoodCardEdit
              id={item._id}
              price={item.price}
              name={item.name}
              image={item.image}
              categoryId={""}
              ingredient={item.ingredient}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminFoodItems;
