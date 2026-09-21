import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { loginStudent } from '@/hooks/useClassroom';
import { StudentLoginData } from '@/services/classroomService';

export default function StudentLoginPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<StudentLoginData>({
    resolver: yupResolver(
      yup.object().shape({
        email: yup.string().required(t('required')).email(t('invalid_email')).max(255, t('max_length')),
        password: yup.string().required(t('required')).min(8, t('min_password')).max(100, t('max_length')),
      })
    ),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: StudentLoginData) => {
    setIsSubmitting(true);
    try {
      const result = await loginStudent(values);
      
      if (result.data.student_status === 'pending') {
        // Store the user info and navigate to pending page
        queryClient.setQueryData(['student-dashboard', result.data.user.id], {
          welcome_name: result.data.user.full_name,
          my_courses: [],
          courses_completed: 0,
          lessons_completed: 0,
          quiz_average: 0,
          current_streak: 0,
          overall_progress: 0,
          continuing_course: { id: 0, title: '', category: '', difficulty: 'beginner', thumbnail_url: '', progress_percentage: 0, enrolled_at: '', status: 'enrolled', lesson_count: 0, completed_lesson_count: 0 },
          continuing_lesson: { course_title: '', lesson_title: '', order_index: 0, is_completed: false },
        });
        navigate('/student/pending');
      } else if (result.data.student_status === 'approved') {
        // Login successful, navigate to classroom
        navigate('/student/classroom');
      } else if (result.data.student_status === 'rejected') {
        toast({
          title: t('account_rejected'),
          description: t('account_rejected_description'),
          variant: 'destructive',
        });
        setIsSubmitting(false);
      } else if (result.data.student_status === 'suspended') {
        toast({
          title: t('account_suspended'),
          description: t('account_suspended_description'),
          variant: 'destructive',
        });
        setIsSubmitting(false);
      }
    } catch (error: any) {
      console.error('Login error:', error);
      toast({
        title: t('login_failed'),
        description: error?.message || t('login_failed_description'),
        variant: 'destructive',
      });
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-md w-full">
      <CardHeader>
        <h2 className="text-xl font-bold">{t('student_login')}</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
          <div className="space-y-4">
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
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? t('logging_in') : t('login')}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}