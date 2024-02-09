import React from "react";

const YourProfile = () => {
  return (
    <section className="vh-100 bg-gray-100">
      <div className="container py-5 h-full">
        <div className="flex justify-center items-center h-full flex-row">
          <div className="w-full lg:w-6/12 mb-4 lg:mb-0">
            <div className="bg-white rounded-lg shadow-md flex items-center justify-start">
              <div className="flex items-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-t-lg p-5">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                  alt="Avatar"
                  className="w-[300px] h-[400px] object-cover rounded-full mx-auto my-5"
                />
                <div>
                  <h5 className="text-xl">Marie Horwitz</h5>
                  <p>Web Designer</p>
                  <i className="far fa-edit mb-5"></i>
                </div>
              </div>
              <div className="p-4">
                <h6 className="text-lg font-semibold mb-4">Information</h6>
                <hr className="mt-0 mb-4" />
                <div className="flex flex-wrap mb-3">
                  <div className="w-1/2">
                    <h6>Email</h6>
                    <p className="text-gray-500">info@example.com</p>
                  </div>
                  <div className="w-1/2">
                    <h6>Phone</h6>
                    <p className="text-gray-500">123 456 789</p>
                  </div>
                </div>
                <h6 className="text-lg font-semibold mb-4">Projects</h6>
                <hr className="mt-0 mb-4" />
                <div className="flex flex-wrap mb-3">
                  <div className="w-1/2">
                    <h6>Recent</h6>
                    <p className="text-gray-500">Lorem ipsum</p>
                  </div>
                  <div className="w-1/2">
                    <h6>Most Viewed</h6>
                    <p className="text-gray-500">Dolor sit amet</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <a href="#!" className="me-3">
                    <i className="fab fa-facebook-f text-lg"></i>
                  </a>
                  <a href="#!" className="me-3">
                    <i className="fab fa-twitter text-lg"></i>
                  </a>
                  <a href="#!">
                    <i className="fab fa-instagram text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourProfile;
