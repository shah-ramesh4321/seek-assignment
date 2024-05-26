import { Form } from "react-bootstrap";
import "./filter.css";
import { ChangeEvent } from "react";

interface FilterProps {
  regionList: string[];
  handleCountrySearch: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRegionChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Filter: React.FC<FilterProps> = ({
  regionList,
  handleCountrySearch,
  handleRegionChange,
}) => {
  return (
    <div className="filter">
      <div className="filter_country">
        <input
          type="text"
          placeholder="Search for a country..."
          className="form-control custom-placeholder"
          onChange={handleCountrySearch}
        />
      </div>
      <div className="filter_region">
        <Form.Select
          aria-label="Default select example"
          onChange={handleRegionChange}
          defaultValue=""
        >
          <option value="">Select Region</option>
          {regionList.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </Form.Select>
      </div>
    </div>
  );
};

export default Filter;
