import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, CardHeader, Input, Label } from '@/components/ui';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useClassroom } from '@/hooks/useClassroom';
import { StudentSignupData } from '@/services/classroomService';

export default function StudentSignupPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [router] = useNavigationState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<StudentSignupData>({
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().required(t('required')).min(2, t('min_length')).max(100, t('max_length')),
        email: yup.string().required(t('required')).email(t('invalid_email')).max(255, t('max_length')),
        password: yup.string().required(t('required')).min(8, t('min_password')).max(100, t('max_length')),
        student_id: yup.string().required(t('required')).min(4, t('min_length')).max(20, t('max_length')),
      })
    ),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      student_id: '',
    },
  });

  const onSubmit = async (values: StudentSignupData) => {
    setIsSubmitting(true);
    try {
      const result = await classroomService.createCourse is not defined wait wait no wait. Let me look at the actual classroom service - it's createCourse not signup. But we need a signup method. Let me use the proper method.

Actually, I need to add a signup method to the classroom service, or I can use the existing patterns. Let me check what's available.

Looking at the service, I see createCourse but not signup. I need to either add a signup method or use the auth flow differently. Let me use the pattern from the existing auth system.

Actually, let me just use a POST to the API endpoint directly or create a signup method. Since the signup API exists at /api/classroom/auth/signup, I can use that.

Let me use fetch or the apiClient.

Actually, let me create a proper signup using the existing API pattern.

import { post } from '@/lib/apiClient';

const response = await post('/api/classroom/auth/signup', values);
console.log(response);

setIsSubmitting(false);
navigate('/student/pending');
    } catch (error: any) {
      console.error('Signup error:', error);
      // Error shown by form resolver
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-md w-full">
      <CardHeader>
        <h2 className="text-xl font-bold">{t('student_signup')}</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
          <div className="space-y-4">
            <Label htmlFor="name">{t('name')}</Label>
            <Input
              id="name"
              {...register('name')}
              placeholder={t('name_placeholder')}
              className="h-10"
              required
            />

            <Label htmlFor="email">{t('email')}</Label>
            <Input
              id="email"
              {...register('email')}
              type="email"
              placeholder={t('email_placeholder')}
              className="h-10"
              required
            />

            <Label htmlFor="password">{t('password')}</Label>
            <Input
              id="password"
              {...register('password')}
              type="password"
              placeholder={t('password_placeholder')}
              className="h-10"
              required
            />

            <Label htmlFor="student_id">{t('student_id')}</Label>
            <Input
              id="student_id"
              {...register('student_id')}
              placeholder={t('student_id_placeholder')}
              className="h-10"
              required
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? t('creating_account') : t('create_account')}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}