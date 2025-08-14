// src/pages/Concept.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Concept = () => {
  const { id } = useParams();
  const [concept, setConcept] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/learning/concepts/${id}/`)
      .then((res) => res.json())
      .then((data) => setConcept(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!concept) return <p>Loading...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{concept.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: concept.content }} />
    </div>
  );
};

export default Concept;
