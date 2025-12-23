import "../styles/animatedButton.css";

export default function AnimatedPlayButton({ label, onClick }) {
  return (
    <button className="play-btn morph" onClick={onClick}>
      ▶ {label}
    </button>
  );
}

