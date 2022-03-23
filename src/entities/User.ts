import { uuid } from "uuidv4";

export class User{
    public readonly id: string;
    
    public name: string;
    public email: string;
    public password: string;

    //Omit faz com que no construtor, seja passado todas as propriedades menos, no caso, o id
    //id? diz que a propriedade id é opcional
    constructor(props: Omit<User, 'id'>, id?: string){
        //this.name = props.name;
        //this.email = props.email;
        //this.name = props.name;
        //O código acima pode ser substituído por este abaixo, que indica que todas as propriedades do PROPS serão geradas no THIS

        Object.assign(this, props);

        if(!id){
            this.id = uuid();
        }

    }

}