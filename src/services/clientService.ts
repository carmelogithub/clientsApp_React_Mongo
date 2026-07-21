import { Client } from "../models/Client";

export class ClientService {
  static async getClients() {
    const res = await fetch("http://localhost:3000/clients"); //endpoint de la API
    return await res.json();
  }

  static async addClient(client:Client) {
    const res = await fetch("http://localhost:3000/clients/new",{
      method:"post",
      body:JSON.stringify(client),
      headers:{"content-type":"application/json"} 

    }); //endpoint de la API
    return await res.json();
  }

  static async updateClient(client:Client) {
    const res = await fetch("http://localhost:3000/clients/update/"+client._id,{
      method:"put",
      body:JSON.stringify(client),
      headers:{"content-type":"application/json"} 

    }); //endpoint de la API
    return await res.json();
  }

  static async deleteClient(id:number) {
    const res = await fetch("http://localhost:3000/clients/delete"+id); //endpoint de la API
    return await res.json();
  }
} //cierra clase
