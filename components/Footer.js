import React, { Fragment } from "react";

const Footer = () => {
  const footerItems = [
    {
      title: "Contact Us",
      details: {
        mobile: "+255 22 2170173",
        email: "md@pizzaparadiso.go.tz",
      },
    },
    {
      title: "Find our restaurants",
      details: {
        addresses: [
          "Kinondoni Ave,2 Morogoro Road,Dar es Salaam",
          "Mbezi Garden,Bagamoyo Road, Dar es Salaam",
        ],
      },
    },
    { title: "Working Hours", details: { time: "9:00 AM - 11:00 PM" } },
  ];
  return (
    <div className="w-full px-2 md:px-8 py-16 mt-16 flex flex-col md:flex-row  md:justify-end bg-bgFooter bg-center bg-cover">
      {footerItems.map(({ title, details }) => {
        const {
          mobile = null,
          email = null,
          addresses = null,
          time = null,
        } = details;
        return (
          <div key={title} className="m-2 md:m-6">
            <h2 className="uppercase text-xl text-yellow-400 md:text-yellow-600 font-bold my-2">
              {title}
            </h2>
            <div className="text-white font-bold">
              {mobile && (
                <p className="py-2">
                  Mobile:{" "}
                  <a
                    href={`tel:${mobile}`}
                    className="text-cyan-500 hover:text-cyan-400 font-bold"
                  >
                    {mobile}
                  </a>
                </p>
              )}
              {email && (
                <p className="py-2">
                  Email:{" "}
                  <a
                    href={`mailto:${email}`}
                    className="text-blue-500 hover:text-blue-400 font-bold"
                  >
                    {email}
                  </a>
                </p>
              )}
              {time && <p className="py-2">{time}</p>}
              {addresses && (
                <div>
                  {addresses.map((address, i) => (
                    <Fragment key={i}>
                      <address className="whitespace-pre-line">
                        {address.split(",").join("\n")}
                      </address>
                    </Fragment>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
