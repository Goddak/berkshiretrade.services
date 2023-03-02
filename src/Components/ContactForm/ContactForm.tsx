import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export interface IContactForm {
	name: string;
	email: string;
	phone: string;
	message: string;
}

const ContactForm: React.FC = () => {
	const { register, handleSubmit, formState } = useForm<IContactForm>();
	const { errors } = formState;

	const onSubmit: SubmitHandler<IContactForm> = (data: IContactForm, event?: React.BaseSyntheticEvent) => {
		if (event) event.preventDefault();
		console.log(data);
	};

	return <form onSubmit={handleSubmit(onSubmit)}>
		<div className="flex flex-col mb-4">
			<label className="font-light text-xl" htmlFor="name">Name</label>
			<input className="w-full p-2 border border-solid border-bts-black rounded-md xl:w-96 xl:p-1 xl:pl-2" type="text" {...register('name', { required: true })} />
			{errors.name && <span>This field is required</span>}
		</div>
		<div className="flex flex-col mb-4">
			<label className="font-light text-xl" htmlFor="email">Email</label>
			<input className="w-full p-2 border border-solid border-bts-black rounded-md xl:w-96 xl:p-1 xl:pl-2" type="email" {...register("email", { required: true })} />
			{errors.email && <span>This field is required</span>}
		</div>
		<div className="flex flex-col mb-4">
			<label className="font-light text-xl" htmlFor="phone">Phone</label>
			<input className="w-full p-2 border border-solid border-bts-black rounded-md xl:w-96 xl:p-1 xl:pl-2" type="text" {...register("phone", { required: true })} />
			{errors.phone && <span>This field is required</span>}
		</div>
		<div className="flex flex-col mb-4">
			<label className="font-light text-xl" htmlFor="message">Message</label>
			<textarea className="w-full p-2 border border-solid border-bts-black rounded-md xl:w-96 xl:p-1 xl:pl-2" {...register("message", { required: true })} />
			{errors.message && <span>This field is required</span>}
		</div>
		<input type="submit" className="w-full rounded-md bg-bts-yellow text-bts-black p-4" />
	</form>;
};

export default ContactForm;
