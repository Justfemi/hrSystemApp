import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const HomeLayout = () => {
  const { fetchUsers, fetchDepartments, fetchLeaveRequests } =
    useContext(AuthContext);
  const [stats, setStats] = useState({
    employees: 0,
    departments: 0,
    leaveRequests: 0,
  });

  const [users, setUsers] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const usersData = await fetchUsers();
        const departmentsData = await fetchDepartments();
        const leaveRequestsData = await fetchLeaveRequests();

        setUsers(usersData.results || []);
        setDepartments(departmentsData || []);

        console.log("Users:", usersData.count || 0);
        console.log("Departments:", departmentsData.length || 0);
        console.log("Leave Requests:", leaveRequestsData.count || 0);

        setStats({
          employees: usersData.count || 0,
          departments: departmentsData.length || 0,
          leaveRequests: leaveRequestsData.count || 0,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };
    getStats();
  }, [fetchUsers, fetchDepartments, fetchLeaveRequests]);

  return (
    <>
      <div className="flex justify-evenly items-center py-5 px-4 bg-gray-200">
        <Card>
          {stats.employees} <strong>Employees</strong>
        </Card>
        <Card>
          {stats.departments} <strong>Departments</strong>
        </Card>
        <Card>
          {stats.leaveRequests} <strong>Leave requests</strong>
        </Card>
      </div>
      <div className="grid grid-cols-3 gap-4 pt-10 m-auto ">
        <div className="col-span-2 bg-gray-50 rounded-lg">
          <h3 className="font-semibold pb-3 text-[16px]">
            Available Employees
          </h3>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="text-[12px] uppercase tracking-wide font-medium 50 text-left rounded-tl-md rounded-bl-md">
                  Email
                </th>

                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4  text-left">
                  Name
                </th>

                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 text-left">
                  User name
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4  text-left">
                  Mobile number
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4  text-left">
                  Role
                </th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id}>
                    <td className="py-1 px-2 border-b">
                      <span className="text-[13px] font-medium text-gray-400">
                        <Link to={`/user/employee/${user.id}`}>
                          {user.email}
                        </Link>
                      </span>
                    </td>
                    <td className="py-1 px-2 border-b">
                      <span className="text-[13px] font-medium text-gray-400">
                        {user.first_name} {user.last_name}
                      </span>
                    </td>
                    <td className="py-1 px-2 border-b">
                      <span className="text-[13px] font-medium text-gray-400">
                        {user.username}
                      </span>
                    </td>
                    <td className="py-1 px-2 border-b">
                      <span className="text-[13px] font-medium text-gray-400">
                        {user.mobile_number}
                      </span>
                    </td>
                    <td className="py-1 px-2 border-b">
                      <span className="text-[13px] font-medium text-gray-400">
                        {user.role}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-1 px-2 border-b text-center">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="col-span-1 bg-gray-200 max-w-[250px] p-4 rounded-md shadow-md">
          <h3
            className="font-semibold text-[16px] pb-3
          "
          >
            Departments{" "}
          </h3>
          {departments.length > 0 ? (
            departments.map((department) => (
              <li
                className="uppercase pb-1 border-b list-none text-[14px] "
                key={department.id}
              >
                {department.name}
              </li>
            ))
          ) : (
            <p>No departments found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
