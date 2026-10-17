export function Stars() {
  const stars = [];
  for (let i = 0; i < 80; i++) {
    const height = Math.floor(Math.random() * 10);
    const width = height;
    const bottom = Math.floor(Math.random() * 100);
    const left = Math.floor(Math.random() * 100);
    const delay = Math.floor(Math.random() * 10);
    stars.push(
      <div
        key={i}
        className="star"
        style={{
          height: `${height}px`,
          width: `${width}px`,
          bottom: `${bottom}%`,
          left: `${left}%`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  }
  return <div className="stars">{stars}</div>;
}
