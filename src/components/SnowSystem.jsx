import SnowLayer from "./SnowLayer";

export default function SnowSystem() {
  return (
    <>
      {/* Light snow – background */}
      <SnowLayer count={40} wind={20} speed={10} />

      {/* Medium snow */}
      <SnowLayer count={50} wind={40} speed={8} />

      {/* Heavy snow – front */}
      <SnowLayer count={30} wind={60} speed={6} />
    </>
  );
}
