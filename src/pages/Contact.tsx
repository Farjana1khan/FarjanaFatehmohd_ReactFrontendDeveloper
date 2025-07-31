import { useTheme } from "../context/ThemeContext";

const Contact: React.FC = () => {
  const { theme } = useTheme();

  const themeClass =
    theme === "theme2"
      ? "bg-gray-800 text-white font-serif"
      : theme === "theme3"
      ? "bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 text-purple-900 font-pacifico"
      : "bg-white text-gray-800";

  return (
    <main className={`mt-20 p-4 min-h-screen ${themeClass}`}>
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

      <p className="mb-4">
        We'd love to hear from you! Whether you have a question about features,
        feedback, or anything else
      </p>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Email</h2>
        <p>📧 farjana09khan@gmail.com</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Phone</h2>
        <p>📞 +91-7021170769</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Location</h2>
        <p>🏢 Delhi, India</p>
      </div>

    
      <p>Thank you for reaching out!</p>
    </main>
  );
};

export default Contact;
