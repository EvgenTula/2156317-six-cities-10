type PropertyListProps = {
  propetry : string[];
}

export default function PropertyList({ propetry } : PropertyListProps): JSX.Element {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {propetry.map((prop) => (
          <li key={prop} className="property__inside-item">
            {prop}
          </li>
        ))}
      </ul>
    </div>
  );
}
