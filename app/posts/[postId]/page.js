

async function DinamicPost({ params }) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`,
        {
            next: {
                revalidate: 10
            }
        })
        .then(response => response.json())

    console.log(res)

    return (
        <>
            <p>PostID: {params.postId}</p>
            <p>Título: {res.title}</p>
            <p>Descrição:  {res.body}</p>
        </>
    )
}

export default DinamicPost