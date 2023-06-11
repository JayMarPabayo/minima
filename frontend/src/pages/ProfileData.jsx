import React from "react";

const ProfileData = () => {
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  return (
    <div className="absolute inset-0 h-full w-full">
      <a
        href="/"
        className="ml-3 mt-3 text-[#5b5d4c] font-yomogi tracking-widest font-bold"
      >
        <span className="text-black font-extrabold text-2xl">m</span>inima
        <span className="text-black font-extrabold text-2xl animate-pulse">
          .
        </span>
      </a>
      <main className="border border-stone-500 border-opacity-60 w-[30rem] mx-auto mt-12 pt-5 pb-16">
        <h1 className="text-2xl tracking-widest font-bold text-center">
          fill-up profile
        </h1>
        <form className="w-full mt-12 mx-auto flex flex-col items-start justify-between tracking-wider text-lg gap-7">
          <div className="flex items-center gap-2 ml-10">
            <label htmlFor="username" className="">
              Full name •
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="outline-none w-[16.50rem] px-2 text-lg font-bold border-b-2 border-black border-opacity-40 bg-white bg-opacity-0"
            />
          </div>
          <div className="flex items-center gap-2 ml-16">
            <label htmlFor="gender" className="">
              Gender •
            </label>
            <select className="w-36 bg-white bg-opacity-0 outline-none border-b border-black border-opacity-40 pb-1">
              <option key="Male" value="Male">
                Male
              </option>
              <option key="Female" value="Female">
                Female
              </option>
            </select>
            <label htmlFor="username" className="">
              Age •
            </label>
            <input
              type="number"
              name="age"
              id="age"
              className="w-16 outline-none px-2 text-lg font-bold border-b-2 border-black border-opacity-40 bg-white bg-opacity-0"
            />
          </div>
          <div className="flex items-center gap-2 ml-10">
            <label className="pb-1">Location •</label>
            <select className="bg-white bg-opacity-0 outline-none border-b border-black border-opacity-40 pb-1">
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <section className="w-full h-12 text-center">
            <input
              type="button"
              value="Submit"
              className="px-7 py-1 text-2xl text-white bg-[#676b52]  border-t-2 border-l-2  rounded-sm outline outline-4 outline-black cursor-pointer hover:scale-[98%] active:scale-95 active:outline-[3px] active:border-0"
            />
          </section>
        </form>
      </main>
    </div>
  );
};

export default ProfileData;
