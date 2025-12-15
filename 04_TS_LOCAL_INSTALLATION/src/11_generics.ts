function wrapInArray<T>(item: T): T[] {
    return [item]
}

wrapInArray('masala')
wrapInArray(42)
wrapInArray({ flavor: 'ginger' })

function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b]
}

pair('masala', 'test')
pair('masala', 20)
pair({ flavor: 'masala' }, 20)

interface Box<T> {
    content: T
}

const numberBox: Box<number> = { content: 20 }
const stringBox: Box<string> = { content: '20' }
const objectBox: Box<object> = { content: {} }

interface ApiPromise<T> {
    status: number
    data: T
}

const res: ApiPromise<{ flavor: string }> = {
    status: 200,
    data: { flavor: 'masala' },
}
