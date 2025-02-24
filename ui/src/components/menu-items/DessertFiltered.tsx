import { ArrowRight } from "lucide-react";
import FoodCard from "./FoodCard";
import GreenStar from "../icons/GreenStar";
import { useEffect, useState } from "react";
import axios from "axios";

type Food = {
  image: string;
  price: string;
  name: string;
  _id: string;
  key: string;
  ingredient: string;
  categoryId: {
    _id: string;
    name: string;
  };
};
const DessertFiltered = () => {
  const [mainFood, setMainFood] = useState<Food[]>([]);
  const [all, setAll] = useState(4);
  const fetchdata = async () => {
    try {
      const response = await axios.get<{ foods: Food[] }>(
        `${process.env.NEXT_PUBLIC_MONGODB_URI}/foods`
      );

      setMainFood(response.data.foods);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const dessertFiltered = mainFood.filter(
    (food) => food.categoryId.name === "Dessert"
  );
  const allDessert = () => {
    setAll((prev) => prev + mainFood.length);
  };
  return (
    <div className="flex flex-col gap-6 py-4 mb-[82px]">
      <div className="flex py-4 justify-evenly">
        <div className="flex gap-2 items-center">
          <GreenStar />
          <p className="font-bold text-[22px] leading-[33px] font-poppins w-[1039px]">
            Амттан
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[#18BA51]" onClick={allDessert}>
            Бүгдийг харах
          </p>
          <button>
            <ArrowRight className="text-[#18BA51]" />
          </button>
        </div>
      </div>
      <div className="flex justify-evenly">
        {dessertFiltered.slice(0, all).map((item) => (
          <FoodCard
            categoryId={item.categoryId.name}
            ingredient={item.ingredient}
            key={item._id}
            _id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default DessertFiltered;
