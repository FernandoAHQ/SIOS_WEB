export interface RespTableServices {
    status:       boolean;
    services:     Service[];
    totalResults: number;
}

export interface Service {
    _id:        string;
    report:     string;
    user:       string;
    status:     string;
    createdAt:  Date;
    updatedAt:  Date;
    assignedTo: string;
    severity:   string;
}