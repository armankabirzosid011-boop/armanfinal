import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useToast } from '@/components/ui/use-toast';
import { Button, Card, CardContent, CardHeader, Input, Select, SelectTrigger, SelectContent, SelectItem, Badge } from '@/components/ui';
import { useClassroom } from '@/hooks/useClassroom';
import { CourseDifficulty, CourseStatus } from '@/types';
import { folderPlus, grid, x } from 'lucide-react';

export default function AdminCoursesPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [mode, setMode] = useState<'list' | 'create' | 'edit'>('list');
  const [course, setCourseState] = useState({
    title: '',
    description: '',
    description_bn: '',
    category: '',
    difficulty: CourseDifficulty.Beginner,
    status: CourseStatus.Published,
    estimated_duration: '',
    thumbnail: undefined as File | undefined,
  });
  const [thumbnailPreview, setThumbnailPreview] = useState<string | ArrayBuffer | null>(null);

  // Fetch courses for list mode
  const { data: courses, isLoading } = useListCourses({ page: 1, limit: 50 });

  const handleModeChange = (newMode: 'list' | 'create' | 'edit') => {
    setMode(newMode);
    if (newMode === 'list') {
      queryClient.invalidateQueries({ queryKey: ['courses'] });
    }
  };

  if (mode === 'list') {
    if (isLoading) {
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
          <h2 className="text-2xl font-bold">{t('manage_courses')}</h2>
          <Button
            variant="primary"
            onClick={() => setMode('create')}
          >
            {t('create_course')}
          </Button>
        </CardHeader>
        <CardContent>
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
                    <div className="mt-2 flex items-center gap-2">
                      <Badge variant="secondary" size="small">
                        {t(difficulty === 'beginner' ? 'beginner' : difficulty === 'intermediate' ? 'intermediate' : 'advanced')}
                      </Badge>
                      {course.status === 'published' && (
                        <Badge variant="default" size="small">
                          {t('published')}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="p-3 pt-0">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        setMode('edit') && setCourseState({ ...course })
                      }
                    >
                      {t('edit')}
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => {
                        if (window.confirm('Are you sure you want to delete this course?')) {
                          // Delete course
                          // In production, use proper mutation
                        }
                      }}
                    >
                      {t('delete')}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <EmptyState>
              <EmptyState.Icon />
              <EmptyState.Title>{t('no_courses_found')}</EmptyState.Title>
              <EmptyState.Description>{t('create_first_course')}</EmptyState.Description>
              <Button onClick={() => setMode('create')} className="mt-2">
                {t('create_course')}
              </Button>
            </EmptyState>
          )}
        </CardContent>
      </Card>
    );
  }

  // Create/Edit form
  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      toast({
        title: t('invalid_file_type'),
        description: t('please_upload_jpeg_png_or_webp'),
        variant: 'destructive',
      });
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: t('file_too_large'),
        description: t('max_5mb'),
        variant: 'destructive',
      });
      return;
    }

    setCourseState(prev => ({ ...prev, thumbnail: file }));

    // Create preview
    const reader = new FileReader();
    reader.onload = (event) => setThumbnailPreview(event.target?.result ?? null);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMode('list');
    queryClient.invalidateQueries({ queryKey: ['courses'] });
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <h2 className="text-xl font-bold">
          {mode === 'create' ? t('create_course') : mode === 'edit' ? t('edit_course') : t('course_details')}
        </h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} noValidate>
          <Input
            placeholder={t('course_title')}
            value={course.title}
            onChange={(e) =>
              setCourseState((prev) => ({ ...prev, title: e.target.value }))
            }
            required
          />
          <Input
            placeholder={t('course_description')}
            value={course.description}
            onChange={(e) =>
              setCourseState((prev) => ({ ...prev, description: e.target.value }))
            }
            multiline
            rows={3}
          />
          <Input
            placeholder={t('description_bn')}
            value={course.description_bn}
            onChange={(e) =>
              setCourseState((prev) => ({ ...prev, description_bn: e.target.value }))
            }
            multiline
            rows={3}
          />
          <Select
            placeholder={t('category')}
            onValueChange={(value) =>
              setCourseState((prev) => ({ ...prev, category: value as string }))
            }
          >
            <SelectTrigger>
              <SelectContent>
                <SelectItem value="programming">{t('programming')}</SelectItem>
                <SelectItem value="design">{t('design')}</SelectItem>
                <SelectItem value="business">{t('business')}</SelectItem>
                <SelectItem language="bn" value="technical">
                  {t('technical')}
                </SelectItem>
              </SelectContent>
            </SelectTrigger>
          </Select>

          <Select
            placeholder={t('difficulty')}
            onValueChange={(value) =>
              setCourseState((prev) => ({ ...prev, difficulty: value as CourseDifficulty }))
            }
          >
            <SelectTrigger>
              <SelectContent>
                <SelectItem value={CourseDifficulty.Beginner}>
                  {t('beginner')}
                </SelectItem>
                <SelectItem value={CourseDifficulty.Intermediate}>
                  {t('intermediate')}
                </SelectItem>
                <SelectItem value={CourseDifficulty.Advanced}>
                  {t('advanced')}
                </SelectItem>
              </SelectContent>
            </SelectTrigger>
          </Select>

          <Select
            placeholder={t('status')}
            onValueChange={(value) =>
              setCourseState((prev) => ({ ...prev, status: value as CourseStatus }))
            }
          >
            <SelectTrigger>
              <SelectContent>
                <SelectItem value={CourseStatus.Published}>
                  {t('published')}
                </SelectItem>
                <SelectItem value={CourseStatus.Draft}>
                  {t('draft')}
                </SelectItem>
                <SelectItem value={CourseStatus.Archived}>
                  {t('archived')}
                </SelectItem>
              </SelectContent>
            </SelectTrigger>
          </Select>

          <div className="mt-4">
            <Label>{t('estimated_duration')}</Label>
            <Input
              placeholder={t('estimated_duration_hours')}
              type="number"
              value={course.estimated_duration || ''}
              onChange={(e) =>
                setCourseState((prev) => ({ ...prev, estimated_duration: e.target.value }))
              }
            />
          </div>

          {/* Thumbnail Preview */}
          {thumbnailPreview && (
            <div className="mt-3">
              <img
                src={thumbnailPreview as string}
                alt="thumbnail preview"
                className="w-full h-32 object-cover rounded"
              />
            </div>
          )}

          {/* Thumbnail Upload */}
          <div className="mt-3 border dashed border-border rounded px-4 py-4 text-center cursor-pointer hover:bg-muted/50 transition-colors">
            <Input
              type="file"
              accept="image/*"
              onChange={handleThumbnailChange}
              style={{ display: 'none' }}
            />
            <div>
              {t('upload_thumbnail')}
              <p className="text-xs text-muted-foreground/60 mt-1">
                {t('jpg_png_webp_max_5mb')}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <Button type="submit" disabled={mode === 'list'}>
            {mode === 'create' ? t('create_course') : t('update_course')}
          </Button>
          <Button variant="outline" onClick={() => setMode('list')}>
            {t('cancel')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}