import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div>
      <Header></Header>
      <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>

          <p className="text-lg mb-4">
            Welcome to{" "}
            <span className="font-semibold text-blue-600">KS BMI App</span>{" "}
            — your simple and accurate tool to calculate your Body Mass Index.
            We help you track your fitness goals by providing insights into your
            weight category and health range.
          </p>

          <p className="text-lg mb-4">
            Our calculator is designed with a user-friendly interface that
            delivers instant BMI results based on your height and weight.
            Whether you're tracking progress or starting your wellness journey,
            our tool is built to support your goals.
          </p>

          <div className="bg-white shadow-md rounded-xl p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">
              Why We Built This
            </h2>
            <p className="text-base mb-2">
              Health awareness is the first step towards living a better life.
              Many people are unaware of how BMI works or how it affects overall
              well-being.
            </p>
            <p className="text-base">
              Our mission is to make health monitoring accessible and
              understandable for everyone through simple, intuitive tools like
              this BMI calculator.
            </p>
          </div>

          <div className="mt-10 text-center text-sm text-blue-600 font-semibold">
            <div className="mb-6">App Founder and Web Developer: Karthik Shetty</div>
            <div> Email: shetty@developer@gmail.com</div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
