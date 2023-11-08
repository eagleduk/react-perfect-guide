import ConceptItem from "./ConceptItem";

export default function Concepts({ concepts }) {
  return (
    <ul id="concepts">
      {concepts.map(({ title, image, description }) => {
        return (
          <ConceptItem
            key={title}
            title={title}
            image={image}
            description={description}
          />
        );
      })}
    </ul>
  );
}
