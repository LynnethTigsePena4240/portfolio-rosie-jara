class navbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <nav class="navbar">
        <a href="./index.html">Home</a>
        <a href="./aboutme.html">About Me</a>
        <a href="./mywork.html">My Work</a>
        <a href="./contact.html"> Contact</a>
    </nav>`
    }
}

customElements.define('nav-bar', navbar)