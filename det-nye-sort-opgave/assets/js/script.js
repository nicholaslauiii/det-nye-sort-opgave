// Her hentes id'erne fra HTML med navnene "mode-toggle" og "mode-icon"
const modeToggle = document.getElementById('mode-toggle');
const icon = document.getElementById('mode-icon');

// Her sætter jeg ikonet til at være "dark_mode" som standard, som viser et måneikon der fortæller at light mode nu er aktivt 
icon.textContent = 'dark_mode';

// Her opretter jeg en eventListener som skal lytte efter clicks, når der trykkes på light- og dark mode-ikonerne
modeToggle.addEventListener('click', () => {
    // Her tilføjer jeg en toggle-funktion til class "dark-mode" som kører på hele body-elementet fra HTML, hvor det gøres muligt at aktivere og deaktivere light- og dark mode med toggle-funktionen
    document.body.classList.toggle('dark-mode');

    // Her opretter jeg if-else-statement, hvor jeg skriver at hvis body indeholder class "dark-mode", så sætter vi det til at vise ikonet "light_mode" som er solen
    if (document.body.classList.contains('dark-mode')) {
        icon.textContent = 'light_mode';
    } else {
        icon.textContent = 'dark_mode'; // Ellers sætter vi det til at vise ikonet "dark_mode" som er halvmånen, når browseren vises i light mode
    }
});

// Her opretter jeg IntersectionObserver som skal holde øje med hvornår class "case" og "kultur-card" bliver synlige i browseren
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Her opretter jeg en if-else-statement
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Hvis et element er synligt, så tilføjer vi så class "visible" som skal class "case" og "kultur-card"
        } else {
            entry.target.classList.remove('visible'); // Hvis et element ikke er synligt længere, så fjerner vi class "visible", som så også fjerner class "case" og "kultur-card"
        }
    });
});

// Her hentes class "case" og "kultur-card" som sættes ind under "observer", som er variablen vi har tilføjet som det første
document.querySelectorAll('.case, .kultur-card').forEach(element => {
    observer.observe(element); // Her bruges observe til at kigge efter hvornår "case" og "kultur-card" er synlige i browseren, og når det så endelig er synligt, har vi tidligere oprettet class "visible" til at vise "case" og "kultur-card"
});