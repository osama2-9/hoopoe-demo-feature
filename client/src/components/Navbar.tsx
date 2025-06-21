import { FaChartBar, FaUsers, FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

interface NavbarProps {
  navTitle: string;
}
export const Navbar = ({ navTitle }: NavbarProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border mb-6 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 p-3 rounded-lg">
            <FaVideo className="text-blue-600 text-xl" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">{navTitle}</h1>
            <p className="text-gray-600">Live</p>
          </div>
        </div>

        <div className="flex space-x-3">
          <Link
            to={"/dashboard"}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
          >
            <FaChartBar />
            <span>Analytics</span>
          </Link>

          <Link
            to={"/"}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <FaUsers />
            <span>Classroom</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
