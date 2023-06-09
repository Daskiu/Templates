
import styles from "./styles.css";

export enum Attribute {
    "name" = "name",
    "height" = "height",
    "gender" = "gender",

}

class Card extends HTMLElement{
    name?: string;
    height?: string;
    gender?: string;

    static get observedAttributes(){
        const attrs: Record<Attribute, null> = {
            name: null,
            height: null,
            gender: null,
        };
        return Object.keys(attrs);
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
    ){
        switch(propName){
            default:
            this[propName] = newValue;
            break;
        }
        this.render();
    }

    render(){

        
        if (this.shadowRoot){
            this.shadowRoot.innerHTML =``

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css)


            this.shadowRoot.innerHTML +=`
            <section class ="CardSection">
                <h1 >Name: ${this.name}</h1>
                <p>Height: ${this.height} cm</p>
                <p>Gender: ${this.gender}</p>
            </section>
            `;
        }
    }
}

customElements.define("my-card", Card);
export default Card;