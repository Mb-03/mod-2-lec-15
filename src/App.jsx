import { useEffect, useRef } from "react";

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div>
      <h2 className="title">Auto Scroll Example</h2>
      <div className="section top-section">
        <h3>Scroll Down Autamotically</h3>
      </div>

      <div ref={scrollRef} className="section target-section">
        <h2>You Landed Here</h2>
      </div>
      <div className="section">Another Section</div>
    </div>
  );
};

export default App;
