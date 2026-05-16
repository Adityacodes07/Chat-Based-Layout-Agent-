import { useNavigate } from "react-router-dom";

export default function Developer() {
  const navigate = useNavigate();

  const skills = [
    "React",
    "Next.js",
    "JavaScript",
    "Tailwind",
    "Node.js",
    "MongoDB",
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0f",
        padding: "40px 16px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Main Card */}
        <div
          style={{
            background: "#0f0f1a",
            border: "1px solid #1e1e2e",
            borderRadius: "28px",
            padding: "40px 30px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {/* Image */}
            <div
              style={{
                position: "relative",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "#00ff88",
                  opacity: 0.15,
                  filter: "blur(40px)",
                  borderRadius: "999px",
                }}
              />

              <img
                src="/public/favicon.ico"
                alt="Aditya Kewat"
                width={140}
                height={140}
                style={{
                  borderRadius: "999px",
                  border: "4px solid #1e1e2e",
                  position: "relative",
                }}
              />
            </div>

            {/* Info */}
            <p
              style={{
                color: "#00ff88",
                fontSize: "14px",
                marginBottom: "12px",
                fontFamily: "monospace",
              }}
            >
              // developer
            </p>

            <h1
              style={{
                color: "white",
                fontSize: "52px",
                fontWeight: "900",
                marginBottom: "12px",
              }}
            >
              Aditya Kewat
            </h1>

            <p
              style={{
                color: "#b0b0b0",
                fontSize: "18px",
                marginBottom: "20px",
              }}
            >
              Full Stack Developer (React • MERN • Next.js)
            </p>

            <p
              style={{
                color: "#777",
                fontSize: "15px",
                lineHeight: "28px",
                maxWidth: "700px",
              }}
            >
              I build modern web applications with clean UI, scalable backend
              architecture and modern developer experience using JavaScript
              technologies.
            </p>

            {/* Buttons */}
            <div
              style={{
                marginTop: "32px",
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {/* Portfolio */}
              <a
                href="https://3d-portifolio-six.vercel.app/#about"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#00ff88",
                  color: "#000",
                  padding: "14px 28px",
                  borderRadius: "18px",
                  fontWeight: "700",
                  fontSize: "14px",
                  textDecoration: "none",
                  boxShadow: "0 0 20px rgba(0,255,136,0.3)",
                }}
              >
                🚀 View Portfolio
              </a>

              {/* Resume */}
              <a
                href="/public/Jake_s_Resume__1_ (2).pdf"
                download
                style={{
                  background: "#13131f",
                  color: "#ffffff",
                  padding: "14px 28px",
                  borderRadius: "18px",
                  border: "1px solid #2a2a3e",
                  fontWeight: "600",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                📄 Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div
          style={{
            marginTop: "40px",
            background: "#0f0f1a",
            border: "1px solid #1e1e2e",
            borderRadius: "28px",
            padding: "28px",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "24px",
            }}
          >
            <div>
              <p
                style={{
                  color: "#00ff88",
                  fontSize: "13px",
                  marginBottom: "8px",
                  fontFamily: "monospace",
                }}
              >
                // skills
              </p>

              <h2
                style={{
                  color: "white",
                  fontSize: "30px",
                  fontWeight: "800",
                }}
              >
                Tech Stack
              </h2>
            </div>

            <p
              style={{
                color: "#777",
                fontSize: "14px",
              }}
            >
              Technologies I use daily.
            </p>
          </div>

          {/* Skill Items */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
            }}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                style={{
                  padding: "12px 22px",
                  background: "#13131f",
                  border: "1px solid #2a2a3e",
                  borderRadius: "16px",
                  color: "#e2e8f0",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div
          style={{
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          <button
            onClick={() => navigate("/")}
            style={{
              background: "transparent",
              border: "none",
              color: "#888",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}