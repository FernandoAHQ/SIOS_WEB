export interface RespTableServices {
    status:       boolean;
    services:     Service[];
    totalResults: number;
}

export interface Service {
    _id:       string;
    report:    Report;
    user:      User;
    status:    string;
    device:    any[];
    isRanked:  boolean;
    staff:     any[];
    createdAt: Date;
    updatedAt: Date;
    assignedTo? : AssignedTo
}

export interface Report {
    _id:   string;
    title: string;
}

export interface User {
    _id:      string;
    name:     string;
    username: string;
}

export interface AssignedTo {
    _id:      string;
    name:     string;
    username: string;
}


export interface GetRoles {
    roles: Role[];
}

export interface Role {
    value: string;
    name:  string;
}

export interface GetStatus {
    status: Status[];
}

export interface Status {
    value: string;
    name:  string;
}


export interface GetSeverities {
    severities: Severity[];
}

export interface Severity {
    value: string;
    name:  string;
}


export interface GetActivateUsers {
    status: boolean;
    users:  ChicoServicio[];
}

export interface ChicoServicio {
    _id:      string;
    name:     string;
    username: string;
    image:    string;
    role:     Role;
    online:   boolean;
    isActive: boolean;
}

export enum RoleSite {
    SiteRole = "SITE_ROLE",
}

