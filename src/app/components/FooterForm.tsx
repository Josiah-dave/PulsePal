import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axios from "axios";

const FooterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    centreName: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post("/api/send-email", formData);
      toast.success("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        centreName: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send the message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-4">
        <Input
          required
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl"
        />
        <Input
          required
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl"
        />
      </div>
      <Input
        required
        name="email"
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl"
      />
      <Input
        required
        name="centreName"
        placeholder="Leisure Centre Name"
        value={formData.centreName}
        onChange={handleChange}
        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl"
      />
      <Textarea
        required
        name="message"
        placeholder="Tell us about your centre..."
        value={formData.message}
        onChange={handleChange}
        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl min-h-[100px]"
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-button-hover text-white rounded-xl py-3 font-semibold"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default FooterForm;
