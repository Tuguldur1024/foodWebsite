import { ArrowRight } from "lucide-react";
import GreenStar from "../icons/GreenStar";
import FoodCard from "./FoodCard";
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

const DiscountFiltered = () => {
  const [mainFood, setMainFood] = useState<Food[]>([]);

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

  const breakfast = mainFood.filter(
    (food) => food.categoryId.name === "Breakfast"
  );
  return (
    <div className="flex flex-col gap-6 py-4">
      <div className="flex  justify-evenly">
        <div className="flex gap-2 items-center">
          <GreenStar />
          <p className="font-bold text-[22px] leading-[33px] font-poppins w-[1039px]">
            Хямдралтай
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[#18BA51]">Бүгдийг харах</p>
          <button>
            <ArrowRight className="text-[#18BA51]" />
          </button>
        </div>
      </div>
      <div className="flex justify-evenly">
        {breakfast.slice(0, 4).map((item) => (
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

export default DiscountFiltered;
