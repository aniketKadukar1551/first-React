import Cards from "./Cards"

const Section = () => {
    return (
        <section className="body">
            <div className="searchSection">
                <input type="text" placeholder="Search for food"></input>
            </div>
            <section className="resCardSection">
                {/* <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards> */}
                {[...Array(10)].map((_, index) => (
                    <Cards key={index} />
                ))}
            </section>
        </section>
    )
}

export default Section
