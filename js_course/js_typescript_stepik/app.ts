interface User  {
    name: string,
    id: number

}
interface Role  {
    name: string,
    status: string
}

type UserWithRole = {
    user:User,
    role:Role
}
let user:User = {
    name: "fffff",
    id: 21,
}
