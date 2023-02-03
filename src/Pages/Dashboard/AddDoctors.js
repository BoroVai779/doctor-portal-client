import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Looding from '../Shared/Looding';

const AddDoctors = () => {
    const {
      register,
      formState: { errors },
      handleSubmit, reset
    } = useForm();

    const {data: services, isLoading} = useQuery('services', ()=> fetch('http://localhost:5000/service').then(res =>res.json()))
     if(isLoading){
        return <Looding></Looding>
     }
     
     const imgStorageKey = "d80b2a306b7e3905801ecb7bd21255f5";

    const onSubmit = async (data) => {
      const image = data.photo[0];
      const formData = new FormData();
      formData.append("image", image);
      const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
      fetch(url, {
        method: "POST",
        body: formData
      }).then(res =>res.json())
      .then(result =>{
        console.log(result);
        if(result.success){
          const img = result.data.url;
          const doctor = {
            name:data.name,
            email: data.email,
            speciality: data.speciality,
            img: img
          }
          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor)
          }).then((res) => res.json())
          .then(inserted =>{
            if(inserted.insertedId){
              toast.success('Doctor added successfully');
              reset();
            }
            else{
              toast.error('failed to Add Doctor')
            }
          })

        }
      })
    };
    return (
      <div>
        <h2 className="text-2xl">Add your doctors here.</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: "name is required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", {
                required: {
                  value: true,
                  message: "email is required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid email",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Speciality</span>
            </label>
            <select {...register("speciality")} class="select input-bordered w-full max-w-xs">
              {services.map((service) => (
                <option key={service._id} service={service}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full max-w-xs"
              {...register("photo", {
                required: {
                  value: true,
                  message: "photo is required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          <input className="btn w-full max-w-xs" type="submit" value="add" />
        </form>
      </div>
    );
};

export default AddDoctors;