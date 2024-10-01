function Form() {
  return (
    <div class="bg-white flex md:flex-row flex-wrap justify-center items-center md:gap-24 gap-4 py-[10%] px-[10%]">
      <div class="md:w-[30%] w-full md:text-justify text-center">
        <h2 class="text-[2.5rem] font-bold mb-5 text-red-800">
          Get a Free Quote Now!
        </h2>
        <p class="text-[18px] font-medium pb-5">
          We believe Dina Holding will be your best partner!
        </p>
        <p class="py-4 text-[14px]">
          *Please fill out the form with your contact details or give us a call,
          and we will get back to you within 24 hours.
        </p>
      </div>
      <div class="flex flex-col items-center md:w-[30%] w-full md:py-0 py-2">
        <form
          class="flex flex-col items-center gap-4 py-4"
          method="post"
          onsubmit="return validateForm()"
        >
          <div class="flex md:flex-row flex-col gap-2">
            <input
              class="p-2 border-2 border-gray-300 rounded-md"
              type="text"
              placeholder="Name"
              id="name"
              required
            />
            <input
              class="p-2 border-2 border-gray-300 rounded-md"
              type="text"
              placeholder="Company Name"
              id="company"
              required
            />
          </div>
          <div class="flex flex-col gap-2 w-full">
            <input
              class="p-2 border-2 border-gray-300 rounded-md"
              type="email"
              placeholder="Email"
              id="email"
              required
            />
            <input
              class="p-2 border-2 border-gray-300 rounded-md"
              type="number"
              placeholder="Phone"
              id="phone"
              required
            />
            <textarea
              class="p-2 border-2 border-gray-300 rounded-md"
              placeholder="Message"
              id="message"
              required
            ></textarea>
          </div>
          <button
            class="px-8 bg-red-800 text-white p-2 rounded-md"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form
