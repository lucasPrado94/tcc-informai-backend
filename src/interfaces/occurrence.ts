interface Occurrence {
    id?: string,
    createdAt?: string,
    name: string,
    serviceId: number,
    obs: string,
    latitude: number,
    longitude: number
}

export default Occurrence