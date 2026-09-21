import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useToast } from '@/components/ui/use-toast';
import { Button, Card, CardContent, CardHeader, Input, Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui';
import { useClassroom } from '@/hooks/useClassroom';
import { StudentStatus, CourseDifficulty, CourseStatus } from '@/types';
import { users, envelope, search, shield, grid, layout, pending, approved, rejected, suspend, reactivate } from 'lucide-react';

export default function AdminClassroomIndex() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Get admin user ID from location state or check authentication
  const adminId = Number(location.state?.adminId) || 0;

  // Tab state
  const [activeTab, setActiveTab] = useState<'pending' | 'approved' | 'rejected_suspended'>('pending');

  // Students data
  const { data: students, isLoading: studentsLoading } = useListStudents({ status: activeTab });

  // Courses data
  const { data: courses, isLoading: coursesLoading } = useListCourses();

  // Announcements data
  const { data: announcements, isLoading: announcementsLoading } = useListAnnouncements();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab as 'pending' | 'approved' | 'rejected_suspended');
    queryClient.invalidateQueries({ queryKey: ['students', tab] });
  };

  if (studentsLoading || coursesLoading || announcementsLoading) {
    return (
      <Card>
        <CardContent className="h-96 flex items-center justify-center">
          <span>{t('loading')}</span>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-7xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between">
        <h2 className="text-2xl font-bold">{t('classroom_dashboard')}</h2>
        
        {/* Tab navigation */}
        <div className="flex gap-2">
          <Button
            variant={activeTab === 'pending' ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleTabChange('pending')}
          >
            {t('pending')}
          </Button>
          <Button
            variant={activeTab === 'approved' ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleTabChange('approved')}
          >
            {t('approved')}
          </Button>
          <Button
            variant={activeTab === 'rejected_suspended' ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleTabChange('rejected_suspended')}
          >
            {t('rejected_suspended')}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Students Management Section */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-foreground mb-4">
            {t('student_management')}
          </h3>
          
          {activeTab === 'pending' && students.data?.students.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full rounded-border">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="text-left p-4 font-medium text-sm text-foreground">
                      {t('student_name')}
                    </th>
                    <th className="text-left p-4 font-medium text-sm text-foreground">
                      {t('student_id')}
                    </th>
                    <th className="text-left p-4 font-medium text-sm text-foreground">
                      {t('email')}
                    </th>
                    <th className="text-left p-4 font-medium text-sm text-foreground">
                      {t('status')}
                    </th>
                    <th className="text-left p-4 font-medium text-sm text-foreground">
                      {t('actions')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {students.data.students.map((student) => (
                    <tr key={student.id} className="border-b border-border">
                      <td className="p-4 font-medium text-foreground">
                        {student.full_name}
                      </td>
                      <td className="p-4 font-medium text-muted-foreground">
                        {student.student_id}
                      </td>
                      <td className="p-4 font-medium text-muted-foreground">
                        {student.email}
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 rounded bg-primary/10 text-primary">
                          {t(student.status)}
                        </span>
                      </td>
                      <td className="p-4">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => approveStudent(student.id)}
                        >
                          {t('approve')}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => rejectStudent(student.id)}
                        >
                          {t('reject')}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : activeTab === 'pending' ? (
            <EmptyState>
              <EmptyState.Icon />
              <EmptyState.Title>{t('no_pending_students')}</EmptyState.Title>
              <EmptyState.Description>{t('all_students_approved_or_waiting')}</EmptyState.Description>
            </EmptyState>
          ) : null}

          {/* Similar sections for approved and rejected would go here */}
        </div>

        {/* Courses Section */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-foreground mb-4">
            {t('course_management')}
          </h3>
          
          {/* Courses table or grid */}
          {courses.data?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses.data.map((course) => (
                <Card key={course.id} className="h-full">
                  <CardHeader className="p-0">
                    {course.thumbnail_url ? (
                      <img
                        src={course.thumbnail_url}
                        alt={course.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    ) : (
                      <div
                        className="w-full h-48 rounded-t-lg bg-gradient-to-b from-muted/30 to-muted/50 flex items-center justify-center"
                      >
                        <span className="text-muted-foreground/60">
                          {t('no_thumbnail')}
                        </span>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="p-4 flex-1">
                    <h3 className="font-medium text-foreground line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground/80 line-clamp-2">
                      {course.description}
                    </p>
                  </CardContent>
                  <CardFooter className="p-3 pt-0">
                    <div className="flex justify-between align-items-center">
                      <span className="text-sm text-muted-foreground">
                        {t('progress')} {course.enrolled_count} enrolled
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => navigate(`/admin/classroom/courses/${course.id}`)}
                      >
                        {t('view_details')}
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <EmptyState>
              <EmptyState.Icon />
              <EmptyState.Title>{t('no_courses_found')}</EmptyState.Title>
              <EmptyState.Description>{t('create_first_course')}</EmptyState.Description>
              <Button onClick={() => navigate('/admin/classroom/courses/new')} className="mt-2">
                {t('create_course')}
              </Button>
            </EmptyState>
          )}
        </div>

        {/* Announcements Section */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-foreground mb-4">
            {t('announcements')}
          </h3>
          
          {announcements.data?.length > 0 ? (
            <div className="space-y-3">
              {announcements.data.map((announcement) => (
                <div
                  key={announcement.id}
                  className="bg-card border border-border rounded-xl p-4 flex items-start gap-3"
                >
                  <Pin className="w-4 h-4 text-amber-500 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground truncate">
                      {announcement.title}
                    </p>
                    <p className="text-xs text-muted-foreground/80">
                      {t('posted_on')} {new Date(announcement.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="ml-auto"
                    onClick={() => navigate(`/admin/classroom/announcements/${announcement.id}`)}
                  >
                    {t('view')}
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState>
              <EmptyState.Icon />
              <EmptyState.Title>{t('no_announcements')}</EmptyState.Title>
              <EmptyState.Description>{t 'create_first_announcement'}</EmptyState.Description>
              <Button onClick={() => navigate('/admin/classroom/announcements/new')} className="mt-2">
                {t('create_announcement')}
              </Button>
            </EmptyState>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// Helper functions for student approval
function approveStudent(studentId: number) {
  // Confirmation dialog
  if (window.confirm('Are you sure you want to approve this student?')) {
    // Use mutation or API call
    // This is a simplified version - in production, use proper mutation
    window.location.href = `/api/classroom/students/approve?student_id=${studentId}`;
  }
}

function rejectStudent(studentId: number) {
  // Confirmation dialog
  if (window.confirm('Are you sure you want to reject this student?')) {
    window.location.href = `/api/classroom/students/reject?student_id=${studentId}`;
  }
}