//get value from page 2
//selection based value

const st = document.getElementById("select");

st.addEventListener('click', (e) => {
    // Check if user clicked a button (not the container)
    if(e.target === e.currentTarget) return; 
    
    const child = e.target;
    let selectedValue = 0;

    // 1. Determine the value
    if(child.id == "sl") selectedValue = 1;
    else if(child.id == "cl") selectedValue = 2;
    else selectedValue = 3;

    // 2. STORE IT in the browser memory
    // "userChoice" is the key name, selectedValue is the data
    localStorage.setItem("userChoice", selectedValue);

    console.log("Saved to memory:", selectedValue);
    
    // 3. Run your redirection logic (Your existing timer function)
    // doSomethingWith(selectedValue); 
});