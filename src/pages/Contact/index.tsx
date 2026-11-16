import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Send, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/common/PageHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { Badge } from '@/components/ui/Badge';
import { COMPANY_INFO } from '@/data/company';
import { usePageTitle } from '@/hooks/usePageTitle';

export interface ContactFormData {
  name: string;
  organization: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  usePageTitle(
    'Contact Us | Sijjil Enterprise - Project Inquiries',
    'Get in touch with Sijjil Enterprise for tender discussions, engineering inquiries, and price estimates in Bangladesh.'
  );

  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      organization: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // TODO: Connect to backend email dispatch or API endpoint (e.g. Node API, SendGrid)
    console.log('Contact form submitted with data:', data);

    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    reset();
  };

  return (
    <div className="w-full">
      <PageHeader
        badge="Get in Touch"
        title="Contact Our Team"
        description="Reach out to discuss an upcoming tender, request a site visit, or get a clear cost estimate for your construction, electrical, or software project."
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1800&auto=format&fit=crop"
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="py-20 lg:py-28 bg-white border-b border-slate-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Form or Success State */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-brand-lg border border-slate-border/90 p-8 sm:p-10 shadow-soft">
                {isSubmitted ? (
                  /* Animated Success Card with Framer Motion SVG Stroke Draw */
                  <div className="py-12 text-center space-y-6 flex flex-col items-center">
                    <div className="w-24 h-24 flex items-center justify-center">
                      <svg
                        viewBox="0 0 72 72"
                        className="w-20 h-20 text-emerald-500 overflow-visible"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <motion.circle
                          cx="36"
                          cy="36"
                          r="30"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.6, ease: 'easeInOut' }}
                        />
                        <motion.path
                          d="M23 37L32 46L49 26"
                          stroke="#E0A526"
                          strokeWidth="5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.4, delay: 0.5, ease: 'easeOut' }}
                        />
                      </svg>
                    </div>

                    <Badge variant="success">Message Sent</Badge>

                    <h3 className="text-2xl font-bold text-primary">
                      Thank You for Contacting Us
                    </h3>

                    <p className="text-sm sm:text-base text-slate-muted max-w-md mx-auto leading-relaxed">
                      We have received your message. One of our engineers will review your request and get in touch within 24 hours.
                    </p>

                    <div className="pt-4">
                      <Button variant="outline" onClick={handleResetForm}>
                        Send Another Message
                      </Button>
                    </div>
                  </div>
                ) : (
                  /* Contact Form */
                  <div>
                    <div className="mb-6">
                      <span className="text-xs uppercase tracking-wider font-semibold text-accent block mb-1">
                        Send a Message
                      </span>
                      <h2 className="text-2xl font-bold text-primary">
                        Tell Us About Your Project
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-muted mt-1">
                        Fill out the form below and we will get back to you promptly.
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-4"
                      noValidate
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input
                          label="Your Name"
                          placeholder="e.g. Rafiqul Islam"
                          {...register('name', { required: 'Please enter your name' })}
                          error={errors.name?.message}
                        />

                        <Input
                          label="Organization / Company"
                          placeholder="e.g. Ministry / Firm Name"
                          {...register('organization', {
                            required: 'Please enter your organization name',
                          })}
                          error={errors.organization?.message}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input
                          label="Email Address"
                          type="email"
                          placeholder="name@example.com"
                          {...register('email', {
                            required: 'Please enter your email',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Please enter a valid email',
                            },
                          })}
                          error={errors.email?.message}
                        />

                        <Input
                          label="Phone Number"
                          type="tel"
                          placeholder="+880 1700 000000"
                          {...register('phone', {
                            required: 'Please enter your phone number',
                          })}
                          error={errors.phone?.message}
                        />
                      </div>

                      <Select
                        label="Service You Need"
                        placeholder="Select a division"
                        options={[
                          { value: 'Electro-Mechanical', label: 'Electro-Mechanical (Wiring, Substations, AC, Generators)' },
                          { value: 'Civil Construction', label: 'Civil Construction (Buildings, Roads, Bridges, Drains)' },
                          { value: 'IT Solutions', label: 'IT & Software (Web Apps, Mobile Apps, CCTV, Networks)' },
                          { value: 'General Tender Inquiry', label: 'General Project or Tender Inquiry' },
                        ]}
                        {...register('service', { required: 'Please select a service' })}
                        error={errors.service?.message}
                      />

                      <Textarea
                        label="Project Details or Message"
                        rows={4}
                        placeholder="Tell us what you need, location of the project, estimated timeline, or tender number..."
                        {...register('message', {
                          required: 'Please write a short message',
                        })}
                        error={errors.message?.message}
                      />

                      <div className="pt-2">
                        <Button
                          type="submit"
                          variant="gold"
                          size="lg"
                          className="w-full sm:w-auto"
                          disabled={isSubmitting}
                          icon={<Send className="w-4 h-4" />}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Office Info & Map */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="bg-lightgrey/80 border-slate-border">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-accent" />
                  <span>Our Office Address</span>
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-primary">Office Address</div>
                      <div className="text-slate-muted mt-0.5 leading-relaxed">
                        {COMPANY_INFO.contact.address.line1}<br />
                        {COMPANY_INFO.contact.address.line2}, {COMPANY_INFO.contact.address.city}, {COMPANY_INFO.contact.address.country}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-primary">Phone Numbers</div>
                      <div className="text-slate-muted mt-0.5">
                        <a href={`tel:${COMPANY_INFO.contact.phone.primary}`} className="hover:text-accent transition-colors block">
                          Main: {COMPANY_INFO.contact.phone.displayPrimary}
                        </a>
                        <a href={`tel:${COMPANY_INFO.contact.phone.tenders}`} className="hover:text-accent transition-colors block">
                          Tenders: {COMPANY_INFO.contact.phone.displayTenders}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-primary">Email</div>
                      <div className="text-slate-muted mt-0.5">
                        <a href={`mailto:${COMPANY_INFO.contact.email.general}`} className="hover:text-accent transition-colors block">
                          {COMPANY_INFO.contact.email.general}
                        </a>
                        <a href={`mailto:${COMPANY_INFO.contact.email.tenders}`} className="hover:text-accent transition-colors block">
                          {COMPANY_INFO.contact.email.tenders}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-primary">Working Hours</div>
                      <div className="text-slate-muted mt-0.5">
                        <div>{COMPANY_INFO.contact.workingHours.days}: {COMPANY_INFO.contact.workingHours.time}</div>
                        <div className="text-xs text-slate-400">{COMPANY_INFO.contact.workingHours.weekend}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Map Embed */}
              <div className="rounded-brand-lg overflow-hidden border border-slate-border shadow-soft bg-lightgrey relative h-64 sm:h-72">
                <iframe
                  title="Sijjil Enterprise Office Location Map"
                  src={COMPANY_INFO.contact.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
