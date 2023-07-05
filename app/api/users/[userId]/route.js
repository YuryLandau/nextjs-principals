
export async function GET(request, { params }) {
    console.log("user ID request", params)
    const users = [
        { id: 1, name: 'Keyrus' },
        { id: 2, name: 'Sandra Beramonth' },
        { id: 3, name: 'Bencovil del Castillo' },
        { id: 4, name: 'Milena Monfassa' },

    ];
    return new Response(JSON.stringify(users[params.userId - 1]))
}