import { Bootstrap } from "../Bootstrap";

export const SampleV5 = () => {
  return (
    <Bootstrap version={5} className="mb-4">
      <p>Bootstrap 5 Features:</p>
      <ol>
        <li><code>.form-floating</code> for floating labels (NEW)</li>
        <li><code>.form-select</code> instead of <code>.custom-select</code></li>
        <li><code>.form-check</code> instead of <code>.custom-control .custom-checkbox</code></li>
        <li><code>.form-switch</code> for toggle switches (NEW)</li>
        <li><code>.form-range</code> instead of <code>.custom-range</code></li>
        <li><code>.form-label</code> required for all labels</li>
        <li>Direct input group children (no <code>.input-group-prepend</code>/<code>.input-group-append</code> wrappers)</li>
        <li><code>.ms-2</code> for start margin (RTL support)</li>
      </ol>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Modern Form (Bootstrap 5)</h5>
          <form>
            {/* Bootstrap 5 floating labels - NEW FEATURE */}
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="email5" placeholder="name@example.com" />
              <label htmlFor="email5">Email address</label>
            </div>

            {/* Bootstrap 5 form-select (was custom-select) */}
            <div className="mb-3">
              <label htmlFor="country5" className="form-label">Country</label>
              <select className="form-select" id="country5">
                <option selected>Choose...</option>
                <option value="1">United States</option>
                <option value="2">Canada</option>
                <option value="3">Mexico</option>
              </select>
            </div>

            {/* Bootstrap 5 form-check (was custom-control custom-checkbox) */}
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="newsletter5" />
              <label className="form-check-label" htmlFor="newsletter5">
                Subscribe to newsletter
              </label>
            </div>

            {/* Bootstrap 5 form-switch - NEW FEATURE */}
            <div className="form-check form-switch mb-3">
              <input className="form-check-input" type="checkbox" id="notifications5" />
              <label className="form-check-label" htmlFor="notifications5">
                Enable notifications
              </label>
            </div>

            {/* Bootstrap 5 input group (no prepend/append divs needed) */}
            <div className="mb-3">
              <label htmlFor="username5" className="form-label">Username</label>
              <div className="input-group">
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" id="username5" placeholder="Username" />
              </div>
            </div>

            {/* Bootstrap 5 range input (was custom-range) */}
            <div className="mb-3">
              <label htmlFor="range5" className="form-label">Experience Level</label>
              <input type="range" className="form-range" min="0" max="5" id="range5" />
            </div>

            {/* Bootstrap 5 spacing classes (ms-2 instead of ml-2) */}
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-secondary ms-2">Cancel</button>
          </form>
        </div>
      </div>
    </Bootstrap>
  );
}
