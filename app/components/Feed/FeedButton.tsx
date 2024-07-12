import { CardButtons } from "./FeedCard";

const FeedButton: React.FC<{ btn: CardButtons }> = ({ btn }) => {
  return (
    <button
      className={`text-lg ${
        btn.type == "like" &&
        "hover:text-red-600 hover:bg-red-400/20 rounded-full shadow-inner shadow-red-500/20 p-1 "
      } ${
        btn.type == "comment" &&
        "hover:text-sky-500 hover:bg-sky-400/20 rounded-full shadow-inner shadow-sky-500/20 p-1 "
      }  ${
        btn.type == "repost" &&
        "hover:text-green-500 hover:bg-green-400/20 rounded-full shadow-inner shadow-green-500/20 p-1 "
      }
      ${
        btn.type == "bookmark" &&
        "hover:text-sky-500 hover:bg-sky-400/20 rounded-full shadow-inner shadow-sky-500/20 p-1 "
      }   
        ${
          btn.type == "reach" &&
          "hover:text-sky-500 hover:bg-sky-400/20 rounded-full shadow-inner shadow-sky-500/20 p-1 "
        }   
      `}
    >
      {btn.icon}
    </button>
  );
};

export default FeedButton;
