function handleSectionNavigation() {
    const hash = window.location.hash.substring(1);

    if((hash !== "a") && (hash !== "b") && (hash !== "c")) {
        return
    }
    else {
        const section = document.getElementById("carousel");

        // verschiebung in x 
        if(hash === "a") {
            section.scrollBy(970, 0);

        }
        if(hash === "b") {
            section.scrollBy(1300, 0);

        }
        if(hash === "c") {
            section.scrollBy(1620, 0);

        }

        // verschiebung in y
        section.scrollIntoView({ behavior: "smooth" }); 
    }
}
  
window.addEventListener("hashchange", handleSectionNavigation);
handleSectionNavigation();
  