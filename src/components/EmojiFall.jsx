import React, { useContext } from "react";
import { EmojiContext } from "../EmojiContext";
import "../assets/css/fallEmoji.css"

export const EmojiFall = () => {
  const { triggerFall, emoji } = useContext(EmojiContext);
  if (!triggerFall) return null;
  return (
    <div className="emoji-container">
      {[...Array(20)].map((_, i) => {
        return (
          <span className="emoji" style={{ "--x": Math.random() }}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
};
