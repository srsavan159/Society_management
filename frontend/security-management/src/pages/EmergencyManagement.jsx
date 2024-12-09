import React from "react";

const EmergencyManagement = () => {
  return (
    <div className="flex justify-center items-center min-h-[98%] bg-gray-100">
      <div className="w-[410px] p-6 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Alert</h1>
        <form>
          {/* Alert Type Dropdown */}
          <div className="mb-4">
            <label
              htmlFor="alertType"
              className="block text-sm font-medium text-gray-700"
            >
              Alert Type <span className="text-red-500">*</span>
            </label>
            <select
              id="alertType"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            >
              <option>Select Alert</option>
              <option>Emergency</option>
              <option>Warning</option>
              <option>Fire Alarm</option>
              <option>Earth Quack</option>
              <option>High Winds</option>
              <option>Thunder</option>
            </select>
          </div>

          {/* Description Input */}
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="An emergency description typically refers to a detailed account or explanation of an emergency situation."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-gradient-to-r from-[#fe512e] to-[#f09619] rounded-md "
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmergencyManagement;
