export interface  PlatformModel{
    id?: number;
    name: string
}

export interface PlatformResponse {
    message: string;
    total: number;
    data: PlatformModel[];
}