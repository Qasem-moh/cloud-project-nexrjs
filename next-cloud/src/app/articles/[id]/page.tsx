interface SingleArticlePageProps {
  params: { id: string }
}

const SingleArticlePage = async ({ params }: SingleArticlePageProps) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  if (!response.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = await response.json()
  console.log(data)
  return (
    <section className="fix-height container m-auto w-full px-5 pt-5 md:w-3/4">
      <div className="bg-white p-7 rounded-lg">
        <h1 className="text-3xl font-bold text-gray-700 mb-2">
          {data.title}
        </h1>
        <div className="text-gray-400">1/1/2025</div>
        <p className="text-gray-600 text-xl mt-5">
          {data.body}
        </p>
      </div>

       {/* type 1{
      data && <ArticesItem article={data as Article} key={data.id} />
    } */}

  {/* type 2 {
      data && <div className="container m-auto px-5">
      <div className="flex items-center justify-center flex-wrap gap-7">
          <ArticesItem article={data as Article} key={data.id} />
      </div>
      </div>
    } */}
 
    </section>
   
 
  
  )
}

export default SingleArticlePage