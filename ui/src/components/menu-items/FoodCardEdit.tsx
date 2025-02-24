"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import EditFoodModal from "./EditFoodModal";

type Food = {
  id: string;
  price: number;
  name: string;
  image: string;
  categoryId: string;
  ingredient: string;
};

const FoodCardEdit = (props: Food) => {
  const { id, price, name, image, categoryId, ingredient } = props;

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-col gap-[14px]">
        <div className="relative w-[282px] h-[186px] rounded-2xl overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
          <Button
            variant="outline"
            onClick={() => setIsEditModalOpen(true)}
            className={`absolute inset-0 m-auto flex h-[40px] w-[166px] items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-opacity-40 rounded-[100px] font-semibold text-[20px] leading-6`}
          >
            Edit
          </Button>
        </div>
        <div>
          <p className="font-bold text-[20px]">{name}</p>
          <p className="font-semibold text-[20px] text-[#18BA51] font-poppins">
            {price}
          </p>
        </div>
      </div>

      {isEditModalOpen && (
        <EditFoodModal
          _id={id}
          currentName={name}
          currentPrice={price}
          currentCategory={categoryId}
          onClose={() => setIsEditModalOpen(false)}
          currentImage={image}
          currentIngredient={ingredient}
        />
      )}
    </div>
  );
};
export default FoodCardEdit;
