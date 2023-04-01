import styles from "./styles.css";
import Card, {Attribute} from "../components/Card/card"
import { addObserver, appState, dispatch } from "../store/index";
import { getStar } from "../store/actions";

class Dashboard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this)
    }

    async connectedCallback() {
        const action = await getStar ();
        dispatch(action)
    }

    render(){
        
        appState.characters.forEach((data:any)=>{
            const StarCard = this.ownerDocument.createElement("my-card") as Card;
            StarCard.setAttribute(Attribute.name, data.name);
            StarCard.setAttribute(Attribute.height, data.height);
            StarCard.setAttribute(Attribute.gender, data.gender);
            this.shadowRoot?.appendChild(StarCard);
        });
    }
}

customElements.define("app-dashboard", Dashboard);