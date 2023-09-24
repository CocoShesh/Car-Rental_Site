import React from "react";
import "./mediaQuerystyling.css";
const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7726.63585100111!2d121.05017469999997!3d14.46642470000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1694417161496!5m2!1sen!2sph"
      width="1000"
      height="400"
      style={{ border: "0", borderRadius: "20px" }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps"
      className="max-md:w-full lg:mx-auto  max-md:m-0  max-xl:mx-20 max-sm:my-10 "
    ></iframe>
  );
};

export default GoogleMap;
