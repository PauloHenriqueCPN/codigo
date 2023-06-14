import { MinhaHora } from "./Style";

const Horario = () => {
    const data = new Date();
    const hora = data.getHours();   
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();
    console.log(data.toLocaleTimeString());
    return (
        <MinhaHora>Último acesso: {hora}:
          {minutos}:
          {segundos} 
        </MinhaHora>
      );
    }      
  
  export default Horario;