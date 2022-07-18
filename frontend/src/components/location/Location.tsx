import { useState } from "react";
import "./Location.scss";

export const Location: React.FC = () => {
  const [, setLocation] = useState(false);
  return (
    <div style={{ padding: 5 }} className="border shadow-sm">
      <div className="form-check">
        <label className="form-check-label" htmlFor="flexCheckChecked">
          <span className="text-success">Location 3</span>
        </label>
        <input
          className="form-check-input"
          type="checkbox"
          id="flexCheckChecked"
          checked
          onChange={(event) => setLocation(event.target.checked)}
        />
      </div>
    </div>
  );
};
