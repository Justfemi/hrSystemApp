import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileDetails = () => {
  const [profile, setProfile] = useState({
    gender: "",
    dateOfBirth: "",
    maritalStatus: "",
    nationality: "",
    nationalId: "",
    alternativeEmail: "",
    country: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save profile details to local storage or state management
    localStorage.setItem("profileDetails", JSON.stringify(profile));
    navigate("/staff-details");
  };

  return (
    <div className="max-w-[960px] mx-auto mt-8 p-4 border rounded-lg shadow-md">
      <h4 className="text-gray-400 font-medium py-4">Profile Details</h4>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md grid grid-cols-2 gap-2 rounded px-8 pt-6 pb-8 mb-3"
      >
        {/* Form fields for profile details */}
        <div className="mb-4">
          <label htmlFor="gender" className="block font-semibold mb-2">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={profile.gender}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value="MALE">MALE</option>
            <option value="FEMALE">FEMALE</option>
            <option value="OTHERS">OTHERS</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="dateOfBirth" className="block font-semibold mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={profile.dateOfBirth}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="maritalStatus" className="block font-semibold mb-2">
            Marital Status
          </label>
          <select
            id="maritalStatus"
            name="maritalStatus"
            value={profile.maritalStatus}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value="SINGLE">SINGLE</option>
            <option value="MARRIED">MARRIED</option>
            <option value="OTHERS">OTHERS</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="nationality" className="block font-semibold mb-2">
            Nationality
          </label>
          <select
            id="nationality"
            name="nationality"
            value={profile.nationality}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value="Ugandan">Ugandan</option>
            <option value="Nigerian">Nigerian</option>
            <option value="Kenyan">Kenyan</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="nationalId" className="block font-semibold mb-2">
            National Id
          </label>
          <input
            type="text"
            id="nationalId"
            name="nationalId"
            value={profile.nationalId}
            onChange={handleInputChange}
            placeholder="Enter national Id number"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="alternativeEmail"
            className="block font-semibold mb-2"
          >
            Alternative email
          </label>
          <input
            type="alternativeEmail"
            id="alternativeEmail"
            name="alternativeEmail"
            value={profile.alternativeEmail}
            onChange={handleInputChange}
            placeholder="Enter alternative email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block font-semibold mb-2">
            Country
          </label>
          <select
            id="country"
            name="country"
            value={profile.country}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value=" UGANDA"> UGANDA</option>
            <option value="KENYA">KENYA</option>
            <option value="RWANDA">RWANDA</option>
            <option value="NIGERIA">NIGERIA</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block font-semibold mb-2">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={profile.city}
            onChange={handleInputChange}
            placeholder="Enter national Id number"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="zipCode" className="block font-semibold mb-2">
            Zip code
          </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={profile.zipCode}
            onChange={handleInputChange}
            placeholder="Enter national Id number"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-900 focus:outline-none focus:ring"
        >
          Save profile and continue
        </button>
      </form>
    </div>
  );
};

export default ProfileDetails;
