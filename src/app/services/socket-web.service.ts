import { Injectable } from '@angular/core';
import io,{Socket} from 'socket.io-client'


///const url=  'http://10.1.25.46:4000';
  const url=  'https://sios-server.herokuapp.com';

@Injectable({
  providedIn: 'root'
})

export class SocketWebService  {


  socket?: Socket
  public StatusSocket: boolean = false;

    constructor() { 
      

    }

    connect(){

      const Token = localStorage.getItem('token')

      this.socket= io(url, {

        transports: ["websocket"],
        forceNew: true,
        query:{

          'accessToken': `Bearer ${Token}`

        }
      
      })
    }

    status(){

      console.log(this.socket!.connect())
      
  

    }

     escucharService(){

      this.socket?.on('new-service', (payload)=>{

        console.log(payload)

      })

     }


    disconnect() {
      this.socket!.disconnect();
    }

}
