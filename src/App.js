import React, { useEffect } from "react";
import "./App.css";

function App() {
    useEffect(() => {
        const startAnimation = () => {
            const branch = document.getElementById("branch");
            const leaves = [document.getElementById("leaf-left"), document.getElementById("leaf-right")];
            const flowerCenter = document.getElementById("flower-center");
            const petals = document.querySelectorAll(".petal");

            // Dalın büyümesi
            branch.style.strokeDasharray = branch.getTotalLength();
            branch.style.strokeDashoffset = branch.getTotalLength();
            branch.style.transition = "stroke-dashoffset 3s ease-in-out";
            branch.style.strokeDashoffset = branch.getTotalLength();

            setTimeout(() => {
                branch.style.strokeDashoffset = 0;
            }, 500);

            // Yaprakların açılması
            setTimeout(() => {
                leaves.forEach((leaf) => {
                    leaf.style.opacity = 1;
                    leaf.style.transition = "opacity 1.5s ease-in-out";
                });
            }, 3500);

            // Çiçeğin açılması
            setTimeout(() => {
                flowerCenter.style.opacity = 1;
                flowerCenter.style.transition = "opacity 1s ease-in-out";

                petals.forEach((petal, index) => {
                    setTimeout(() => {
                        petal.style.opacity = 1;
                        petal.style.transition = "opacity 0.8s ease-in-out";
                    }, index * 200); // Her yaprak için gecikme
                });
            }, 5000);

            // Animasyonu sıfırla ve tekrar başlat
            setTimeout(() => {
                branch.style.strokeDashoffset = branch.getTotalLength();
                leaves.forEach((leaf) => (leaf.style.opacity = 0));
                flowerCenter.style.opacity = 0;
                petals.forEach((petal) => (petal.style.opacity = 0));
                startAnimation();
            }, 8000); // Tüm animasyon bittiğinde yeniden başlat
        };

        startAnimation();
    }, []);

    return (
        <div className="App">
            <svg
                id="flower-animation"
                viewBox="0 0 500 500"
                xmlns="http://www.w3.org/2000/svg"
            >

                <path
                    id="branch"
                    d="M250 500 Q250 300 220 200 Q190 100 250 50 Q310 100 280 200 Q250 300 250 500"
                    fill="none"
                    stroke="#6b4f4f"
                    strokeWidth="4"
                    strokeLinecap="round"
                />

                <path
                    id="leaf-left"
                    d="M220 200 Q180 150 200 170 Q220 190 220 200"
                    fill="green"
                    opacity="0"
                />
                <path
                    id="leaf-right"
                    d="M280 200 Q320 150 300 170 Q280 190 280 200"
                    fill="green"
                    opacity="0"
                />

                <circle
                    id="flower-center"
                    cx="250"
                    cy="50"
                    r="20"
                    fill="#FF4F81"
                    opacity="0"
                    />
                <circle className="petal" cx="250" cy="15" r="30" fill="#FF6F91" opacity="0" />
                <circle className="petal" cx="285" cy="50" r="30" fill="#FF6F91" opacity="0" />
                <circle className="petal" cx="250" cy="85" r="30" fill="#FF6F91" opacity="0" />
                <circle className="petal" cx="215" cy="50" r="30" fill="#FF6F91" opacity="0" />
            </svg>
        </div>
    );
}

export default App;
