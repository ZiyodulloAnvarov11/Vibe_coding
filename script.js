// script.js

const linksData = [
    {
        title: "Portfolio Website",
        url: "https://example.com",
        icon: "globe",
        iconColor: "#3b82f6" // Ko'k
    },
    {
        title: "Academic Achievements",
        url: "#",
        icon: "book-open",
        iconColor: "#8b5cf6" // Binafsharang
    },
    {
        title: "Sport Achievements",
        url: "#",
        icon: "award",
        iconColor: "#f59e0b" // Sariq
    },
    {
        title: "Resume / CV",
        url: "#",
        icon: "file-text",
        iconColor: "#10b981" // Yashil
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const linksContainer = document.getElementById("links-container");

    linksData.forEach((link, index) => {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.className = "link-card";
        
        // Animatsiya navbati bilan chiqishi uchun
        a.style.animationDelay = `${0.1 + (index * 0.1)}s`;
        a.style.animation = "fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards";
        a.style.opacity = "0"; // Animatsiya boshlanguncha ko'rinmaslik
        
        a.innerHTML = `
            <!-- Ikonka qismi (rasmdagidek kichik quticha) -->
            <div class="icon-box">
                <i data-feather="${link.icon}" style="color: ${link.iconColor};" class="w-5 h-5"></i>
            </div>
            
            <!-- Matn qismi -->
            <span class="font-semibold text-[16px] text-[#2d2d2d] flex-1 text-left">
                ${link.title}
            </span>
        `;
        linksContainer.appendChild(a);
    });

    // Feather ikonkalarni faollashtirish
    if(typeof feather !== 'undefined') {
        feather.replace();
    }
});
