interface IForms {
    id:number;
    login:string;
    senha:string;
    nome:string;
    email:string;
}

export default class Store {

    dados(meuform:IForms): void {

        let meusdados:IForms[] = [
                                    {id:1, login:"ringo", senha:"1234", nome:"Ringo", email:"ringo@gmail.com"},
                                    {id:1, login:"john", senha:"123@", nome:"John", email:"john@gmail.com"},
                                    {id:1, login:"paul", senha:"1233", nome:"Paul", email:"paul@gmail.com"}
                                ];

        localStorage.setItem("banco", JSON.stringify(meusdados));
    }

    Cadastro():void {
        let meusdados = localStorage.getItem("banco");

        let ds = JSON.parse(meusdados!) as IForms;

        mf.login = (document.querySelector("login") as HTMLInputElement).value;
        mf.senha = (document.querySelector("senha") as HTMLInputElement).value;
        mf.nome = (document.querySelector("nome") as HTMLInputElement).value;
        mf.email = (document.querySelector("email") as HTMLInputElement).value;


        
        let cad = {id:Date.now(), login:mf.login, senha:mf.senha, nome:mf.nome, email:MediaDeviceInfo.email};
        
        //let md:IForms[] = [{id:0, login:"ringo", senha:"1234", nome:"Ringo", email:"ringo@gmail.com"}]


    }


}