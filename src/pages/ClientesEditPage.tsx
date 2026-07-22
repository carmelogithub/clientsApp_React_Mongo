import { useEffect, useState } from "react";
import { ClientService } from "../services/clientService";
import { useLocation } from "react-router";
import { Client } from "../models/Client";
import { IonInput, IonPage, useIonViewDidEnter } from "@ionic/react";

export default function ClientesEditPage() {
  const [client, setClient] = useState({
    _id: "",
    nombre: "",
    ciudad: "",
    facturacion: 0,
  });
const location = useLocation();
  const cliente:any = location.state;
//  console.log(cliente);
  
const save = async () => {
    await ClientService.updateClient(client);
    //navigate('/clients');
    //history.push("/clients");
  };
  
  useEffect(()=>{
    if(cliente){
      setClient(cliente);
    }
},[]
);
 

  return (
    <IonPage>
    <div>
      <input
        value={client._id}
        placeholder="id"
        onChange={(e) => setClient({ ...client, _id: e.target.value })}
      />
      <IonInput
      value={client.nombre}
        placeholder="nombre"
        onIonInput={(e) => setClient({ ...client, nombre: e.detail.value || "" })}
      />
      <input
      value={client.ciudad}
        placeholder="ciudad"
        onChange={(e) => setClient({ ...client, ciudad: e.target.value })}
      />
      <input
      value={client.facturacion}
        placeholder="facturacion"
        onChange={(e) =>
          setClient({ ...client, facturacion: Number(e.target.value) })
        }
      />
      <button onClick={save}>Actualizar</button>
    </div>
    </IonPage>
  );
}
