import Section from "./Section"

function About(props){
    return (
        <>
         <h1>I am {props.name}, and i am {props.age} years old, My Profession is {props.prof}</h1>
         <Section name={props.name}  skill={props.age}/>
        </>
    )
}
export default About