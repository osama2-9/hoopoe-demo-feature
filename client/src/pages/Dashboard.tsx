import { useState } from "react";
import { FaBed, FaUtensils, FaCheck, FaTimes } from "react-icons/fa";
import { Navbar } from "../components/Navbar";
import { useGetStatus } from "../hooks/useGetStatus";

export const Dashboard = () => {
  const [children] = useState([
    {
      id: 1,
      name: "Jake",
      mood: "happy",
      isNap: false,
      isEat: true,
    },
    {
      id: 2,
      name: "Sarah",
      mood: "neutral",
      isNap: false,
      isEat: true,
    },
    {
      id: 3,
      name: "Lara",
      mood: "sad",
      isNap: true,
      isEat: false,
    },
    {
      id: 4,
      name: "Emily",
      mood: "nutral",
      isNap: false,
      isEat: true,
    },
    {
      id: 5,
      name: "Celeb",
      mood: "happy",
      isNap: true,
      isEat: true,
    },
    {
      id: 6,
      name: "Ethen ",
      mood: "nutral",
      isNap: false,
      isEat: false,
    },
    {
      id: 7,
      name: "Hunter",
      mood: "happy",
      isNap: false,
      isEat: false,
    },
    {
      id: 8,
      name: "Logon",
      mood: "nutral",
      isNap: false,
      isEat: false,
    },
    {
      id: 9,
      name: "Mike",
      mood: "nutral",
      isNap: false,
      isEat: false,
    },
    {
      id: 9,
      name: "Nooh",
      mood: "happy",
      isNap: false,
      isEat: false,
    },

    {
      id: 10,
      name: "Scarlet",
      mood: "nutral",
      isNap: false,
      isEat: false,
    },

    {
      id: 11,
      name: "Carter",
      mood: "Sad",
      isNap: false,
      isEat: false,
    },
  ]);

  const { getMoodColor, getMoodIcon } = useGetStatus();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Navbar navTitle={"Dashboard"} />

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="px-6 py-4 border-b bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-900">
            Children Status Overview
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Current mood, nap, and meal status for all children
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Child Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mood
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nap Status
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Meal Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {children.map((child) => (
                <tr
                  key={child.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                          <span className="text-white font-medium text-sm">
                            {child.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {child.name}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      {getMoodIcon(child.mood)}
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getMoodColor(
                          child.mood
                        )}`}
                      >
                        {child.mood.charAt(0).toUpperCase() +
                          child.mood.slice(1)}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <FaBed
                        className={`text-lg ${
                          child.isNap ? "text-blue-500" : "text-gray-300"
                        }`}
                      />
                      {child.isNap ? (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          <FaCheck className="mr-1" />
                          Napping
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          <FaTimes className="mr-1" />
                          Awake
                        </span>
                      )}
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <FaUtensils
                        className={`text-lg ${
                          child.isEat ? "text-green-500" : "text-gray-300"
                        }`}
                      />
                      {child.isEat ? (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <FaCheck className="mr-1" />
                          Fed
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          <FaTimes className="mr-1" />
                          Not Fed
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 bg-gray-50 border-t">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>Total Children: {children.length}</span>
            <div className="flex space-x-4">
              <span>Napping: {children.filter((c) => c.isNap).length}</span>
              <span>Fed: {children.filter((c) => c.isEat).length}</span>
              <span>
                Happy: {children.filter((c) => c.mood === "happy").length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
