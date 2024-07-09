
import  { useState } from 'react';

const CheckboxButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label style={styles.label}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          style={styles.checkbox}
        />
        {isChecked ? 'Checked' : 'Unchecked'}
      </label>
    </div>
  );
};

const styles = {
  label: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  checkbox: {
    marginRight: '8px',
  },
};

export default CheckboxButton;
