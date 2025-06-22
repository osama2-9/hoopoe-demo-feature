import { useState } from "react";
import { Navbar } from "../components/Navbar";

type TabKey = "face-detection" | "eating" | "sleeping";

const Classroom = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("face-detection");

  const videoData: Record<
    TabKey,
    {
      publicId: string;
      title: string;
      description: string;
      cloudName: string;
    }
  > = {
    "face-detection": {
      publicId:
        "Game-Bank-Games-69-74-WattsEnglish-1920x1080-avc1-mp4a_cut_opencv_vp2xwp",
      cloudName: "dk5kncp7q",
      title: "Face Detection Tutorial",
      description: "Session 1: Introduction to Face Detection",
    },
    eating: {
      publicId:
        "Kids-Try-School-Lunches-from-Around-1920x1080-avc1-mp4a_cut_opencv_gsrfac",
      cloudName: "dk5kncp7q",
      title: "Healthy Eating Habits",
      description: "Session 1: Nutrition Basics",
    },
    sleeping: {
      publicId: "sleeping_oe0xfs",
      cloudName: "dk5kncp7q",
      title: "Sleep Hygiene",
      description: "Session 1: Understanding Sleep Patterns",
    },
  };

  const tabs = [
    { id: "face-detection", label: "Face Detection" },
    { id: "eating", label: "Eating" },
    { id: "sleeping", label: "Sleeping" },
  ];

  const handleTabChange = (tabId: TabKey) => {
    setActiveTab(tabId);
    setIsPlaying(false);
  };

  const currentVideo = videoData[activeTab];

  const getCloudinaryIframeUrl = (cloudName: string, publicId: string) => {
    if (!publicId) return "";
    return `https://player.cloudinary.com/embed/?cloud_name=${cloudName}&public_id=${publicId}&profile=cld-default`;
  };

  const currentIframeUrl = getCloudinaryIframeUrl(
    currentVideo.cloudName,
    currentVideo.publicId
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <Navbar navTitle="Classroom" />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-t-lg shadow-sm border border-b-0">
              <div className="flex border-b">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id as TabKey)}
                    className={`px-6 py-3 font-medium text-sm transition-colors relative ${
                      activeTab === tab.id
                        ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-b-lg shadow-sm border overflow-hidden">
              <div className="aspect-video bg-black relative">
                {currentVideo.publicId ? (
                  <iframe
                    key={activeTab}
                    src={currentIframeUrl}
                    width="100%"
                    height="100%"
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    className="absolute inset-0"
                    title={currentVideo.title}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-4xl mb-4">📹</div>
                      <p className="text-lg">
                        Video not configured for{" "}
                        {tabs.find((t) => t.id === activeTab)?.label}
                      </p>
                      <p className="text-sm text-gray-400 mt-2">
                        Add the Cloudinary public ID to display the video
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 border-t">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {currentVideo.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {currentVideo.description}
                    </p>
                    {currentVideo.publicId && (
                      <p className="text-xs text-gray-500 mt-1">
                        Public ID: {currentVideo.publicId}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center space-x-3">
                    {/* Video Status Indicator */}
                    <div
                      className={`flex items-center space-x-2 ${
                        currentVideo.publicId
                          ? "text-green-600"
                          : "text-gray-400"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          currentVideo.publicId ? "bg-green-500" : "bg-gray-400"
                        }`}
                      ></div>
                      <span className="text-xs">
                        {currentVideo.publicId ? "Ready" : "Not configured"}
                      </span>
                    </div>

                    {/* External Link Button */}
                    {currentVideo.publicId && (
                      <a
                        href={currentIframeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded transition-colors"
                      >
                        Open in New Tab
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <h4 className="font-semibold text-gray-900 mb-3">
                Course Progress
              </h4>
              <div className="space-y-3">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          activeTab === tab.id ? "bg-blue-600" : "bg-gray-300"
                        }`}
                      ></div>
                      <span
                        className={`text-sm ${
                          activeTab === tab.id
                            ? "text-blue-600 font-medium"
                            : "text-gray-600"
                        }`}
                      >
                        {tab.label}
                      </span>
                    </div>
                    {/* Video availability indicator */}
                    <div
                      className={`w-2 h-2 rounded-full ${
                        videoData[tab.id as TabKey].publicId
                          ? "bg-green-500"
                          : "bg-red-400"
                      }`}
                      title={
                        videoData[tab.id as TabKey].publicId
                          ? "Video available"
                          : "Video not configured"
                      }
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Configuration Helper */}
            <div className="bg-white rounded-lg shadow-sm border p-4 mt-4">
              <h4 className="font-semibold text-gray-900 mb-3">
                Video Configuration
              </h4>
              <div className="text-xs text-gray-600 space-y-2">
                <p>
                  <strong>Current Tab:</strong>{" "}
                  {tabs.find((t) => t.id === activeTab)?.label}
                </p>
                <p>
                  <strong>Cloud Name:</strong> {currentVideo.cloudName}
                </p>
                <p>
                  <strong>Public ID:</strong>{" "}
                  {currentVideo.publicId || "Not set"}
                </p>
                <div className="mt-3 p-2 bg-gray-50 rounded text-xs">
                  <p className="font-medium mb-1">To add videos:</p>
                  <p>1. Upload video to Cloudinary</p>
                  <p>2. Copy the public ID</p>
                  <p>3. Add it to the videoData object</p>
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
