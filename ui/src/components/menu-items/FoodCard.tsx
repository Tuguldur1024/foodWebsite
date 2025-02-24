import { FoodPorch } from "./FoodPorch";

type FoodCardProps = {
  _id: string;
  name: string;
  price: string;
  image: string;
  ingredient: string;
  categoryId: string;
};

const FoodCard = ({
  _id,
  name,
  price,
  image,
  ingredient,
  categoryId,
}: FoodCardProps) => {
  return (
    <div className="flex flex-col gap-[14px]">
      <div
        className="w-[282px] h-[186px] rounded-2xl bg-cover bg-center"
        style={{
          backgroundImage: `url("${image}")`,
        }}
      ></div>
      <div>
        <p className="font-bold text-[20px]">
          <FoodPorch
            foodItem={{
              _id,
              name,
              price,
              image,
              ingredient,
              categoryId,
            }}
          />
        </p>
        <p className="font-semibold text-[20px] text-[#18BA51] font-poppins">
          {price}₮
        </p>
      </div>
    </div>
  );
};

export default FoodCard;
