import { useEffect, useState, useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import api from "../../api";

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const { fetchDepartments } = useContext(AuthContext);

  const fetchOrganization = async (url) => {
    try {
      const response = await api.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      return response.data.name;
    } catch (error) {
      console.error("Error fetching organization:", error);
      return "Unknown Organization";
    }
  };

  const fetchHead = async (url) => {
    try {
      const response = await api.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const head = response.data;

      return `${head.first_name} ${head.last_name}`;
    } catch (error) {
      console.error("Error fetching head of department:", error);
      return "Unknown Head";
    }
  };

  useEffect(() => {
    const getDepartments = async () => {
      try {
        const data = await fetchDepartments();
        const departmentWithDetails = await Promise.all(
          data.map(async (department) => {
            const organizationName = await fetchOrganization(
              department.organization
            );
            const headName = await fetchHead(department.head);
            return {
              ...department,
              organizationName,
              headName,
            };
          })
        );
        setDepartments(departmentWithDetails);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    getDepartments();
  }, [fetchDepartments]);

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-md">
      <h4 className="mb-4 text-xl font-bold">Departments</h4>
      {departments.length > 0 ? (
        <ul>
          {departments.map((department) => (
            <li key={department.id} className="mb-2 p-2 border-b">
              <h5 className="font-semibold">{department.name}</h5>
              <p>Organization: {department.organizationName}</p>
              <p>Head of Department: {department.headName}</p>
              <p>Description: {department.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No departments available.</p>
      )}
    </div>
  );
};

export default Departments;
