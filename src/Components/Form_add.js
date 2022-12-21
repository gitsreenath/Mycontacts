import React from "react";
import { useForm } from "react-hook-form";
import './Form_add.css'

const Form_add = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm();
  function submitting(data) {
    console.log(data);
    reset();
  }
  console.log(watch());

  return (
    <>
      <div className="header ">
        <h3 className=" text-center text-uppercase mb-2">Add Contact</h3>
        <form onSubmit={handleSubmit(submitting)}>
          <div className="form-group">
            <input
              type="text"
              // className="form-control"
              placeholder="Name"
              {...register("Name", {
                required: "Name is requierd",
                minLength: { value: 3, message: "Enter valid name" },
                pattern: { value: /^[A-Za-z]*$/, message: "Valid Name please" },
              })}
              onKeyUp={() => {
                trigger("Name");
              }}
              className={`form-control ${errors.Name && "bord-red" } `}
            />
            {errors.Name && (
              <small className="text-danger">{errors.Name.message}</small>
            )}
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Email"
              {...register("Email", {
                required: "Email is requierd",
                pattern: {
                  value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                  message: "Enter Valid mail id",
                },
              })}
              onKeyUp={() => {
                trigger("Email");
              }}
            />
            {errors.Email && (
              <small className="text-danger">{errors.Email.message}</small>
            )}
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Phone"
              {...register("Phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                  message: "Enter valid Phone Number",
                },
              })}
              onKeyUp={() => {
                trigger("Phone");
              }}
            />
            {errors.Phone && (
              <small className="text-danger">{errors.Phone.message}</small>
            )}
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Age"
              {...register("Age", {
                required: "Age is required",
                min: { value: 18, message: "Age should be less than 18" },
                max: { value: 65, message: "Age should not be above 65" },
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Only digits",
                },
              })}
              onKeyUp={() => {
                trigger("Age");
              }}
            />
            {errors.Age && (
              <small className="text-danger">{errors.Age.message}</small>
            )}
            <textarea
              className="form-control mt-2"
              name="Aboutyou"
              rows="5"
              placeholder="Enter discription"
              {...register("aboutyou", {
                maxLength: { value: 30, message: "Character limit 30" },
                pattern: { value:/^[A-Za-z\s]*$/, message: "Text Only" },
              })}
              onKeyUp={()=>{
                trigger("aboutyou")
              }}
            />
            {errors.aboutyou && (
              <small className="text-danger">{errors.aboutyou.message}</small>
            )}
            <br />
            <button className="btn btn-primary mt-2 text-center">ADD</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form_add;
