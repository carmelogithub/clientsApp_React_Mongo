import { IonButton, IonContent, IonPage, useIonViewDidEnter } from "@ionic/react";
import { useState } from "react";
import { ClientService } from "../services/clientService";
import { useHistory } from "react-router";
import NavBar from "../components/NavBar";

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
   
  const confirmDelete=async (id:number)=>{
    const confirm =window.confirm('¿Desea eliminar este cliente?');
    if(confirm){
      await ClientService.deleteClient(id);
       loadClients();
    }
    
  };

  useIonViewDidEnter(() => {
    loadClients();
  }, []);

  return (
       
    <IonPage>
   <NavBar/>
      <IonContent>
       
        <h2 className="text-5xl font-bold text-blue-600 text-center mt-5">Tabla de clientes</h2>
        <p>Listado provisional de clientes admitidos</p>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Ciudad</th>
              <th>Facturación</th>
              <th>Acciones</th>
              <th>Cuidado</th>
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
                <td><IonButton onClick={()=>{confirmDelete(cliente._id)}}>Eliminar</IonButton></td>
              </tr>
            ))}
          </tbody>
        </table>
      </IonContent>
    </IonPage>
  );
}
