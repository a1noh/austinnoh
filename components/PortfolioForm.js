const PortfolioForm = () => {
  return (
    <form>
      <div className="form-group port-forms">
        <label htmlFor="title">Title</label>
        <input
          name="title"
          type="text"
          className="form-control port-input"
          id="title"
        />
      </div>

      <div className="form-group port-forms">
        <label htmlFor="city">Company</label>
        <input
          name="company"
          type="text"
          className="form-control port-input"
          id="company"
        />
      </div>

      <div className="form-group port-forms">
        <label htmlFor="city">Company Website</label>
        <input
          name="companyWebsite"
          type="text"
          className="form-control port-input"
          id="companyWebsite"
        />
      </div>

      <div className="form-group port-forms">
        <label htmlFor="street">Location</label>
        <input
          name="location"
          type="text"
          className="form-control port-input"
          id="location"
        />
      </div>

      <div className="form-group port-forms">
        <label htmlFor="street">Job Title</label>
        <input
          name="jobTitle"
          type="text"
          className="form-control port-input"
          id="jobTitle"
        />
      </div>

      <div className="form-group port-forms">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          rows="5"
          type="text"
          className="form-control port-input"
          id="description"
        ></textarea>
      </div>

      <div className="form-group port-forms">
        <label htmlFor="street">Start Date</label>
        <div>{/* Date picker here */}</div>
      </div>

      <div className="form-group">
        <label htmlFor="street">End Date</label>
        <div>{/* Date picker here */}</div>
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};
export default PortfolioForm;
