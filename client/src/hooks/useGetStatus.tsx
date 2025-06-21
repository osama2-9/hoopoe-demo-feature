import { FaFrown, FaMeh, FaSmile } from "react-icons/fa";

export enum Mood {
  Happy = "happy",
  Neutral = "neutral",
  Sad = "sad",
}

export const useGetStatus = () => {
  const getMoodIcon = (mood: string) => {
    switch (mood) {
      case Mood.Happy:
        return <FaSmile className="text-green-500 text-lg" />;
      case Mood.Neutral:
        return <FaMeh className="text-yellow-500 text-lg" />;
      case Mood.Sad:
        return <FaFrown className="text-red-500 text-lg" />;
      default:
        return <FaMeh className="text-gray-400 text-lg" />;
    }
  };

  // Accept string instead of Mood
  const getMoodColor = (mood: string) => {
    switch (mood) {
      case Mood.Happy:
        return "bg-green-100 text-green-800";
      case Mood.Neutral:
        return "bg-yellow-100 text-yellow-800";
      case Mood.Sad:
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return { getMoodColor, getMoodIcon };
};
