import React, { useEffect, useState } from "react";
import { IconCircleChevronDown } from '@tabler/icons-react';
interface SubDepartment {
  name: string;
  isChecked: boolean;
}

interface UserData {
  department: string;
  sub_departments: SubDepartment[];
}

const MultiSelect: React.FC = () => {
  const initialUserData: UserData[] = [
    {
      department: "customer_service",
      sub_departments: [
        { name: "support", isChecked: false },
        { name: "customer_success", isChecked: false }
      ]
    },
    {
      department: "design",
      sub_departments: [
        { name: "graphic_design", isChecked: false },
        { name: "product_design", isChecked: false },
        { name: "web_design", isChecked: false }
      ]
    }
  ];

  const [users, setUsers] = useState<UserData[]>([]);
  const [visibility, setVisibility] = useState<boolean[]>([]);

  useEffect(() => {
    setUsers(initialUserData);
    setVisibility(new Array(initialUserData.length).fill(false));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, departmentIndex: number) => {
    const { name, checked } = e.target;
    setUsers(prevUsers =>
      prevUsers.map((user, userIndex) => {
        if (userIndex === departmentIndex) {
          return {
            ...user,
            sub_departments: user.sub_departments.map(subDept =>
              subDept.name === name ? { ...subDept, isChecked: checked } : subDept
            ),
          };
        }
        return user;
      })
    );
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>, departmentIndex: number) => {
    const { checked } = e.target;
    setUsers(prevUsers =>
      prevUsers.map((user, userIndex) => {
        if (userIndex === departmentIndex) {
          return {
            ...user,
            sub_departments: user.sub_departments.map(subDept => ({
              ...subDept,
              isChecked: checked
            })),
          };
        }
        return user;
      })
    );
  };

  const toggleVisibility = (index: number) => {
    setVisibility(prevVisibility =>
      prevVisibility.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  return (
    <div>
      {users.map((user, departmentIndex) => (
        <div key={departmentIndex}>
          <form>
            <div>
              <input
                type="checkbox"
                onChange={(e) => handleSelectAll(e, departmentIndex)}
                checked={user.sub_departments.every(subDept => subDept.isChecked)}
              />
              <label >
                {user.department}<IconCircleChevronDown onClick={() => toggleVisibility(departmentIndex)} style={{ cursor: 'pointer', }}/>
              </label>
            </div>
            {visibility[departmentIndex] &&
              user.sub_departments.map((subDept, subDeptIndex) => (
                <div key={subDeptIndex} style={{ marginLeft: '20px' }}>
                  <input
                    type="checkbox"
                    name={subDept.name}
                    checked={subDept.isChecked}
                    onChange={(e) => handleChange(e, departmentIndex)}
                  />
                  <label>{subDept.name}</label>
                </div>
              ))}
          </form>
        </div>
      ))}
    </div>
  );
};

export default MultiSelect;
