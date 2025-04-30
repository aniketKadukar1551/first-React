import UserInfo from "./UserInfo"
import UserClass from "./UserClass"

const AboutUs = () => {
    return (
        <section className="aboutUs">
            <UserInfo name={"aniket"} location={"pune"} contact={7821003359}></UserInfo>
            <UserClass name={"aniket"} location={"wardha"} contact={9960255485}></UserClass>
        </section>
    )
}

export default AboutUs
