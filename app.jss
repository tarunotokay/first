import { useState } from "react";

const slides = [
  {
    emoji: "🥺",
    title: "Hey Cutiepie",
    text: "Can we talk for a moment? There's something important I wanna tell you...",
    button: "Continue 💖",
    color: "from-pink-200 to-rose-100",
  },
  {
    emoji: "🧸",
    title: "I know you're hurt... but I honestly don't know why 😭",
    text: "And honestly I've been feeling really bad about it 🥺",
    button: "Next 👉",
    color: "from-purple-200 to-pink-100",
  },
  {
    emoji: "💌",
    title: "Little Things I Wanna Say...",
    text: "Tu jab bina reason thodi distant si ho jaati hai na... tab genuinely lagta hai maine kuch galat kar diya 🥺",
    button: "Continue 💫",
    color: "from-rose-200 to-pink-100",
  },
  {
    emoji: "😭",
    title: "I'm Sorryyy",
    text: "Kabhi kabhi dumb cheeze bol deta hu 😭 but tujhe hurt karna kabhi intention nahi hota.",
    button: "One More 👉👈",
    color: "from-pink-100 to-purple-100",
  },
  {
    emoji: "🍦😂",
    title: "Peace Offer",
    text: "Please mann jao 😭 warna majboori me tujhe tera fav ice cream 🍦 aur tera fav machhaat khilana padega 💸🫶",
    button: "Hehe Continue 💖",
    color: "from-orange-100 to-pink-100",
  },
  {
    emoji: "🫶",
    title: "Final Message",
    text: "I like talking to you 😭💖 and I like when you tease me 🥺 Sometimes I want to message you too... but then I feel kahi tujhe disturb ya pareshan toh nahi kar raha m 😭 So I just stay quiet.",
    button: "Accept My Apology 🥺",
    color: "from-pink-300 to-rose-200",
  },
];

export default function SorryApp() {
  const [page, setPage] = useState(0);
  const [accepted, setAccepted] = useState(false);

  const nextPage = () => {
    if (page < slides.length - 1) {
      setPage(page + 1);
    } else {
      setAccepted(true);
    }
  };

  if (accepted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-300 via-rose-200 to-pink-100 flex items-center justify-center p-6 overflow-hidden">
        
        <div className="absolute top-10 left-10 text-5xl animate-pulse">
          💖
        </div>

        <div className="absolute bottom-10 right-10 text-5xl animate-bounce">
          🧸
        </div>

        <div className="bg-white/90 backdrop-blur-md p-8 rounded-[40px] shadow-2xl text-center max-w-md w-full animate-bounce">

          <div className="text-7xl mb-5">
            😭💖🫶
          </div>

          <h1 className="text-4xl font-bold text-pink-500 mb-4">
            Thank Youuu 🥺
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed">
            Thank youuu for listening to my bakbak 🥺
            <br />
            <br />
            Aur please itna ignore mat kiya karo 😭🫶
          </p>

          <button className="mt-6 bg-pink-400 hover:bg-pink-500 text-white px-8 py-3 rounded-full text-lg shadow-lg transition-all duration-300 hover:scale-105">
            Accepted 🫶
          </button>

          <div className="mt-6 text-3xl animate-pulse">
            💖 ✨ 🧸 ✨ 💖
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${slides[page].color} flex items-center justify-center p-6 transition-all duration-700 overflow-hidden`}
    >

      <div className="absolute top-10 left-10 text-4xl animate-pulse">
        💖
      </div>

      <div className="absolute top-20 right-10 text-3xl animate-bounce">
        ✨
      </div>

      <div className="absolute bottom-20 left-12 text-3xl animate-pulse">
        🫶
      </div>

      <div className="absolute bottom-10 right-10 text-4xl animate-bounce">
        💕
      </div>

      <div className="bg-white/90 backdrop-blur-md max-w-md w-full rounded-[40px] shadow-2xl p-8 text-center relative overflow-hidden">

        <div className="flex justify-center gap-2 mb-6">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === page
                  ? "w-8 bg-pink-400"
                  : "w-3 bg-pink-200"
              }`}
            />
          ))}
        </div>

        <div className="text-7xl mb-6 animate-bounce">
          {slides[page].emoji}
        </div>

        <h1 className="text-4xl font-bold text-pink-500 mb-4">
          {slides[page].title}
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          {slides[page].text}
        </p>

        <button
          onClick={nextPage}
          className="bg-pink-400 hover:bg-pink-500 active:scale-95 text-white px-8 py-3 rounded-full text-lg shadow-lg transition-all duration-300 hover:scale-105"
        >
          {slides[page].button}
        </button>

        <div className="mt-8 flex justify-center gap-3 text-2xl animate-pulse">
          💕 🧸 ✨ 🫶
        </div>
      </div>
    </div>
  );
}
