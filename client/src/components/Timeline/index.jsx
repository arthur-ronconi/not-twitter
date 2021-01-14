import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { Tweet } from "../Tweet";

export const Timeline = () => {
  const [tweets, setTweets] = useState([]);
  const reverseOrder = (array) => {
    let temp = [];
    for (let i = 0; i < array.length; i++) {
      temp.unshift(array[i]);
    }
    return temp;
  };
  const addTweetsToState = async () => {
    const response = await fetch("http://localhost:4000/posts", {
      method: "GET",
    });
    const tweetList = await response.json();
    setTweets(reverseOrder(await tweetList));
  };
  useEffect(() => {
    addTweetsToState();
  }, []);

  return (
    <div>
      <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
        {tweets.map((tweet) => (
          <li key={Math.random() * 100} className="my-1">
            <Tweet
              body={tweet.body}
              author={tweet.author}
              date={tweet.date}
              id={tweet.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
