"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "./ui/button";
import FoodInputField from "./FoodInputField";
import CategorySelector from "./CategorySelector";

const AddFoodButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [foodnameData, setFoodnameData] = useState("");
  const [ingredientData, setIngredientData] = useState("");
  const [foodpriceData, setFoodpriceData] = useState("");
  const [categories, setCategories] = useState<{ _id: string; name: string }[]>(
    []
  );
  const [category, setCategory] = useState("");
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
  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFoodData((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = async () => {
  //   try {
  //     await axios.post("http://localhost:5050/foods/", );
  //     setIsModalOpen(false);
  //   } catch (error) {
  //     console.error("Error adding food item:", error);
  //   }
  // };

  const addfood = async () => {
    try {
      const response = axios.post(
        `${process.env.NEXT_PUBLIC_MONGODB_URI}/foods`,
        {
          name: foodnameData,
          image: "",
          ingredient: ingredientData,
          price: foodpriceData,
          categoryId: category,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Button
        onClick={() => setIsModalOpen(true)}
        style={{
          backgroundColor: "#fff",
          color: "#000",
        }}
        className="w-[180px]"
        variant="outline"
      >
        Add new food
      </Button>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg p-6 w-[600px] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Create food</h2>
              <button onClick={() => setIsModalOpen(false)}>&#x2715;</button>
            </div>
            <form className="space-y-4">
              <FoodInputField
                label="Хоолны нэр"
                name="name"
                value={foodnameData}
                onChange={(e) => setFoodnameData(e.target.value)}
                type="text"
                placeholder="Placeholder"
              />
              <CategorySelector
                categories={categories}
                onCategoryChange={(e) => setCategory(e.target.value)}
              />
              <FoodInputField
                label="Хоолны орц"
                name="ingredient"
                value={ingredientData}
                onChange={(e) => setIngredientData(e.target.value)}
                type="text"
                placeholder="Placeholder"
              />
              <FoodInputField
                label="Хоолны үнэ"
                name="price"
                value={foodpriceData}
                onChange={(e) => setFoodpriceData(e.target.value)}
                type="number"
                placeholder="Placeholder"
              />
              <FoodInputField
                label="Хоолны зураг"
                name="image"
                value={"jhj"}
                onChange={(e) => setFoodpriceData(e.target.value)}
                type="text"
                placeholder="Add image for the food"
              />
              <div className="flex justify-end gap-4 mt-6">
                <Button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-200 text-black"
                >
                  Clear
                </Button>
                <Button onClick={addfood} className="bg-green-500 text-white">
                  Continue
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddFoodButton;
