import React, { Fragment, useState } from "react";
import { signin, authenticate, isAuthenticated } from "../auth";
import { Link, Redirect } from "react-router-dom";

const Signin = () => {
	const { user } = isAuthenticated();
	const [values, setValues] = useState({
		email: "",
		password: "",
		error: "",
		loading: false,
		redirectToReferrer: false
	});

	// console.log(values)

	const handleChange = (event) => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	const formSubmit = (event) => {
		event.preventDefault();
		setValues({ ...values, error: false, loading: true });
		signin({ email: values.email, password: values.password }).then((data) => {
			console.log(data);
			if (data.error) {
				setValues({ ...values, error: data.error, loading: false });
			} else {
				authenticate(data, () => {
					setValues({ ...values, redirectToReferrer: true });
				});
			}
		});
	};

	const signinForm = () => {
		return (
			<div>
				<div className='form-group'>
					<label className='text-muted' style={{ margin: ".5rem" }}>
						Email Id
					</label>
					<input
						name='email'
						type='email'
						className='form-control'
						placeholder='Email Id'
						style={{ margin: ".5rem" }}
						onChange={handleChange}
						value={values.email}></input>
				</div>

				<div className='form-group'>
					<label className='text-muted' style={{ margin: ".5rem" }}>
						Password
					</label>
					<input
						name='password'
						type='password'
						className='form-control'
						placeholder='Password'
						style={{ margin: ".5em" }}
						onChange={handleChange}
						value={values.password}></input>
				</div>

				<center>
					<button
						onClick={formSubmit}
						type='submit'
						className='btn btn-primary'
						style={{ margin: "1.5em" }}>
						Submit
					</button>
				</center>

				<div style={{ margin: "1.5em" }} align='center'>
					<p>
						Haven&apos;t Signed up yet, <Link to='/signup'>SignUp</Link>
					</p>
				</div>
			</div>
		);
	};

	const dispError = () => (
		<div
			className='alert alert-danger'
			style={{ display: values.error ? "" : "none" }}>
			{values.error}
		</div>
	);

	const dispLoading = () => (
		<div
			className='alert alert-info'
			style={{ display: values.loading ? "" : "none" }}>
			<h2 align='center'>Loading...</h2>
		</div>
	);
<<<<<<< HEAD

	const redirectUser = () => {
		if (values.redirectToReferrer) {
			if (user && user.role === 1) {
				return <Redirect to='/admin/dashboard'></Redirect>;
			} else {
				return <Redirect to='/user/dashboard'></Redirect>;
			}
		}
		if (isAuthenticated()) {
			return <Redirect to='/'></Redirect>;
		}
	};

=======
  
	const redirectUser = () => {
	  if (values.redirectToReferrer) {
		  return <Redirect to="/dashboard"></Redirect>;
	  }
	  if(isAuthenticated()){
		return <Redirect to="/"></Redirect>;
	  }
	};
  
>>>>>>> bd8cbd227adaff63a0fcc02b96994e3d4cd0215c
	return (
		<Fragment>
			{dispError()}
			{dispLoading()}
			{signinForm()}
			{/* {redirectUser()} */}
		</Fragment>
	);
};

export default Signin;
