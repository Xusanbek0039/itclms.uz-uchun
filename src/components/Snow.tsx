import { useEffect } from "react";

const Snow = () => {
  useEffect(() => {
    const snowCount = 120;

    for (let i = 0; i < snowCount; i++) {
      const snow = document.createElement("div");
      snow.innerHTML = "❄";
      snow.className = "snowflake";
      snow.style.left = Math.random() * window.innerWidth + "px";
      snow.style.animationDuration = Math.random() * 5 + 5 + "s";
      snow.style.fontSize = Math.random() * 20 + 10 + "px";
      document.body.appendChild(snow);
    }

    return () => {
      document.querySelectorAll(".snowflake").forEach(el => el.remove());
    };
  }, []);

  return null;
};

export default Snow;
