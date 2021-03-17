import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";

const PortfolioForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group port-forms">
        <label htmlFor="title">Title</label>
        <input
          ref={register}
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
          ref={register}
          name="companyWebsite"
          type="text"
          className="form-control port-input"
          id="companyWebsite"
        />
      </div>

      <div className="form-group port-forms">
        <label htmlFor="street">Location</label>
        <input
          ref={register}
          name="location"
          type="text"
          className="form-control port-input"
          id="location"
        />
      </div>

      <div className="form-group port-forms">
        <label htmlFor="street">Job Title</label>
        <input
          ref={register}
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
        <label htmlFor="StartDate">Start Date</label>
        <div>{/* Date picker here */}</div>
        <DatePicker
          showYearDropdown
          selected={new Date()}
          className="form-control port-input"
          onChange={() => {}}
        />
      </div>

      <div className="form-group port-forms">
        <label htmlFor="endDate">End Date</label>
        <div>{/* Date picker here */}</div>
        <DatePicker
          showYearDropdown
          selected={new Date()}
          className="form-control port-input"
          onChange={() => {}}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};
export default PortfolioForm;
