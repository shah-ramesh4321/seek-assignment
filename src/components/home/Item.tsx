import './item.css';

export interface ItemProps {
  name: string | null;
  population: number | 0;
  region: string;
  capital: string | null;
  image: string | null;
}

function Item({ name, population, region, capital, image }: ItemProps) {
  return (
    <div className="item">
      <div
        style={{
          width: "100%",
          height: "160px",
          overflow: "hidden",
        }}
      >
        <img
          src={image ? image : ""}
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div style={{ marginLeft: "10%" }}>
        <div className="country_name">{name}</div>
        <div>
          <strong>Population:</strong> {population}
        </div>
        <div>
          <strong>Region:</strong> {region}
        </div>
        <div>
          <strong>Capital:</strong> {capital}
        </div>
      </div>
    </div>
  );
}

export default Item;
