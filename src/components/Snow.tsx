import { useEffect } from "react";

const Snow = () => {
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const snowCount = 120;

    for (let i = 0; i < snowCount; i++) {
      const snow = document.createElement("div");
      snow.innerHTML = "❄";
      snow.className = "snowflake";

      snow.style.left = Math.random() * window.innerWidth + "px";
      snow.style.fontSize = Math.random() * 18 + 10 + "px";
      snow.style.opacity = Math.random().toString();

      // ⏱️ Tezlik
      snow.style.animationDuration = Math.random() * 5 + 6 + "s";

      // 🌬️ Shamol yo‘nalishi (chap ↔ o‘ng)
      const wind = Math.random() * 100 - 50; // -50px → +50px
      snow.style.setProperty("--wind", `${wind}px`);

      document.body.appendChild(snow);
    }

    return () => {
      document.querySelectorAll(".snowflake").forEach(el => el.remove());
    };
  }, []);

  return null;
};

export default Snow;
