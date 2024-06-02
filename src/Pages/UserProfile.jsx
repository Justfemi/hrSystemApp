import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { User } from "lucide-react";

const UserProfile = () => {
  const { fetchUser } = useContext(AuthContext);
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await fetchUser(userId);
        if (userData) {
          setUser(userData);
        } else {
          console.error("Unexpected response format:", userData);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };
    getUser();
  }, [fetchUser, userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  // Extracting profile details
  const profile = user.profile ? user.profile[0] : {};
  const {
    organization = "",
    gender = "",
    date_of_birth = "",
    marital_status = "",
    nationality = "",
    national_id = "",
    alternative_email = "",
    country = "",
    address = "",
    city = "",
    zip_code = "",
  } = profile;

  return (
    <div className="max-w-full mx-auto mt-8 p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">User Profile</h2>
      <div className="flex flex-col space-y-5">
        <div className="flex justify-between shadow-md rounded-lg p-5">
          <div className="flex space-x-3 items-center">
            <User className="h-10 w-10 border rounded-full " />
            <div className="flex flex-col space-y-1 text-[14px] text-gray-700">
              <strong>
                {user.first_name} {user.last_name}
              </strong>
              <span>{user.role}</span>
              <span>{address}</span>
            </div>
          </div>
          <button>Edit</button>
        </div>
        <div className="flex justify-between shadow-md rounded-lg p-5 items-start">
          <div className="flex flex-col space-y-5">
            <h3 className="font-bold text-[16px]">Personal Information</h3>
            <div className="grid grid-cols-2 gap-x-10 gap-y-3">
              <div className="flex flex-col space-y-1">
                <h3 className="text-[14px] font-semibold">First name</h3>
                <p className="text-xs text-gray-600">{user.first_name}</p>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="text-[14px] font-semibold">Last name</h3>
                <p className="text-xs text-gray-600">{user.last_name}</p>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="text-[14px] font-semibold">Email address</h3>
                <p className="text-xs text-gray-600">{user.email}</p>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="text-[14px] font-semibold">
                  Alternative Email address
                </h3>
                <p className="text-xs text-gray-600">
                  {user.alternative_email}
                </p>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="text-[14px] font-semibold">Organisation</h3>
                <p className="text-xs text-gray-600">{organization}</p>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="text-[14px] font-semibold">Phone</h3>
                <p className="text-xs text-gray-600">{user.mobile_number}</p>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="text-[14px] font-semibold">Gender</h3>
                <p className="text-xs text-gray-600">{gender}</p>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="text-[14px] font-semibold">Date of birth</h3>
                <p className="text-xs text-gray-600">{date_of_birth}</p>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="text-[14px] font-semibold">Marital Status</h3>
                <p className="text-xs text-gray-600">{marital_status}</p>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="text-[14px] font-semibold">Nationality</h3>
                <p className="text-xs text-gray-600">{nationality}</p>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="text-[14px] font-semibold">
                  National Id Number
                </h3>
                <p className="text-xs text-gray-600">{national_id}</p>
              </div>
            </div>
          </div>
          <button>Edit</button>
        </div>
        <div className="flex justify-between shadow-md rounded-lg p-5 items-start">
          <div className="flex flex-col space-y-3">
            <h3 className="font-bold text-[16px]">Address</h3>
            <div className="grid grid-cols-2 gap-x-10 gap-y-3">
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-[14px]">Country</h3>
                <p className="text-xs text-gray-600">{country}</p>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-[14px]">Address</h3>
                <p className="text-xs text-gray-600">{address}</p>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-[14px]">City</h3>
                <p className="text-xs text-gray-600">{city}</p>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-[14px]">Zipcode</h3>
                <p className="text-xs text-gray-600">{zip_code}</p>
              </div>
            </div>
          </div>
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
