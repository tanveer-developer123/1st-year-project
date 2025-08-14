import { Copy, Mic } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";
import ReactMarkdown from 'react-markdown'; // Import react-markdown

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef(null);

  const handleVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || (window).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Sorry, your browser does not support Speech Recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US"; // Urdu chahiye to use: "ur-PK"
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      console.log("🎤 Listening...");
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      console.log("You said:", transcript);
      setMessage(transcript); // 👉 yeh input field me set karega
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.start();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userMessage = message.trim();
    if (!userMessage) return;

    setChatLog((prev) => [...prev, { type: "user", text: userMessage }]);
    setMessage("");
    setIsThinking(true);

    setIsThinking(true); // Start thinking

    const response = await fetch("http://127.0.0.1:8000/api/chat/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage }),
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");

    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        setIsThinking(false); // Done thinking
        break;
      }

      const chunk = decoder.decode(value, { stream: true });

      setChatLog((prev) => {
        const updated = [...prev];
        if (updated.length && updated[updated.length - 1].type === "bot") {
          updated[updated.length - 1].text += chunk;
        } else {
          updated.push({ type: "bot", text: chunk });
        }
        return updated;
      });
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatLog]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div className="relative min-h-screen flex flex-col bg-gray-950">
        <div className="py-12 px-6 sm:px-12 md:px-32 lg:px-48 flex flex-col bg-gray-950">

          <div className="absolute top-6 left-6 z-20 cursor-pointer" onClick={() => navigate("/")}>
            <h1 className="text-white text-xl sm:text-2xl font-bold tracking-wide hover:text-blue-400 transition-all duration-300">
              CodePilot
            </h1>
            <p className="text-xs text-gray-400">Your AI Coding Companion</p>
          </div>

          {/* Existing chatbot content here... */}
        </div>
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover filter blur-sm opacity-30 z-0"
          style={{
            backgroundImage:
              "url('/chat.jpg')",
          }}
        ></div>

        {/* Chat Content */}
        <div className="px-6 sm:px-12 md:px-32 lg:px-48 relative z-10 flex flex-col flex-1">
          <main className="flex-1 overflow-y-auto py-6 space-y-4">
            {chatLog.map((msg, idx) => (
              <div
                key={idx}
                data-aos={msg.type === "user" ? "fade-left" : "fade-right"}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`relative group max-w-[85%] px-5 py-3 rounded-xl text-sm sm:text-base transition duration-200 shadow-xl border ${msg.type === "user"
                    ? "bg-gradient-to-br from-blue-600 to-cyan-500 text-white border-blue-400/20"
                    : "bg-white/10 text-white border-white/10"
                    }`}
                >
                  <div className="text-xs text-gray-300 mb-1">
                    {msg.type === "user" ? "You" : "CodePilot"}
                  </div>
                  {/* Render message as markdown */}
                  <ReactMarkdown>{msg.text}</ReactMarkdown>

                  {/* Copy Button for Bot Messages */}
                  {msg.type === "bot" && (
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(msg.text);
                      }}
                      title="Copy"
                      className="absolute top-2 right-2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-white"
                    >
                      <span className="flex items-center gap-1 text-xs">
                        <Copy className="w-4 h-4" />
                        Copy
                      </span>
                    </button>
                  )}
                </div>
              </div>
            ))}

            {isThinking && (
              <div data-aos="fade-right" className="flex justify-start">
                <div className="px-5 py-3 rounded-xl text-sm text-white bg-white/10 border border-white/10 animate-pulse">
                  <div className="text-xs text-gray-300 mb-1">CodePilot</div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-150" />
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-300" />
                    <span className="ml-2 text-sm italic text-gray-300">Thinking...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </main>

          {/* Input Box */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2 p-4 border-t border-gray-800 bg-gray-900/80 rounded-lg backdrop-blur"
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message or use voice..."
              className="w-full sm:flex-1 px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Mic Button */}
            <button
              type="button"
              onClick={handleVoiceInput}
              className="w-full sm:w-auto px-3 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-md border border-gray-700"
              title="Click and speak"
            >
              <Mic className="w-5 h-5 mx-auto" />
            </button>

            {/* Send Button */}
            <button
              type="submit"
              className="w-full sm:w-auto px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Send
            </button>
          </form>
          <div className="text-center text-sm text-gray-500 py-2">
            This AI chatbot can make mistakes. Always double-check important information.
          </div>

        </div>
      </div>
    </>
  );
};

export default Chatbot;
