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
        iconColor: "#8b5cf6" // Binafsha
    },
    {
        title: "Sport Achievements",
        url: "#",
        icon: "award",
        iconColor: "#f59e0b" // Asal rang
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
        a.className = "magic-card";
        
        // Staggered entry animation
        a.style.animationDelay = `${0.3 + (index * 0.1)}s`;
        a.style.animation = "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards";
        a.style.opacity = "0"; // Inital invisibility
        
        a.innerHTML = `
            <!-- Animated Gradient Glow Border on Hover -->
            <div class="absolute inset-0 bg-gradient-to-r from-blue-300/60 via-indigo-300/60 to-purple-300/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px]"></div>
            
            <div class="magic-card-inner">
                <!-- Icon container with 3D inset shadow effect -->
                <div class="magic-icon-box">
                    <i data-feather="${link.icon}" style="color: ${link.iconColor};" class="w-[22px] h-[22px]"></i>
                </div>
                
                <!-- Magic clean typography -->
                <span class="font-semibold text-[16px] text-textdark flex-1 text-left tracking-tight">
                    ${link.title}
                </span>
                
                <!-- Minimal arrow appears on hover -->
                <div class="w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-[400ms] transform -translate-x-3 group-hover:translate-x-0">
                    <i data-feather="arrow-right" class="w-4 h-4 text-gray-400"></i>
                </div>
            </div>
        `;
        linksContainer.appendChild(a);
    });

    // Initialize feather icons
    if(typeof feather !== 'undefined') {
        feather.replace();
    }
});
