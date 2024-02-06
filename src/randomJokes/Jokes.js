import { useState } from "react";

const Jokes = () => {
  const [joke, setJoke] = useState();
  let myJokes = [
    {
      joke: "People don't like having to bend over to get their drinks... We really need to raise the bar.",
    },
    {
      joke: "What do you call a bee from the wrong side of town? A bumblegee",
    },
    {
      joke: "What do you get when you cross an elephant and a rhino? 'ell if I know wot to call it!",
    },
    {
      joke: "What do you call a Moroccan candy distributor? A Fez dispenser.",
    },
    {
      joke: "What do you call an alien in a swamp? A MARSHian",
    },
    {
      joke: "What do you call a blind deer? No-eye deer. What do you call a blind deer with no legs? *Still* no-eye deer.",
    },
    {
      joke: "Did I tell you I'm joining a gym in Gainesborough? Because I'm all about those gains bro",
    },
    {
      joke: "What killed the guy ordering at an Italian restaurant? He'd had trouble deciding to go with the appetizers or entrees, but eventually he went antipasto way.",
    },
    {
      joke: "JKLMNOPQRST That's all that stands between U and I :)",
    },
    {
      joke: "If Mr. Bean lost one of his legs he'd be cannellini!",
    },
  ];

  let index = Math.floor(Math.random() * (myJokes.length - 1));
  console.log(myJokes[index].joke);
  setJoke(myJokes[index].joke);
  return (
    <div>
      <h1>{joke}</h1>
    </div>
  );
};

export default Jokes;
