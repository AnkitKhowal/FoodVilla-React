import { useState } from "react";

const Section = (props) => {
    return (
        <div className="border border-black">
            <h1 className="title text-lg font-bold underline">{props.title}</h1>
            {props.isVisible && <p className="description">{props.description}</p>}
            {props.isVisible ? <button className="border cursor-pointer underline" onClick={() => props.setVisibleSection()} >Hide</button> : <button className="border cursor-pointer underline" onClick={() => props.setVisibleSection(props.title)}>Show</button>}
        </div>
    )
};

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("About");

    return (
        <>
            <div className="m5 p5"><h1>Instamart</h1></div>
            <Section
                title={"About"}
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                isVisible={visibleSection === "About"}
                setVisibleSection={setVisibleSection}
            />
            <Section
                title={"Details"}
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                isVisible={visibleSection === "Details"}
                setVisibleSection={setVisibleSection}
            />
            <Section
                title={"Product"}
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                isVisible={visibleSection === "Product"}
                setVisibleSection={setVisibleSection}
            />
            <Section
                title={"Career"}
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                isVisible={visibleSection === "Career"}
                setVisibleSection={setVisibleSection}
            />
        </>

    )
}

export default Instamart;