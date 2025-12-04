"use client";
import { useEffect, useState } from "react";
import Input from "./Input";

const ContactModal = ({ isOpen, onClose }) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    emailAddress: "",
    organization: "",
  });

  const toggleCheckBox = () => setCheckBox((prev) => !prev);

  const onChangeFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
  
    const { firstName, lastName, jobTitle, emailAddress, organization } = formData;
  
    // Validation
    if (!firstName || !lastName || !jobTitle || !emailAddress || !organization)
      return;
  
    if (!emailRegex.test(emailAddress)) return;
  
    setLoading(true);
    setSubmitted(false);
  
    try {
      const res = await fetch("/api/sendform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          jobTitle,
          emailAddress,
          organization,
          agreed: checkBox,
        }), 
      });
  
      const data = await res.json();
  
      console.log("Server response:", data);
  
      setLoading(false);
      setSubmitted(true);
  
      // Reset after animation
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          jobTitle: "",
          emailAddress: "",
          organization: "",
        });
        setCheckBox(false);
      }, 1500);
  
    } catch (error) {
      console.error("Submit error:", error);
      setLoading(false);
    }
  };
  
  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal container */}
      <div
        className="
          relative bg-white shadow-lg z-10 animate-fadeIn
          w-[90%] sm:w-[480px] md:w-[620px] lg:w-[816px]
          max-h-[90vh] overflow-y-auto overflow-x-hidden
          p-[24px] sm:p-[35px] md:p-[48px]
        "
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer font-[700]"
          onClick={onClose}
        >
          ✕
        </button>

        <h3 className="text-[24px] sm:text-[28px] leading-[120%] tracking-tight text-[#34393E]">
          Fill the form below to start the conversation.
        </h3>

        <form className="mt-[28px] space-y-[28px]" onSubmit={onSubmitForm}>
          {/* Name Fields */}
          <div className="flex flex-col md:flex-row justify-between gap-[28px]">
            <div className="w-full md:w-[48%]">
              <Input
                label="FIRST NAME"
                value={formData.firstName}
                inputname="firstName"
                onChange={onChangeFormData}
              />
            </div>
            <div className="w-full md:w-[48%]">
              <Input
                label="LAST NAME"
                value={formData.lastName}
                inputname="lastName"
                onChange={onChangeFormData}
              />
            </div>
          </div>

          <Input
            label="JOB TITLE"
            value={formData.jobTitle}
            inputname="jobTitle"
            onChange={onChangeFormData}
          />

          <Input
            type="email"
            label="EMAIL ADDRESS"
            value={formData.emailAddress}
            inputname="emailAddress"
            onChange={onChangeFormData}
          />

          <Input
            label="ORGANIZATION"
            value={formData.organization}
            inputname="organization"
            onChange={onChangeFormData}
          />

          {/* Checkbox */}
          <div className="flex items-start gap-[10px]">
            <input
              type="checkbox"
              checked={checkBox}
              onChange={toggleCheckBox}
              className="accent-black w-[22px] h-[22px] cursor-pointer shrink-0 mt-[4px]"
            />
            <div className="text-[#1D2328] leading-[120%] text-[18px] sm:text-[20px]">
              I agree to DODO collecting my personal information in order to
              receive updates and communications.
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-full mt-[32px]">
            <button
              type="submit"
              disabled={loading || submitted}
              className={`
                relative w-full h-[60px] sm:h-[72px] 
                text-[18px] sm:text-[19px] font-medium 
                transition-all duration-300 overflow-hidden
                ${
                  submitted
                    ? "bg-slate-600 text-white"
                    : loading
                    ? "bg-[#34393E] text-white animate-pulse"
                    : "bg-[#1D2328] text-white hover:bg-[#34393E]"
                }
              `}
            >
              {loading
                ? "SUBMITTING..."
                : submitted
                ? "SUBMITTED"
                : "SUBMIT"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
