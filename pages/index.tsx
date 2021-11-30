import type { NextPage } from "next";
import { useTheme } from "next-themes";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="m-8">
      <h1 className="text-2xl dark:text-white">Hello</h1>
      <h2 className="text-xl dark:text-white">World</h2>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle Theme: {theme}
      </button>
    </div>
  );
};

export default Home;
