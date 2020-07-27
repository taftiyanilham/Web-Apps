class TopBar extends HTMLElement{
    constructor(){
        super();
        this.shadowDom = this.attachShadow({mode : "open"});
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.shadowDom.innerHTML = `
        <style>
            *{
                margin : 0;
                padding: 5px;
                box-sizing: border-box;
            }
            :host {
               
                display: flex;
                padding :16px;
                justify-content: space-between;
                align-items: center;
                width :100%;
                background-color : teal;
            }
            ul{
                list-style: none;
                display: flex;
                padding: 10px;
            }
            li {
                
                margin-right: 1rem;
            }
            h1 {
                color: black;
                margin-bottom: 0.5rem;
            }
        </style>
        <h1>Covid 19 Data</h1>
            <ul>
                <li id="home"><a href="">Home</a></li>
                <li id="news"><a href="https://covid19.go.id/">Pencegahan</a></li>
        </ul>
        `
    }
}

customElements.define("top-bar", TopBar);