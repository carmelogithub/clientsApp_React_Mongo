export class ClientService {
  static async getClients() {
    const res = await fetch("http://localhost:3000/clients"); //endpoint de la API
    return await res.json();
  }
} //cierra clase
