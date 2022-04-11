export interface RespDepartment {
    status:      boolean;
    departments: Department[];
}

export interface Department {
    _id:       string;
    name:      string;
    ubication: string;
    user:      string;
}