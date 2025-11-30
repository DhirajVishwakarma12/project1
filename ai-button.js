// ai-button.js

document.addEventListener("DOMContentLoaded", function() {
    
    console.log("Legarium AI: Script Loaded."); // Log 1

    // --- CONFIGURATION ---
    const TARGET_CONTAINER = '.app-container'; 
    const TARGET_LINK = 'ai-button_assistant.html';
    
    // REPLACE THIS URL with your own Logo URL
    // Using a placeholder robot avatar for now
    const LOGO_URL = 'https://cdn-icons-png.flaticon.com/512/4712/4712027.png'; 

    // 1. Find the Container
    const appContainer = document.querySelector(TARGET_CONTAINER);

    if (!appContainer) {
        console.warn("Legarium AI: Container not found. Checking body...");
    }
    
    // Fallback: Use body if .app-container is missing (e.g., on some simple pages)
    const parent = appContainer || document.body;

    // 2. Ensure Relative Positioning (for absolute child)
    const style = window.getComputedStyle(parent);
    if (style.position === 'static') {
        parent.style.position = 'relative';
    }

    // 3. Create Button
    const aiBtn = document.createElement('button');
    aiBtn.className = 'ai-floating-btn';
    
    // CHANGE: Injecting an Image (Logo) instead of an Icon
    aiBtn.innerHTML = `<img src="${LOGO_URL}" alt="AI Assistant">`;

    // 4. Click Action
    aiBtn.onclick = function() {
        console.log("Legarium AI: Button Clicked. Redirecting..."); // Log 2
        window.location.href = TARGET_LINK;
    };

    // 5. Append to Page
    parent.appendChild(aiBtn);

    console.log("Legarium AI: Button & Logo added to page."); // Log 3
});