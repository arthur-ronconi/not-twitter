import { useEffect, useState } from "react";
import { Button } from "../Button";

export const ComposeTweet = () => {
  const [tweetText, setTweetText] = useState();
  const [charsLeft, setCharsLeft] = useState();
  const totalChars = 280;

  useEffect(() => {
    if (tweetText) {
      setCharsLeft(totalChars - tweetText.length);
    } else {
      setCharsLeft(totalChars);
    }
  }, [tweetText]);

  return (
    <div className="d-flex flex-column">
      <textarea
        className="mb-2 form-control"
        type="text"
        onChange={(e) => {
          setTweetText(e.target.value);
        }}
        maxLength={totalChars}
      />
      <div className="d-flex flex-row justify-content-between align-items-center">
        <small className="text-light">{charsLeft}</small>
        <Button>Tweet</Button>
      </div>
    </div>
  );
};
