import { Bootstrap } from "../Bootstrap";

export const SampleV4 = () => {
  return (
    <Bootstrap version={4} className="mb-4">
      <p>Bootstrap 4 Features:</p>
      <ol>
        <li><code>.form-group</code> for spacing</li>
        <li><code>.custom-select</code> for dropdowns</li>
        <li><code>.custom-control .custom-checkbox</code> for checkboxes</li>
        <li><code>.input-group-prepend</code> wrapper for input groups</li>
        <li><code>.ml-2</code> for left margin</li>
      </ol>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Legacy Form (Bootstrap 4)</h5>
          <form>
            {/* Bootstrap 4 form group syntax */}
            <div className="form-group">
              <label htmlFor="email4">Email</label>
              <input type="email" className="form-control" id="email4" />
            </div>

            {/* Bootstrap 4 custom select */}
            <div className="form-group">
              <label htmlFor="country4">Country</label>
              <select className="custom-select" id="country4">
                <option selected>Choose...</option>
                <option value="1">United States</option>
                <option value="2">Canada</option>
                <option value="3">Mexico</option>
              </select>
            </div>

            {/* Bootstrap 4 custom checkbox */}
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="newsletter4" />
              <label className="custom-control-label" htmlFor="newsletter4">
                Subscribe to newsletter
              </label>
            </div>

            {/* Bootstrap 4 input group */}
            <div className="form-group">
              <label htmlFor="username4">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input type="text" className="form-control" id="username4" placeholder="Username" />
              </div>
            </div>

            {/* Bootstrap 4 spacing classes (ml-2) */}
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-secondary ml-2">Cancel</button>
          </form>
        </div>
      </div>
    </Bootstrap>
  );
};