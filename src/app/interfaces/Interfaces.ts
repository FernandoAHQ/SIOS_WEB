export interface LoginInterface{

    status:         boolean;
    user?:          User;
    menu?:          Menu[];
    accessToken?:   string;
    message?:       string;
}


export interface Menu {
    titulo:         string;
    icono:          string;
    url:            string;
}

export interface User{

        image:      string;
        _id:        string;
        name:       string;
        username:   string;
        role:       string;
        online:     boolean;
        isActive: boolean;
        
}

export interface RespuestaRegistrarUsuario{

    status:     boolean;
    message?:   string;

    user?:{
        name:       string;
        username:   string;
        image:      string;
        role:       string;
        online:     boolean;
        isActive:   boolean;
        _id:        string;
    }

    accessToken?:    string;
} 



export interface RegistrarUsuario{

    
        name:       string;
        role:       string;
        username:   string;
        password:   string;

    
} 




