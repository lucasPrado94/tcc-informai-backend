interface Occurrence {
    id?: string,
    createdAt?: string,
    name: string,
    typeId: number,
    obs: string,
    latitude: number,
    longitude: number
}

export default Occurrence