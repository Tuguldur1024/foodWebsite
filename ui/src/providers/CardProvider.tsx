"use client";
import React, { createContext, useState, useEffect, useContext } from "react";

type FoodItem = {
  _id: string;
  name: string;
  quantity:number
  price:number,
  ingredient:string,
  categoryId:string;

};
type FoodItemContextType = {
  setFoodItems: React.Dispatch<React.SetStateAction<FoodItem[]>>
  setFoodIds: React.Dispatch<React.SetStateAction<FoodItem[]>>
  foodIds: FoodItem[];
  foodItems: FoodItem[];
  addToCart: (_newItem: FoodItem) => void;
  removeFromCart: (_itemId: string) => void;
  clearCart: () => void;
  addToFood: (_newItem: FoodItem) => void;
  incrementFoodQuantity:(foodid:string)=>void
  decrementFoodQuantity:(foodid:string)=>void
};
const FoodItemsContext = createContext<FoodItemContextType>(
 {setFoodItems:()=>{},
  setFoodIds: ()=>{}, incrementFoodQuantity:()=>{},
  decrementFoodQuantity:()=>{},
  foodIds: [],
  foodItems: [],
  addToCart:()=>{},
  removeFromCart:()=>{},
  clearCart: ()=>{},
  addToFood: ()=>{}},
 
);

const useItemProvider = () => {
  const context = useContext(FoodItemsContext);

  return context;
};

const FoodProvider = ({ children }: { children: React.ReactNode }) => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [foodIds, setFoodIds] = useState<FoodItem[]>([]);

  useEffect(() => {
    const orderFoodItems = localStorage.getItem("foodItems");
    if (orderFoodItems) {
      setFoodItems(JSON.parse(orderFoodItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("foodItems", JSON.stringify(foodItems));
  }, [foodItems]);

  const addToCart = (newItem: FoodItem) => {
    setFoodItems((prevItems) => {
      prevItems.find((item) => item._id === newItem._id);
      return [...prevItems, { ...newItem }];
    });
  };

  useEffect(() => {
    const orderFoodId = localStorage.getItem("foodId");
    if (orderFoodId) {
      setFoodItems(JSON.parse(orderFoodId));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("foodId", JSON.stringify(foodIds));
  }, [foodIds]);

  const addToFood = (newItem:FoodItem) => {
    setFoodIds((prevItems) => {
      prevItems.find((item) => item._id === newItem._id);
      return [...prevItems, { ...newItem }];
    });
  };
const incrementFoodQuantity=(foodId:string)=>{
  const newfoodItems=foodItems.map((foodItem)=>{
if (foodItem._id===foodId)  {return {
  ...foodItem, quantity:foodItem.quantity+1
} }
return foodItem
  });
  setFoodItems(newfoodItems)
}
const decrementFoodQuantity=(foodId:string)=>{
  const newfoodItems=foodItems.map((foodItem)=>{
if (foodItem._id===foodId)  {return {
  ...foodItem, quantity:foodItem.quantity-1
} }
return foodItem
  });
  setFoodItems(newfoodItems)
}

  const removeFromCart = (itemId: string) => {
    setFoodItems(foodItems.filter((item) => item._id !== itemId));
  };

  const clearCart = () => {
    setFoodItems([]);
  };

  return (
    <FoodItemsContext.Provider
      value={{
        incrementFoodQuantity,decrementFoodQuantity,
        setFoodItems,
        setFoodIds,
        foodItems,
        foodIds,
        addToCart,
        addToFood,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </FoodItemsContext.Provider>
  );
};

export { useItemProvider, FoodProvider };
