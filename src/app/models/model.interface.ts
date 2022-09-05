// Departamentos
export interface DepartamentI {
    id: number;
    countryId: string;
    name: string;
}

// Interfaz Ciudad
export interface CityI {
    id: number;
    countryId: string;
    departamentId: string;
    name: string;
}