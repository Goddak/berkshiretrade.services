import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export interface IContactFormState {
	name: string;
	email: string;
	phone: string;
	message: string;
}

interface IContactForm {
	className?: string;
}

const ContactForm: React.FC<IContactForm> = ({ className }) => {
	const { register, handleSubmit, formState } = useForm<IContactFormState>();
	const { errors } = formState;

	const onSubmit: SubmitHandler<IContactFormState> = (data: IContactFormState, event?: React.BaseSyntheticEvent) => {
		if (event) event.preventDefault();
		console.log(data);
	};

	return <form className={className} onSubmit={handleSubmit(onSubmit)}>
		<div className="flex flex-col mb-4">
			<label className="mb-1 font-light text-xl" htmlFor="name">Name</label>
			<input className="w-full p-2 border border-solid border-bts-black rounded-md" type="text" {...register('name', { required: true })} />
			{errors.name && <span className="text-bts-red">This field is required</span>}
		</div>
		<div className="flex flex-col mb-4">
			<label className="mb-1 font-light text-xl" htmlFor="email">Email</label>
			<input className="w-full p-2 border border-solid border-bts-black rounded-md" type="email" {...register("email", { required: true })} />
			{errors.email && <span className="text-bts-red">This field is required</span>}
		</div>
		<div className="flex flex-col mb-4">
			<label className="mb-1 font-light text-xl" htmlFor="phone">Phone</label>
			<input className="w-full p-2 border border-solid border-bts-black rounded-md" type="text" {...register("phone", { required: true })} />
			{errors.phone && <span className="text-bts-red">This field is required</span>}
		</div>
		<div className="flex flex-col mb-10">
			<label className="mb-1 font-light text-xl" htmlFor="message">Message</label>
			<textarea className="w-full p-2 border border-solid border-bts-black rounded-md" {...register("message", { required: true })} />
			{errors.message && <span className="text-bts-red">This field is required</span>}
		</div>
		<input type="submit" className="w-full rounded-md bg-bts-black text-bts-yellow p-4" />
	</form>;
};

export default ContactForm;
