import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';

const ContactForm = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success(language === 'en' 
        ? "Message sent successfully! We'll get back to you within 24 hours."
        : "Nachricht erfolgreich gesendet! Wir melden uns innerhalb von 24 Stunden bei Ihnen.");
        
      setFormData({
        fullName: '',
        jobTitle: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">{t.fullName} *</Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder={language === 'en' ? "Your full name" : "Ihr vollständiger Name"}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="jobTitle">{t.jobTitle}</Label>
          <Input
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder={language === 'en' ? "Your position" : "Deine Rolle"}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="company">{t.company}</Label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder={language === 'en' ? "Your company name" : "Name Ihres Unternehmens"}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">{t.email} *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">{t.phone}</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder={language === 'en' ? "Your phone number" : "Ihre Telefonnummer"}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">{t.message} *</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder={language === 'en' ? "How can we help you?" : "Wie können wir Ihnen helfen?"}
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-compella-teal hover:bg-compella-teal/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? t.sending : t.sendMessage}
      </Button>
      
      <p className="text-sm text-gray-500 text-center">
        {t.responseMessage}
      </p>
    </form>
  );
};

export default ContactForm;
