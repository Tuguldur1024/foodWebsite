// components/FoodInputField.tsx
type InputFieldProps = {
  label: string;
  name: string;
  value: string | number;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  type: string;
  placeholder?: string;
  isSelect?: boolean;
  options?: string[];
};

const FoodInputField = ({
  label,
  name,
  value,
  onChange,
  type,
  placeholder,
  isSelect = false,
  options = [],
}: InputFieldProps) => {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      {isSelect ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="" disabled>
            Select category
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full border border-gray-300 rounded-lg p-2"
        />
      )}
    </div>
  );
};

export default FoodInputField;
