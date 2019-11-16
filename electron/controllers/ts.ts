interface Context {
    id: string
    title: string
    server: string
    context: string
    cache: boolean
    description: string
    requests: object[]
}

type newContext = (x: Context) => Promise<Context>;

const last = <T>(arr: T[]) => {
    return arr[arr.length - 1]
}