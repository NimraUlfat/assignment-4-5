import Link from "next/link";

export default function Blog(){
    return(
        <div >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-5/6 w-5/6 mb-10 md:mb-0">
      <img className="bounce-in-right sm:jello-horizontal object-cover object-center rounded" alt="img" src="https://www.state.gov/wp-content/uploads/2019/04/Pakistan-2115x1406.jpg"></img>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Navigating the Colors of Pakistani Culture with Culture Quest
      </h1>
      <br></br>
      <p className="text-gray-800 font-bold mb-9 leading-relaxed">Pakistan, a land of incredible diversity and cultural heritage, is a country that is steeped in history and tradition. From its colorful festivals to its mouthwatering cuisine, Pakistan offers a captivating glimpse into a world of vibrant traditions and customs. In this blog post, we will take you on a journey through the different facets of Pakistani culture, showcasing the unique beauty and charm that define this remarkable nation.</p>
      <div className="flex justify-center">
      </div>
      </div>
  </div>
        <section className=" bg-cover text-black-900 body-font-bold">
       <div className="bounce-in-right container px-5 py-24 mx-auto ">
    <div className=" flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="bounce-in-right sm:jello-horizontal hover:bg-slate-300 shadow-xl m-3 h-full border-2 border-gray-800 rounded-lg border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.pinimg.com/736x/23/62/ab/2362ab81de5502e63d810831f1e98d25.jpg"></img>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-sky-800 mb-1">CultureQuest</h2>
            <h1 className="title-font text-2xl font-medium text-gray-900 mb-3">Traditional Clothing</h1>
            <p className="text-gray-800 font-bold leading-relaxed mb-3">Traditional clothing in Pakistan includes the shalwar kameez for both men and women. Women often accessorize with a colorful dupatta.</p>
            <div className="flex items-center flex-wrap ">
              <Link href={"/clothing"}>
              <li className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </li></Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="bounce-in-right sm:jello-horizontal hover:bg-slate-300 shadow-xl m-3 h-full border-2 border-gray-800 rounded-lg border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*w10S0P1pHuCBObqB60NgMg@2x.jpeg"></img>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-sky-800 mb-1">CultureQuest</h2>
            <h1 className="title-font text-2xl font-medium text-gray-900 mb-3">Festivals and Celebrations</h1>
            <p className="text-gray-800 font-bold leading-relaxed mb-3">Pakistan boasts a rich tapestry of festivals and celebrations that reflect its diverse cultures and traditions. </p>
            <div className="flex items-center flex-wrap">
            <Link href={"/festivals"}>
              <li className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </li></Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="bounce-in-right sm:jello-horizontal hover:bg-slate-300 shadow-xl m-3 h-full border-2 border-gray-800 rounded-lg border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://royalmahal.co.uk/wp-content/uploads/2023/01/indian-restaurant-scaled-e1670322083921.jpg" alt="blog"></img>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-sky-800 mb-1">CultureQuest</h2>
            <h1 className="title-font text-2xl font-medium text-gray-900 mb-3">Cuisine</h1>
            <p className="text-gray-800 font-bold leading-relaxed mb-3">Pakistani cuisine is a flavorful fusion of spices, herbs, and diverse cooking techniques, reflecting the country's rich cultural heritage.</p>
            <div className="flex items-center flex-wrap ">
            <Link href={"/Cuisine"}>
              <li className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </li></Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
    

<div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="bounce-in-right sm:jello-horizontal hover:bg-slate-300 shadow-xl m-3 h-full border-2 border-gray-800 rounded-lg border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://mos.org.pk/wp-content/uploads/2021/07/SRTERTRETRET_1024x1024.jpg"></img>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-sky-800 mb-1">CultureQuest</h2>
            <h1 className="title-font text-2xl font-medium text-gray-900 mb-3">Art and Handicrafts</h1>
            <p className="text-gray-800 font-bold leading-relaxed mb-3">Pakistan is renowned for its rich tradition of art and handicrafts, showcasing intricate craftsmanship and cultural diversity.</p>
            <div className="flex items-center flex-wrap ">
            <Link href={"/art"}>
              <li className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </li></Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" stroke-linecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="bounce-in-right sm:jello-horizontal hover:bg-slate-300 shadow-xl m-3 h-full border-2 border-gray-800 rounded-lg border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*mzjA65VTshfuA9mLVgdkJg@2x.jpeg"></img>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-sky-800 mb-1">CultureQuest</h2>
            <h1 className="title-font text-2xl font-medium text-gray-900 mb-3">Music and Dance</h1>
            <p className="text-gray-800 font-bold leading-relaxed mb-3">Pakistan's music and dance reflect its rich cultural heritage and diversity. Traditional music includes genres like Qawwali, Sufi shrines, and folk music.</p>
            <div className="flex items-center flex-wrap">
            <Link href={"/music"}>
              <li className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </li></Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="bounce-in-right sm:jello-horizontal hover:bg-slate-300 shadow-xl m-3 h-full border-2 border-gray-800 rounded-lg border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://img.freepik.com/premium-photo/hands-diversity-friends-park-teamwork-partnership-volunteering-mission-from-top-view-people-hand-support-by-volunteer-group-outdoor-community-charity-activism_590464-189012.jpg"></img>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-sky-800 mb-1">CultureQuest</h2>
            <h1 className="title-font text-2xl font-medium text-gray-900 mb-3">Ethnic Diversity</h1>
            <p className="text-gray-800 font-bold leading-relaxed mb-3">Ethnic diversity in Pakistan is a hallmark of its cultural landscape, encompassing a wide array of groups, each with unique languages, traditions, and customs.”
</p>
            <div className="flex items-center flex-wrap ">
            <Link href={"/diversity"}>
              <li className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </li></Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  
  </section>
  </div>
  
  
        
        
        
    )
}

