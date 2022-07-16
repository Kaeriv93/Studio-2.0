function Film(props){
    const loaded = () =>{
        return props.film.map((film,idx)=>(
            <main>
                <section>
                    <div key={idx}>
                        <h1>{film.title}</h1>
                        <img src={film.image} alt={film.name}/>
                    </div>
                </section>
            </main>
        ))
    }
 return props.film ? loaded():<h1>Loading...</h1>
}
export default Film