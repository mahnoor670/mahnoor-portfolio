import { useState } from "react";
import "./App.css";
import photo from "./assets/mahnoor.png";
import theOfficeImg from "./assets/shows/theoffice.jpg";
import outerBanksImg from "./assets/shows/outerbanks.jpg";
import daredevilImg from "./assets/shows/daredevil.jpg";
import supernaturalImg from "./assets/shows/supernatural.jpg";
import theWeekndImg from "./assets/artists/theweeknd.jpg";
import partyNextDoorImg from "./assets/artists/partynextdoor.jpg";
import brysonTillerImg from "./assets/artists/brysontiller.jpg";
import headphonesImg from "./assets/hobbies/headphones.png";
import familyImg from "./assets/hobbies/family.jpg";
import cookingImg from "./assets/hobbies/cooking.jpg";
import codingImg from "./assets/hobbies/coding.jpg";

function BackButton({ onClick }) {
  return (
    <button className="page-back" onClick={onClick}>
      ← Back
    </button>
  );
}

function Header({ activePage, onNavigate }) {
  return (
    <header className="site-header">
      <div className="site-header-brand" onClick={() => onNavigate(null)}>
        Mahnoor's Portfolio
      </div>
      <nav className="site-header-nav">
        {BUTTONS.map(({ key, label, color }) => (
          <button
            key={key}
            className={`site-header-link ${color} ${activePage === key ? "site-header-link-active" : ""}`}
            onClick={() => key === "resume" ? window.open("/resume.pdf", "_blank") : onNavigate(key)}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}

const HOBBIES = [
  { name: "Listening to music", image: headphonesImg },
  { name: "Hanging out with friends & family", image: familyImg },
  { name: "Cooking", image: cookingImg },
  { name: "Coding", image: codingImg },
];

const SHOWS = [
  { name: "The Office", image: theOfficeImg },
  { name: "Outer Banks", image: outerBanksImg },
  { name: "Daredevil", image: daredevilImg },
  { name: "Supernatural", image: supernaturalImg },
];
const ARTISTS = [
  { name: "The Weeknd", image: theWeekndImg },
  { name: "PARTYNEXTDOOR", image: partyNextDoorImg },
  { name: "Bryson Tiller", image: brysonTillerImg },
];

function AboutPage({ onBack }) {
  return (
    <div className="page">
      <BackButton onClick={onBack} />
      <h2>About Me</h2>
      <p>
        Hi! I'm Mahnoor, a student at the University of Illinois Urbana-Champaign
        studying Computer Science + Education: Learning Sciences with a Minor in Statistics.
      </p>
      <p>
        I'm passionate about the intersection of technology and learning, building tools
        that make education more accessible, engaging, and effective. I love combining
        my CS background with my interest in how people learn.
      </p>
      <p>
        Outside of class, I enjoy exploring new frameworks, building side projects, and
        contributing to work that solves real problems. I'm currently looking for a
        software engineering internship where I can keep growing as a developer and
        make an impact from day one.
      </p>

      <div className="favorites-section">
        {/* Hobbies */}
        <div className="fav-card fav-card-hobbies">
          <h3>Favorite Hobbies</h3>
          <div className="fav-shows">
            {HOBBIES.map((h) => (
              <div className="fav-show" key={h.name}>
                <img className="fav-show-cover" src={h.image} alt={h.name} />
                <span className="fav-tag">{h.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Shows */}
        <div className="fav-card fav-card-shows">
          <h3>Favorite Shows</h3>
          <div className="fav-shows">
            {SHOWS.map((s) => (
              <div className="fav-show" key={s.name}>
                <img className="fav-show-cover" src={s.image} alt={s.name} />
                <span className="fav-tag">{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Music */}
        <div className="fav-card fav-card-music">
          <h3>Favorite Artists</h3>
          <div className="fav-shows">
            {ARTISTS.map((a) => (
              <div className="fav-show" key={a.name}>
                <img className="fav-show-cover" src={a.image} alt={a.name} />
                <span className="fav-tag">{a.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ResumePage({ onBack }) {
  return (
    <div className="page">
      <BackButton onClick={onBack} />
      <h2>Resume</h2>
      <iframe className="resume-frame" src="/resume.pdf" title="Mahnoor Aetzaz Resume" />
    </div>
  );
}

const PROJECTS = [
  {
    name: "Algorithm Storybook",
    tech: "React, Flask, Python, REST API, SQLite, SQLAlchemy",
    description: "A full-stack web app with 6 interactive algorithm levels. Features real-time game state management, a backend evaluation engine that validates user guesses, and a teacher dashboard to track student progress.",
    github: "https://github.com/mahnoor670/algorithm-storybook",
    demo: "https://algorithm-storybook.vercel.app",
  },
  {
    name: "Email Drafting Assistant",
    tech: "Python, Flask, Gemini API, HTML/CSS, JavaScript",
    description: "An AI-powered email drafting tool with tone-specific templates and dynamic placeholder substitution. Uses the Gemini API to generate emails grounded in user-provided sender, recipient, and tone preferences.",
    github: "https://github.com/CS222-UIUC/fa25-fa25-team019-CM3",
    demo: "https://mediaspace.illinois.edu/media/t/1_kde7q6og",
  },
];

function ProjectsPage({ onBack }) {
  return (
    <div className="page">
      <BackButton onClick={onBack} />
      <h2>Projects</h2>
      <div className="projects-grid">
      {PROJECTS.map((p) => (
        <div className="project-card" key={p.name}>
          <h3>{p.name}</h3>
          <p className="project-tech">{p.tech}</p>
          <p>{p.description}</p>
          <div className="project-links">
            <a href={p.github} target="_blank" rel="noreferrer">GitHub →</a>
            {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live Demo →</a>}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

function ContactPage({ onBack }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
    window.location.href = `mailto:mahnooraetzaz@yahoo.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="page page-contact">
      <BackButton onClick={onBack} />

      <div className="contact-header">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-form-wrap">
        {sent ? (
          <p className="contact-sent">Your email client should have opened — talk soon!</p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-row">
              <div className="contact-field">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="your name"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="contact-field">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>
            <div className="contact-field">
              <label>Message</label>
              <textarea
                placeholder="Add your message here!"
                rows={6}
                required
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button className="contact-submit" type="submit">Send it</button>
          </form>
        )}
      </div>

      <p className="contact-also">let's connect!</p>
      <div className="contact-socials">
        <a href="mailto:mahnooraetzaz@yahoo.com" className="social-box" style={{ background: "#ff8fa3" }}>Email</a>
        <a href="https://linkedin.com/in/mahnoor-aetzaz" target="_blank" rel="noreferrer" className="social-box" style={{ background: "#74b3f5" }}>LinkedIn</a>
        <a href="https://github.com/mahnoor670" target="_blank" rel="noreferrer" className="social-box" style={{ background: "#74c990" }}>GitHub</a>
      </div>
    </div>
  );
}

const PAGE_MAP = {
  about: AboutPage,
  resume: ResumePage,
  projects: ProjectsPage,
  contact: ContactPage,
};

const COLORS = ["#ff8fa3", "#74c990", "#ffd166", "#74b3f5"];

const BG_CIRCLES = [
  { top: "8%",  left: "7%",  color: 0, dur: 7,   delay: 0,   drift: -14 },
  { top: "15%", left: "22%", color: 2, dur: 5.5, delay: 1.2, drift: -10 },
  { top: "5%",  left: "55%", color: 1, dur: 8,   delay: 0.4, drift: -18 },
  { top: "12%", left: "80%", color: 3, dur: 6,   delay: 2,   drift: -12 },
  { top: "30%", left: "4%",  color: 3, dur: 5,   delay: 0.8, drift: -10 },
  { top: "72%", left: "10%", color: 2, dur: 7.5, delay: 1.5, drift: -14 },
  { top: "85%", left: "30%", color: 0, dur: 6.5, delay: 0.2, drift: -11 },
  { top: "78%", left: "60%", color: 1, dur: 9,   delay: 1,   drift: -16 },
  { top: "90%", left: "82%", color: 2, dur: 5,   delay: 2.5, drift: -9  },
  { top: "55%", left: "92%", color: 0, dur: 6,   delay: 0.6, drift: -13 },
  { top: "40%", left: "88%", color: 3, dur: 8.5, delay: 1.8, drift: -15 },
  { top: "62%", left: "50%", color: 2, dur: 5.5, delay: 3,   drift: -10 },
  { top: "48%", left: "18%", color: 1, dur: 4.5, delay: 0.5, drift: -8  },
  { top: "22%", left: "43%", color: 0, dur: 7,   delay: 2.2, drift: -14 },
  { top: "35%", left: "68%", color: 3, dur: 6.5, delay: 1.1, drift: -12 },
];

const BUTTONS = [
  { key: "about",    label: "About Me",   color: "btn-red"    },
  { key: "resume",   label: "Resume",     color: "btn-green"  },
  { key: "projects", label: "Projects",   color: "btn-yellow" },
  { key: "contact",  label: "Contact Me", color: "btn-blue"   },
];

export default function App() {
  const [page, setPage] = useState(null);

  if (page && page !== "resume") {
    const ActivePage = PAGE_MAP[page];
    return (
      <>
        <Header activePage={page} onNavigate={setPage} />
        <ActivePage onBack={() => setPage(null)} />
      </>
    );
  }

  return (
    <>
    <Header activePage={page} onNavigate={setPage} />
    <div className="homepage">
      <div className="bg-circles">
        {BG_CIRCLES.map((c, i) => (
          <div
            key={i}
            className="bg-circle"
            style={{
              top: c.top,
              left: c.left,
              background: COLORS[c.color],
              "--dur": `${c.dur}s`,
              "--delay": `${c.delay}s`,
              "--drift": `${c.drift}px`,
            }}
          />
        ))}
      </div>
      <div className="polaroid">
        <img src={photo} alt="Mahnoor Aetzaz" />
        <div className="polaroid-caption">
          <h1>Mahnoor Aetzaz</h1>
          <p className="polaroid-school">University of Illinois Urbana-Champaign</p>
          <p>
            Computer Science + Education: Learning Sciences
            <br />
            Minor in Statistics
          </p>
        </div>
      </div>

      <div className="button-grid">
        {BUTTONS.map(({ key, label, color }) => (
          <button
            key={key}
            className={`color-btn ${color}`}
            onClick={() => key === "resume" ? window.open("/resume.pdf", "_blank") : setPage(key)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
    </>
  );
}
