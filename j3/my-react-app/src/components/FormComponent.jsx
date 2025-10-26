import React from "react";

function FormComponent({ data, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Age:
        <input
          type="number"
          name="age"
          value={data.age}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Gender:
        <select name="gender" value={data.gender} onChange={handleChange}>
          <option value="">--Select--</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <br />

      <label>
        Destination:
        <select
          name="destination"
          value={data.destination}
          onChange={handleChange}
        >
          <option value="">--Select--</option>
          <option value="Japan">Japan</option>
          <option value="USA">USA</option>
          <option value="France">France</option>
        </select>
      </label>
      <br />

      <label>
        Lactose Free:
        <input
          type="checkbox"
          name="lactoseFree"
          checked={data.lactoseFree}
          onChange={handleChange}
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
