type CategorySelectorProps = {
  categories: { _id: string; name: string }[];
  onCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const CategorySelector = ({
  categories,
  onCategoryChange,
}: CategorySelectorProps) => {
  return (
    <div>
      <label className="block text-sm font-medium">Хоолны ангилал</label>
      <select
        name="categoryId"
        onChange={onCategoryChange}
        className="w-full border border-gray-300 rounded-lg p-2"
      >
        <option value="" disabled>
          Select category
        </option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
