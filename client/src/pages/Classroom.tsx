import { useState } from "react";
import ReactPlayer from "react-player";
import { FaPlay, FaPause } from "react-icons/fa";
import { Navbar } from "../components/Navbar";

const Classroom = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <Navbar navTitle="Classroom" />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <div className="aspect-video bg-black relative">
                <ReactPlayer
                  url={videoUrl}
                  width="100%"
                  height="100%"
                  playing={isPlaying}
                  controls={true}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
              </div>

              <div className="p-4 border-t">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Introduction to Data Science
                    </h3>
                    <p className="text-sm text-gray-600">
                      Session 1: Getting Started
                    </p>
                  </div>

                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                    <span>{isPlaying ? "Pause" : "Play"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classroom;
