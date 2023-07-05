

async function UserID({ params }) {

    const user = await fetch(`http://localhost:3000/api/users/${params.userId}`)
        .then(response => response.json())


    return (
        <>
            <div>User param ID: {params.userId}</div>
            <div>User Id: {user.id}</div>
            <div>User Name: {user.name}</div>
        </>
    )
}

export default UserID