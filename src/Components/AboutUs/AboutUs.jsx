const AboutUs = () => {
  return (
    <div id="about">
        <h1 className="text-3xl font-bold px-16 text-gray-500">Know About <span className="text-blue-600">Us</span></h1>
      <div className="grid md:grid-cols-2 gap-16 justify-between px-16 py-10">
        <img data-aos="fade-up-right" data-aos-duration="2000" src="/python.jpg" alt="" />
        <div data-aos="fade-up-left" data-aos-duration="2000">
          <h1 className="text-xl font-semibold text-blue-500 mb-4">
            Drawing thousands of the world's technology leaders together to
            learn and do business.
          </h1>
          <p className="text-justify text-gray-400 mb-5">
            Must explain to you how all this mistaken idea of denouncing
            pleasure and seds praising pain was born and I will give you a
            complete account of the system, and expound the actual teaching of
            the great explorer of the truth, the masterbuilder of human
            happiness rejects, dislikes, or avoids pleasure.
            <br />
            <br />
            Which toil and pain
            can procure him some great pleasure. To take a trivial example,
            which of us ever undertakes laborious physical exercise, except to
            obtain some advantage from annoying consequences.
          </p>
          <div className="">
                  <button className="text-white font-semibold p-3 bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 focus:outline-none">Read More</button>
              </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
