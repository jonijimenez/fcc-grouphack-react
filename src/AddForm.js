import React from 'react';

const AddForm = ({submitForm}) => (
  <div className="container">
      <div className="col-xs-12 col-sm-12 col-md-12">
        <h3>Add Form</h3>
        <form id="addItemForm" className="addForm" onSubmit={submitForm}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" name="name" placeholder="Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" className="form-control" id="phone" name="phone" placeholder="Phone" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
);

export default AddForm;
