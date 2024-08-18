import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import "react-toastify/dist/ReactToastify.css";

type Tab = "brands" | "influencers" | "career";

interface FormDataState {
  name: string;
  email: string;
  phone: string;
  social?: string;
  socialType?: string;
  followers?: string;
  location?: string;
  linkedin?: string;
  website?: string;
  message: string;
  submissionType?: string;
}

const Footer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("brands");

  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    phone: "",
    social: "",
    socialType: "",
    followers: "",
    location: "",
    linkedin: "",
    website: "",
    message: "",
    submissionType: ""
  });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Update the submissionType based on the activeTab
    setFormData(prevData => ({
      ...prevData,
      submissionType: activeTab
    }));
  }, [activeTab]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://sheet.best/api/sheets/06a57865-ea66-4935-b895-36152b960fbf", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        toast.success("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          social: "",
          socialType: "",
          followers: "",
          location: "",
          linkedin: "",
          website: "",
          message: "",
          submissionType: activeTab
        });
      } else {
        toast.error("Error submitting form.");
      }
    } catch {
      toast.error("Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

  const renderForm = () => {
    switch (activeTab) {
      case "brands":
        return (
          <>
            <input type="hidden" name="submissionType" value="brands" />
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-2 border border-gray-600 rounded bg-black text-white focus:outline-none focus:border-yellow-500"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-2 border border-gray-600 rounded bg-black text-white focus:outline-none focus:border-yellow-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full p-2 border border-gray-600 rounded bg-black text-white focus:outline-none focus:border-yellow-500"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="url"
                name="website"
                placeholder="Website"
                className="w-full p-2 border border-gray-600 rounded bg-black text-white focus:outline-none focus:border-yellow-500"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Message"
                className="w-full p-2 border border-gray-600 rounded bg-black text-white focus:outline-none focus:border-yellow-500"
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </>
        );
      case "influencers":
        return (
          <>
            <input type="hidden" name="submissionType" value="influencers" />
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-2 border border-gray-600 rounded bg-black text-white focus:outline-none focus:border-yellow-500"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-2 border border-gray-600 rounded bg-black text-white focus:outline-none focus:border-yellow-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full p-2 border border-gray-600 rounded bg-black text-white focus:outline-none focus:border-yellow-500"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <select
                name="socialType"
                className="w-full p-2 border border-gray-600 rounded bg-black text-white focus:outline-none focus:border-yellow-500"
                value={formData.socialType || ""}
                onChange={handleChange}
              >
                <option value="">Select Social Media Type</option>
                <option value="instagram">Instagram</option>
                <option value="twitter">Twitter</option>
                <option value="facebook">Facebook</option>
                <option value="linkedin">LinkedIn</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="social"
                placeholder="Social Media Handle"
                className="w-full p-2 border border-gray-600 rounded bg-black text-white focus:outline-none focus:border-yellow-500"
                value={formData.social || ""}
                onChange={handleChange}
              />
            </div>
           
            <div className="mb-4">
              <input
                type="text"
                name="followers"
                placeholder="Number of Followers"
                className="w-full p-2 border border-gray-600 rounded bg-black text-white focus:outline-none focus:border-yellow-500"
                value={formData.followers || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Message"
                className="w-full p-2 border border-gray-600 rounded bg-black text-white focus:outline-none focus:border-yellow-500"
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </>
        );
      case "career":
        return (
          <>
            <input type="hidden" name="submissionType" value="career" />
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-2 border border-gray-600 rounded bg-black text-white focus:outline-none focus:border-yellow-500"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-2 border border-gray-600 rounded bg-black text-white focus:outline-none focus:border-yellow-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full p-2 border border-gray-600 rounded bg-black text-white focus:outline-none focus:border-yellow-500"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="location"
                placeholder="Location (city)"
                className="w-full p-2 border border-gray-600 rounded bg-black text-white focus:outline-none focus:border-yellow-500"
                value={formData.location || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="url"
                name="linkedin"
                placeholder="LinkedIn Profile"
                className="w-full p-2 border border-gray-600 rounded bg-black text-white focus:outline-none focus:border-yellow-500"
                value={formData.linkedin || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Message"
                className="w-full p-2 border border-gray-600 rounded bg-black text-white focus:outline-none focus:border-yellow-500"
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-black text-white p-5" id="contact">
      <h1 className="text-yellow-500 text-4xl md:text-5xl font-bold mb-5">
        LET&apos;S CONNECT!
      </h1>
      <p className="text-gray-400 text-center max-w-xl mb-5">
        When there are great ideas at stake, it&apos;s always a good idea to
        share. Tell us how we can make it happen for you!
      </p>
      <p className="text-gray-400 mb-10">
        Fill the form below or mail us at{" "}
        <a
          href="mailto:business@loopthru.in"
          className="text-yellow-500 underline"
        >
          business@loopthru.in
        </a>
      </p>

      <div className="flex justify-center mb-5">
  <button
    onClick={() => setActiveTab("brands")}
    className={`px-4 py-2 ${
      activeTab === "brands"
        ? "text-yellow-500 border-b-2 border-yellow-500"
        : "text-gray-400"
    } focus:outline-none`}
  >
    BRANDS
  </button>
  <button
    onClick={() => setActiveTab("influencers")}
    className={`px-4 py-2 ${
      activeTab === "influencers"
        ? "text-yellow-500 border-b-2 border-yellow-500"
        : "text-gray-400"
    } focus:outline-none`}
  >
    INFLUENCERS
  </button>
  <button
    onClick={() => setActiveTab("career")}
    className={`px-4 py-2 ${
      activeTab === "career"
        ? "text-yellow-500 border-b-2 border-yellow-500"
        : "text-gray-400"
    } focus:outline-none`}
  >
    CAREERS
  </button>
</div>
<form onSubmit={handleSubmit} className="w-full max-w-xl relative">
        {renderForm()}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-yellow-500 text-black rounded hover:bg-yellow-600"
        >
          {loading ? <ClipLoader size={24} color="#000" /> : "Submit"}
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Footer;
