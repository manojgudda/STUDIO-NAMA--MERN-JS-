let menu_item = document.querySelector("#menu_item");
let lets_talk = document.querySelector("#lets_talk");
let studio_nama = document.querySelector("#studio_nama_item");
let dark_item = document.querySelector("#DARK");

let menuOverlay = document.querySelector(".menu-overlay-container");
let isMenuOpen = false;

let cursor_follow_video_container = document.querySelector(".cursor_follow_video_container");
let cursor_video = document.querySelector("#cursor_video");
let isDark = false;

// --- RIGHT NAV ---
menu_item.addEventListener("mouseenter", () => {
    if (isMenuOpen) {
        menu_item.textContent = "CLOSE";
    } else {
        menu_item.textContent = "OPEN";
    }
});

menu_item.addEventListener("mouseleave", () => {
    if (isMenuOpen) {
        menu_item.textContent = "CLOSE";
    } else {
        menu_item.textContent = "MENU";
    }
});

lets_talk.addEventListener("mouseenter", () => {
    lets_talk.textContent = "CONTACT";
});
lets_talk.addEventListener("mouseleave", () => {
    lets_talk.textContent = "LET'S TALK!";
});

// --- LEFT NAV ---
studio_nama.addEventListener("mouseenter", () => {
    studio_nama.textContent = "HOME";
});
studio_nama.addEventListener("mouseleave", () => {
    studio_nama.textContent = "STUDIO NAMMA";
});

// --- CURSOR VIDEO ---
document.addEventListener("mousemove", (e) => {
    // Stop updating or showing the video if the menu is open
    if (isMenuOpen) {
        return;
    }

    cursor_follow_video_container.style.top = `${e.clientY}px`;
    cursor_follow_video_container.style.left = `${e.clientX}px`;

    if (cursor_video.style.display !== "block") {
        cursor_video.style.display = "block";
        cursor_video.play();
    }
});

// --- DARK MODE TOGGLE & HOVER ---
dark_item.addEventListener("mouseenter", () => {
    if (isDark) {
        dark_item.textContent = "LIGHT MODE";
    } else {
        dark_item.textContent = "DARK MODE";
    }
});

dark_item.addEventListener("mouseleave", () => {
    if (isDark) {
        dark_item.textContent = "LIGHT MODE";
    } else {
        dark_item.textContent = "DARK MODE";
    }
});

dark_item.addEventListener("click", () => {
    isDark = !isDark;

    if (isDark) {
        document.body.classList.add("dark-mode");
        dark_item.textContent = "LIGHT MODE";
    } else {
        document.body.classList.remove("dark-mode");
        dark_item.textContent = "DARK MODE";
    }
});

// --- MENU TOGGLE ---
menu_item.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        menuOverlay.style.transform = "translate(0, 0)";
        menu_item.textContent = "CLOSE";
        
        // Hide and pause the cursor video
        cursor_video.pause();
        cursor_video.style.display = "none";
    } else {
        menuOverlay.style.transform = "translate(0, -110%)";
        menu_item.textContent = "MENU";
        
        // Resume playing when menu closes
        cursor_video.style.display = "block";
        cursor_video.play();
    }
});

// --- MENUBAR ITEMS HOVER ANIMATION ---
let menubar_contents = document.querySelectorAll(".menubar-content");

menubar_contents.forEach(content => {
    let imgContainer = content.querySelector(".menubar-content-img");
    
    // Fix: Changed querySelectorAll to querySelector because we want a single element's style
    let menubar_item = content.querySelector(".menubar-items"); 

    content.addEventListener("mouseenter", () => {
        // Only fade the image in
        imgContainer.style.opacity = "1";
        imgContainer.style.transform = "translateX(0px)";
        
        // Fix: Changed 'traslateX' to 'translateX'
        menubar_item.style.transform = "translateX(14.5rem)"; 
        
    });

    content.addEventListener("mouseleave", () => {
        // Only fade the image out
        imgContainer.style.opacity = "0";
        imgContainer.style.transform = "translateX(-20px)";
        
        // Fix: Changed 'traslateX' to 'translateX'
        menubar_item.style.transform = "translateX(0px)"; 
    });
});