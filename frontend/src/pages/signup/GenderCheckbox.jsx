import { useState } from "react";

// eslint-disable-next-line react/prop-types
const GenderCheckbox = ({ onCheckboxChange }) => {
  const [seletedGender, setSelectedGender] = useState("");

  const handleGenderChange = (e) => {
    onCheckboxChange(e.target.value);
    setSelectedGender(e.target.value);
  };
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer `}>
          <span className="label-text">Male</span>
          <input
            type="radio"
            className="checkbox border-slate-900"
            value="male"
            onChange={handleGenderChange}
            checked={seletedGender == "male"}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer `}>
          <span className="label-text">Female</span>
          <input
            type="radio"
            value="female"
            className="checkbox border-slate-900"
            onChange={handleGenderChange}
            checked={seletedGender == "female"}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
