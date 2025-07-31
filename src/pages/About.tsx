import { useTheme } from "../context/ThemeContext";

const About: React.FC = () => {
  const { theme } = useTheme();

  const themeClass =
    theme === "theme2"
      ? "bg-gray-800 text-white font-serif"
      : theme === "theme3"
      ? "bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 text-purple-900 font-pacifico"
      : "bg-white text-gray-800";

  return (
    <main className={`mt-20 p-4 min-h-screen ${themeClass}`}>
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        Welcome to our Multi-Theme App! This application demonstrates how modern
        frontend technologies can be used to build responsive, user-friendly,
        and theme-aware interfaces.
      </p>
      <p className="mb-4">
        Our team is passionate about design systems, user experience, and clean
        code. This project is a practical showcase of using <strong>React</strong>,{" "}
        <strong>Tailwind CSS</strong>, and <strong>TypeScript</strong> to build
        dynamic layouts that adjust their structure, typography, and color
        scheme based on user preference.
      </p>
      <p className="mb-4">
        The app features three unique themes:
        <ul className="list-disc pl-6 mt-2">
          <li>Minimalist Light Theme (Theme 1)</li>
          <li>Dark Theme with Serif Font and Sidebar Layout (Theme 2)</li>
          <li>Colorful, Playful Theme with Card-Based Layout (Theme 3)</li>
        </ul>
      </p>
      <p>
        Feel free to explore the features, change themes, and see how the design
        adapts in real-time. Thank you for visiting!
      </p>
    </main>
  );
};

export default About;
