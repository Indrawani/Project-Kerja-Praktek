// import { useForm } from "react-hook-form";

// function Register() {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     // send the data to the server for registration
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" {...register("name", { required: true })} />
//         {errors.name && <span>This field is required</span>}
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
//         {errors.email && <span>This field is required and must be a valid email address</span>}
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" {...register("password", { required: true, minLength: 8 })} />
//         {errors.password && <span>This field is required and must be at least 8 characters long</span>}
//       </div>
//       <div>
//         <label htmlFor="confirmPassword">Confirm Password:</label>
//         <input type="password" id="confirmPassword" {...register("confirmPassword", { required: true, minLength: 8 })} />
//         {errors.confirmPassword && <span>This field is required and must match the password field</span>}
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default Register;
