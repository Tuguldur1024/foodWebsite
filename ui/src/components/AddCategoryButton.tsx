"use client";
import { useState } from "react";
import axios from "axios";
import { Button } from "./ui/button";
import AddIcon from "./icons/AddIcon";

const AddCategoryButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5050/category", {
        name: categoryName,
      });
      setIsModalOpen(false);
      setCategoryName("");
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  return (
    <div>
      <Button
        onClick={() => setIsModalOpen(true)}
        className="w-[280px] text-[#5E6166] flex items-center justify-center gap-3 px-2 py-4"
        variant="outline"
      >
        <AddIcon /> Create new category
      </Button>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg p-6 w-[400px] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Create Category</h2>
              <button onClick={() => setIsModalOpen(false)}>&#x2715;</button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">
                  Category Name
                </label>
                <input
                  type="text"
                  value={categoryName}
                  onChange={handleInputChange}
                  placeholder="Enter category name"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <Button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-200 text-black"
                >
                  Cancel
                </Button>
                <Button onClick={handleSubmit} className=" text-white">
                  Save
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCategoryButton;
