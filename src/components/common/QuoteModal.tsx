import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle2, Send } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';

export interface QuoteFormData {
  fullName: string;
  phone: string;
  serviceCategory: string;
  message: string;
}

export interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService = '',
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    defaultValues: {
      fullName: '',
      phone: '',
      serviceCategory: defaultService || '',
      message: '',
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    // TODO: Connect to backend API / email dispatch service (e.g. Node mailer, SendGrid)
    console.log('Quote Request Form Submission:', data);

    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsSubmitted(true);
  };

  const handleModalClose = () => {
    onClose();
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 300);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleModalClose}
      title={isSubmitted ? 'Request Received' : 'Get a Project Estimate'}
      subtitle={isSubmitted ? 'Confirmation' : 'Quick Inquiry'}
      maxWidth="max-w-lg"
    >
      {isSubmitted ? (
        <div className="py-6 text-center space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-soft">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-primary">Thank You for Reaching Out</h3>
          <p className="text-sm text-slate-muted max-w-sm mx-auto">
            We have received your project details. One of our engineers will contact you shortly with an initial estimate.
          </p>
          <div className="pt-4">
            <Button variant="primary" onClick={handleModalClose}>
              Close
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <p className="text-xs text-slate-muted leading-relaxed mb-2">
            Leave your contact details and a short description of what you need. We will prepare an estimate for you.
          </p>

          <Input
            label="Your Name"
            placeholder="e.g. Engr. Rafiqul Islam"
            {...register('fullName', { required: 'Please enter your name' })}
            error={errors.fullName?.message}
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

          <Select
            label="Service Division"
            placeholder="Select a division"
            options={[
              { value: 'Electro-Mechanical Division', label: 'Electro-Mechanical (Wiring, Substations, AC, Generators)' },
              { value: 'Civil Construction Division', label: 'Civil Construction (Buildings, Roads, Bridges, Drains)' },
              { value: 'IT & Software Division', label: 'IT & Software (Web Apps, Mobile Apps, CCTV, Networks)' },
              { value: 'General Project Inquiry', label: 'General Project or Multiple Divisions' },
            ]}
            {...register('serviceCategory', { required: 'Please select a service' })}
            error={errors.serviceCategory?.message}
          />

          <Textarea
            label="Project Description / Note"
            placeholder="Brief scope, location, estimated timeline, or tender number..."
            rows={3}
            {...register('message', { required: 'Please write a brief note' })}
            error={errors.message?.message}
          />

          <div className="pt-2 flex items-center justify-end gap-3">
            <Button
              type="button"
              variant="ghost"
              onClick={handleModalClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="gold"
              disabled={isSubmitting}
              icon={<Send className="w-4 h-4" />}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
