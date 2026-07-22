import { IonButton, IonContent, IonPage, useIonViewDidEnter } from "@ionic/react";
import { useState } from "react";
import { ClientService } from "../services/clientService";
import { useHistory } from "react-router";

export default function ClientesPage() {
  const [clients, setClients] = useState<any[]>([]);
  const history=useHistory();
  
  const loadClients = async () => {
    const datos = await ClientService.getClients();
    setClients(datos);
  };

  const formatCurrency = (value:number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
    }).format(value);
  };
   
  useIonViewDidEnter(() => {
    loadClients();
  }, []);

  return (
    <IonPage>
      <IonContent>
        <h2>Tabla de clientes</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Ciudad</th>
              <th>Facturación</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {clients.map((cliente) => (
              <tr key={cliente._id}>
                <td>{cliente._id}</td>
                <td>{cliente.nombre}</td>
                <td>{cliente.ciudad}</td>
                <td className="text-end">{formatCurrency(cliente.facturacion)}</td>
                <td><IonButton onClick={()=>{history.push('/editar',cliente)}}>Editar</IonButton></td>
              </tr>
            ))}
          </tbody>
        </table>
      </IonContent>
    </IonPage>
  );
}
