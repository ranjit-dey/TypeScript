// Union type: variable can hold either a number or a string
let subs: number | string = 10
let subscriber: number | string = '1M'

// Custom literal type: variable can only have one of the defined string values
let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'

// Changing value within allowed literals
apiRequestStatus = 'success'

// Another literal union type: restrict seat selection to specific values
let airlineSeat: 'aisle' | 'window' | 'middle' = 'middle'
airlineSeat = 'window'

// Array of order IDs
const orders = ['12', '20', '63', '42']

// Variable can hold a string or remain undefined if match is not found
let currentOrder: string | undefined

// Find the order with ID '63'
for (let order of orders) {
    if (order === '63') {
        currentOrder = order
        break
    }
}

// Output the matched order
console.log(currentOrder)
