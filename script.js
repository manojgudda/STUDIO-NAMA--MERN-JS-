// --- CURSOR VIDEO LOGIC ---
let cursor_video = document.querySelector(".cursor-video-container");
let hero_section_1 = document.querySelector(".hero-section1");

hero_section_1.addEventListener("mousemove" , (e) => {
    cursor_video.style.top = `${e.clientY}px`;
    cursor_video.style.left = `${e.clientX}px`;
});

hero_section_1.addEventListener("mouseenter" , () => {
    cursor_video.style.opacity = "1";
});

hero_section_1.addEventListener("mouseleave" , () => {
    cursor_video.style.opacity = "0";
});


// --- DARK MODE LOGIC ---
let dark_item = document.querySelector("#darkmode-btn");
let isdark = false;

dark_item.addEventListener("click", () => {
    console.log("Dark mode clicked!");
    isdark = !isdark;
    
    if (isdark) {
        document.body.classList.add("dark-mode");
        dark_item.innerHTML = "LIGHT MODE";
    } else {
        document.body.classList.remove("dark-mode");
        dark_item.innerHTML = "DARK MODE";
    }
});


// --- MENU BUTTON LOGIC ---
let menu_btn = document.querySelector("#menu-btn");
let menu_overlay = document.querySelector(".menu-overlay");
let ismenuopen = false;

menu_btn.addEventListener("click", () => {
    console.log("menu-btn-clicked");
    ismenuopen = !ismenuopen;

    if(ismenuopen){
        menu_btn.textContent = "CLOSE";
        menu_overlay.classList.add("show");
    } else {
        menu_btn.textContent = "MENU";
        menu_overlay.classList.remove("show");
    }
});

// --- MENU HOVER LOGIC ---
let menu_items = document.querySelectorAll(".menu-items");

menu_items.forEach((item) => {

    item.addEventListener("mouseenter", () => {
        // Lower this number to shrink the gap! (e.g., 15px)
        item.style.transform = "translateX(15px)"; 
        let img = item.parentElement.querySelector("img");
        
        img.style.width = "256px"; 
    });

    item.addEventListener("mouseleave", () => {
        item.style.transform = "translateX(0px)";
        let img = item.parentElement.querySelector("img");
        img.style.width = "0px";
    });

});

// --- HOVER IMAGE STACK LOGIC ---
let u_tags = document.querySelectorAll(".hero3-main-text u");

// Add your own image URLs here!
let pop_images = [
    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d143844e199c5fe25893c6_Details%201.webp",
    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14384921ac39670293bad_Details2.webp",
    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14384e95f535d6ce77d4f_Details3.webp",
    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14384e6539b091e5c0c8b_Details4.webp",
    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14384b8a083b5d518278d_Details5.webp"
];

let img_index = 0;
let pop_interval; // This will hold our timer

// We need to track the mouse position globally so the timer knows where to drop the images
let current_x = 0;
let current_y = 0;

document.addEventListener("mousemove", (e) => {
    current_x = e.clientX;
    current_y = e.clientY;
});

u_tags.forEach((u_tag) => {
    
    // When the mouse ENTERS the word, start the rapid-fire timer
    u_tag.addEventListener("mouseenter", () => {
        
        // This fires an image every 150 milliseconds
        pop_interval = setInterval(() => {
            let img = document.createElement("img");
            img.src = pop_images[img_index];
            img.classList.add("pop-image");
            
            // Drop the image at the current mouse coordinates
            img.style.left = `${current_x}px`;
            img.style.top = `${current_y}px`;
            
            // Add a random tilt
            let random_rotation = Math.random() * 30 - 15;
            img.style.transform = `translate(-50%, -50%) rotate(${random_rotation}deg)`;
            
            document.body.appendChild(img);
            img_index = (img_index + 1) % pop_images.length;
            
            // Clean up the image after 1 second so the browser doesn't lag
            setTimeout(() => {
                img.remove();
            }, 1500);
            
        }, 150); // Change this number to make the popping faster (lower) or slower (higher)
    });

    // When the mouse LEAVES the word, stop the timer
    u_tag.addEventListener("mouseleave", () => {
        clearInterval(pop_interval);
    });
    
});

let playground_container = document.querySelector(".playground-container");
let portfolio_container = document.querySelector(".portfolio-container");


playground_container.addEventListener("mousemove" , (e) => {
    portfolio_container.style.top = `${e.clientY}px`;
    portfolio_container.style.left = `${e.clientX}px`;
});

playground_container.addEventListener("mouseenter" , () => {
    portfolio_container.style.opacity = "1";
});

playground_container.addEventListener("mouseleave" , () => {
    portfolio_container.style.opacity = "0";
});

let matera_img = document.querySelector("#matera_bgimg");
let por