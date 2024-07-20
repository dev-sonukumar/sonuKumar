import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="border-none p-4 bg-slate-200 w-full rounded-md outline-none"
        />

        <textarea
          {...register("message")}
          placeholder="Message"
          className="border-none p-4 bg-slate-200  w-full rounded-md outline-none"
        />

        <button className="px-5 py-2 bg-[#FC6B60] text-white rounded-md  hover:shadow-lg text-md ">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
