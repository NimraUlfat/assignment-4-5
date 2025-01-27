export default function Contact(){
  return(
<section className="bg-pink-200 text-gray-400 bg-gray-900 body-font relative">
<div className="absolute inset-0 bg-gray-900">
  <iframe title="map" width="100%" height="100%" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" Style="filter: grayscale(1) contrast(1.2) opacity(0.16);"></iframe>
</div>
<div className="container px-5 py-24 mx-auto flex">
  <div className="bg-white lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
    <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
    <p className="text-bold leading-relaxed mb-5">Contact us</p>
    <div className="relative mb-4">
      <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
      <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
    </div>
    <div className="relative mb-4">
      <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
      <textarea id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
    </div>
    <button className="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Button</button>
    <p className="text-xs text-gray-400 text-opacity-90 mt-3">Exploring the Rich and Vibrant Culture of Pakistan.</p>
  </div>
</div>
</section>
  )
} 