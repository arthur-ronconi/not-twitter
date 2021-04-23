import { useEffect, useState } from "react";
import { Button } from "../Button";

export const ComposeTweet = () => {
  const [tweetText, setTweetText] = useState();
  const [name, setName] = useState();
  const [charsLeft, setCharsLeft] = useState();
  const totalChars = 280;

  useEffect(() => {
    if (tweetText) {
      setCharsLeft(totalChars - tweetText.length);
    } else {
      setCharsLeft(totalChars);
    }
  }, [tweetText]);

  const postTweet = () => {
    fetch("http://localhost:4000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        body: tweetText,
        author: name,
      }),
    });
  };

  // const handlePost = async () => {
  //   const res = await postTweet();
  //   console.log(await res.json());
  // };

  return (
    <form className="d-flex flex-column">
      <input
        type="text"
        name="author"
        className="form-control mb-2"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <textarea
        className="mb-2 form-control"
        type="text"
        onChange={(e) => {
          setTweetText(e.target.value);
        }}
        maxLength={totalChars}
        placeholder="Write something on the wall"
      />
      <div className="d-flex flex-row justify-content-between align-items-center">
        <small className="text-light">{charsLeft}</small>
        <button type="submit" onClick={() => postTweet()}>
          Tweet
        </button>
      </div>
    </form>
  );
};
