import { useEffect, useState } from "react";
import { ClientService } from "../services/clientService";
import { useHistory, useLocation } from "react-router";
import { Client } from "../models/Client";
import { IonInput, IonPage, IonToast, useIonViewDidEnter } from "@ionic/react";

export default function ClientesEditPage() {
  const [showToast, setShowToast] = useState(false);
  const [client, setClient] = useState({
    _id: "",
    nombre: "",
    ciudad: "",
    facturacion: 0,
  });
  const location = useLocation();
  const cliente: any = location.state;
  //  console.log(cliente);
  const history = useHistory();

  const save = async () => {
    await ClientService.updateClient(client);
    //navigate('/clients');
    setShowToast(true);
    history.push("/clients");
  };

  useEffect(() => {
    if (cliente) {
      setClient(cliente);
    }
  }, []);

  return (
    <IonPage>
      <div>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={`Modificando cliente con ID: ${client._id}`}
          duration={3000}
          color="warning"
        />

        <input
          readOnly
          value={client._id}
          placeholder="id"
          onChange={(e) => setClient({ ...client, _id: e.target.value })}
        />
        <IonInput
          value={client.nombre}
          placeholder="nombre"
          onIonInput={(e) =>
            setClient({ ...client, nombre: e.detail.value || "" })
          }
        />
        <input
          value={client.ciudad}
          placeholder="ciudad"
          onChange={(e) => setClient({ ...client, ciudad: e.target.value })}
        />
        <IonInput
          value={client.facturacion}
          placeholder="facturacion"
          onIonInput={(e) =>
            setClient({ ...client, facturacion: Number(e.detail.value || 0) })
          }
        />
        <button onClick={save}>Actualizar</button>
      </div>
    </IonPage>
  );
}
