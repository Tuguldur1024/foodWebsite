import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

type EditFoodModalProps = {
  _id: string;
  currentName: string;
  currentPrice: number;
  currentCategory: string;
  currentImage: string;
  currentIngredient: string;
  onClose: () => void;
};

const EditFoodModal = ({
  _id,
  currentName,
  currentPrice,
  currentCategory,
  currentImage,
  currentIngredient,
  onClose,
}: EditFoodModalProps) => {
  const [name, setName] = useState(currentName);
  const [price, setPrice] = useState(currentPrice);
  const [categoryId, setCategoryId] = useState(currentCategory);
  const [image, setImage] = useState(currentImage || "");

  const [ingredient, setIngredient] = useState(currentIngredient);

  const [categories, setCategories] = useState<{ _id: string; name: string }[]>(
    []
  );

  const handleUpdateFood = async () => {
    try {
      await axios.put(`http://localhost:5050/foods/${_id}`, {
        name,
        price,
        categoryId,
        image,
        ingredient,
      });
      onClose();
    } catch (error) {
      console.error("Aldaa garlaa", error);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:5050/category");
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      style={{ zIndex: 1000 }}
    >
      <div className="bg-white p-6 rounded-lg w-[400px]">
        <h2 className="text-xl font-bold mb-4">Edit Food Item</h2>

        <label className="block mb-2">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </label>

        <label className="block mb-2">
          <span className="text-gray-700">Price (₮)</span>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full border p-2 rounded"
          />
        </label>

        <label className="block mb-2">
          <span className="text-gray-700">Image URL</span>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Ingredient</span>
          <input
            type="text"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Category</span>
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="w-full border p-2 rounded"
          >
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleUpdateFood}>Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

export default EditFoodModal;
