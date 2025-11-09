export default function Home() {
  return (
    <div className="container">
      <h1>Hello, World!</h1>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          font-family: Helvetica, Arial, sans-serif;
          text-align: center;
        }
        h1 {
          font-size: 3rem;
        }
      `}</style>
    </div>
  );
}
