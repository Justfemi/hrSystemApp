import { AppWindow } from "lucide-react";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../contexts/AuthContext";

const AddDepartment = () => {
  const [formData, setFormData] = useState({
    organization: "",
    name: "",
    headOfDepartment: "",
    description: "",
  });

  const [organizations, setOrganizations] = useState([]);
  const [users, setUsers] = useState([]);

  const { addDepartment, fetchUsers, fetchOrganizations } =
    useContext(AuthContext);

  useEffect(() => {
    const loadOrganizations = async () => {
      try {
        const orgs = await fetchOrganizations();
        setOrganizations(orgs);
      } catch (error) {
        console.error("Error fetching organizations:", error);
      }
    };

    const loadUsers = async () => {
      try {
        const usersList = await fetchUsers();
        setUsers(usersList.results);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    loadOrganizations();
    loadUsers();
  }, [fetchOrganizations, fetchUsers]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDepartment(formData);
      console.log("Department added:", formData);
      setFormData({
        organization: "",
        name: "",
        headOfDepartment: "",
        description: "",
      });
    } catch (error) {
      console.error("Error adding department:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-md">
      <div className="flex space-x-1 mb-2 items-center n  text-gray-400  font-medium py-4">
        <AppWindow />
        <h4>Add Department</h4>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md  gap-2 rounded px-8 pt-6 pb-8 mb-3"
      >
        <div className="mb-4">
          <label htmlFor="organization" className="block font-semibold mb-2">
            Organization:
          </label>
          <select
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value="">Select Organization</option>
            {organizations.map((org) => (
              <option key={org.id} value={org.url}>
                {org.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="headOfDepartment"
            className="block font-semibold mb-2"
          >
            Head of Department:
          </label>
          <select
            type="text"
            name="headOfDepartment"
            value={formData.headOfDepartment}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value="">Select Head of Department</option>
            {users.map((user) => (
              <option key={user.id} value={user.url}>
                {user.first_name} {user.last_name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-semibold mb-2">
            Description:
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded"
        >
          Add Department
        </button>
      </form>
    </div>
  );
};

export default AddDepartment;
