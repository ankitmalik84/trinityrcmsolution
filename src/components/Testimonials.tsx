import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  const testimonials = [
    {
      id: 1,
      name: "Clinton Dental",
      location: "1175 Main St #8, Clinton",
      content:
        "We have been consistently impressed by the exceptional professionalism and depth of expertise demonstrated by the Trinity RCM Health team. Their unwavering dedication to excellence is evident in every interaction, and their proactive approach to billing and managing AR has been particularly noteworthy. Their commitment to our practice's success is truly commendable, and we are grateful to have them as trusted partners in our journey towards achieving our goals.",
      rating: 5,
    },
    {
      id: 2,
      name: "Star Dental",
      location: "415 East St. Chicopee",
      content:
        "Choosing Trinity RCM Health for our billing and credentialing needs has proven to be a pivotal decision for our practice, as their comprehensive solution and responsive support have not only streamlined our operations but have also significantly boosted our overall efficiency. Their unwavering commitment to excellence and dedication to client satisfaction have set them apart as a trusted partner in our journey towards success.",
      rating: 3,
    },
    {
      id: 3,
      name: "Springfield Dental for Kids",
      location: "481 Breckwood Blvd., Springfield",
      content:
        "We've had the pleasure of entrusting our billing and credentialing needs to Trinity RCM Health for quite some time now, and it's safe to say that their services have exceeded our expectations on every front. What sets Trinity RCM Health apart is their unwavering commitment to understanding and addressing our practice's unique requirements.",
      rating: 5,
    },
    {
      id: 4,
      name: "Springfield Dental",
      location: "606 Sumner Ave. Springfield, MA",
      content:
        "Trinity RCM Health has played a pivotal role in transforming our practice's billing and credentialing procedures. Their expertise and meticulous attention to detail have not only streamlined our operations but have also led to a substantial reduction in claim denials, which in turn has afforded us the opportunity to devote more resources and energy towards delivering exceptional dental care to our patients.",
      rating: 5,
    },
    {
      id: 5,
      name: "Holyoke Family Dental",
      location: "1789 Northampton St. Holyoke, MA",
      content:
        "Trinity RCM Health has surpassed our expectations in every aspect, demonstrating a level of expertise and dedication that has been truly remarkable. Their knowledgeable team not only possesses a deep understanding of billing and credentialing intricacies but also excels in providing personalized guidance tailored to our practice's specific needs.",
      rating: 2,
    },
    {
      id: 6,
      name: "State Street Dental",
      location: "950 State St. Springfield",
      content:
        "Trinity RCM Health has been a game-changer for our practice. Their efficient claim submission and follow-up processes have significantly reduced our outstanding AR, leading to a noticeable increase in revenue. Their meticulous attention to detail and proactive approach to claim management have minimized delays and denials, ensuring timely reimbursements.",
      rating: 4,
    },
    {
      id: 7,
      name: "Practice Owner",
      location: "Pain Management Group, Chicago, IL",
      content:
        "Trinity RCM handled our provider credentialing and got us enrolled with payers in record time. Their billing experts kept everything compliant and ensured cash flow from day one. Highly recommend for new practices and growing groups.",
      rating: 5,
    },
    {
      id: 8,
      name: "Orthopedic Practice Manager",
      location: "Denver, CO",
      content:
        "We had over $150,000 stuck in aging claims when we contacted Trinity RCM Health. Their team identified the issues, fixed coding errors, and recovered most of it within 90 days. I wish we had partnered with them sooner.",
      rating: 3,
    },
  ];

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setDirection("forward");
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setDirection("backward");
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index: number) => {
    setIsAutoPlaying(false);
    setDirection(index > currentTestimonial ? "forward" : "backward");
    setCurrentTestimonial(index);
  };

  const currentTestimonialData = testimonials[currentTestimonial];

  // Auto-play testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection("forward");
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  const testimonialVariants = {
    enterForward: {
      x: 20,
      opacity: 0,
    },
    enterBackward: {
      x: -20,
      opacity: 0,
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exitForward: {
      zIndex: 0,
      x: -20,
      opacity: 0,
    },
    exitBackward: {
      zIndex: 0,
      x: 20,
      opacity: 0,
    },
  };

  const starVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="testimonials"
      className="py-10 md:py-20 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-50 rounded-full blur-3xl opacity-50"></div>

      <motion.div
        className="container mx-auto px-4 relative z-10 opacity-100"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        style={{ minHeight: "400px" }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hear from our satisfied clients who have experienced the difference
            our RCM solution make.
          </motion.p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div className="max-w-4xl mx-auto" variants={itemVariants}>
          <motion.div
            className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-4 md:p-8 relative shadow-xl border border-gray-100"
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Quote className="w-8 h-8 text-white" />
            </motion.div>

            <div className="text-center mb-8">
              <motion.div
                className="flex justify-center mb-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[...Array(currentTestimonialData.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    variants={starVariants}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Star className="w-5 h-5 text-yellow-400 fill-current mx-1" />
                  </motion.div>
                ))}
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={currentTestimonial}
                  className="text-lg text-gray-700 italic leading-relaxed mb-6"
                  variants={testimonialVariants}
                  initial={
                    direction === "forward" ? "enterForward" : "enterBackward"
                  }
                  animate="center"
                  exit={
                    direction === "forward" ? "exitForward" : "exitBackward"
                  }
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  "{currentTestimonialData.content}"
                </motion.blockquote>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentTestimonial}-author`}
                  className="border-t border-gray-200 pt-6"
                  variants={testimonialVariants}
                  initial={
                    direction === "forward" ? "enterForward" : "enterBackward"
                  }
                  animate="center"
                  exit={
                    direction === "forward" ? "exitForward" : "exitBackward"
                  }
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">
                    {currentTestimonialData.name}
                  </h4>
                  <p className="text-gray-600">
                    {currentTestimonialData.location}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <motion.button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </motion.button>

            <motion.button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </motion.button>

            {/* Auto-play indicator */}
            <motion.div
              className="absolute bottom-4 right-4 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  isAutoPlaying ? "bg-green-500" : "bg-gray-300"
                }`}
              ></div>
              <span className="text-xs text-gray-500">
                {isAutoPlaying ? "Auto-playing" : "Paused"}
              </span>
            </motion.div>
          </motion.div>

          {/* Testimonial Indicators */}
          <motion.div
            className="flex justify-center mt-8 gap-2"
            variants={itemVariants}
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  scale: index === currentTestimonial ? 1.25 : 1,
                }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Additional Testimonials Grid */}
        <motion.div
          className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ type: "spring" }}
            >
              <motion.div
                className="flex justify-center mb-4"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Star className="w-4 h-4 text-yellow-400 fill-current mx-0.5" />
                  </motion.div>
                ))}
              </motion.div>

              <motion.blockquote
                className="text-gray-700 text-sm italic mb-4 line-clamp-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                "
                {testimonial.content.length > 150
                  ? testimonial.content.substring(0, 150) + "..."
                  : testimonial.content}
                "
              </motion.blockquote>

              <motion.div
                className="border-t border-gray-100 pt-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <h5 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
                  {testimonial.name}
                </h5>
                <p className="text-gray-600 text-xs">{testimonial.location}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 max-w-4xl mx-auto shadow-lg border border-gray-100"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Join Our Success Stories
            </motion.h3>
            <motion.p
              className="text-lg text-gray-600 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Ready to experience the same level of service and results? Let's
              discuss how we can help your practice.
            </motion.p>
            <Link to="/contact">
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
                whileHover={{
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Get Started Today
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
