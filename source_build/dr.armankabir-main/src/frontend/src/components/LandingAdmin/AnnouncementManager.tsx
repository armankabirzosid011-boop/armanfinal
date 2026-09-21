import React, { useState, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { XCircle, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  createdAt: string;
}

interface AnnouncementManagerProps {
  isAdmin: boolean;
  announcements: Announcement[];
  onAnnouncementsChange: (announcements: Announcement[]) => void;
}

export const AnnouncementManager: React.FC<AnnouncementManagerProps> = ({
  isAdmin,
  announcements,
  onAnnouncementsChange,
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [showNewDialog, setShowNewDialog] = useState(false);

  const handleEdit = (ann: Announcement) => {
    setEditingId(ann.id);
    setEditTitle(ann.title);
    setEditContent(ann.content);
  };

  const handleSaveEdit = (id: string) => {
    const updated = announcements.map((ann) =>
      ann.id === id
        ? {
            ...ann,
            title: editTitle,
            content: editContent,
          }
        : ann
    );
    onAnnouncementsChange(updated);
    setEditingId(null);
    toast.success("Announcement updated");
  };

  const handleDelete = (id: string) => {
    const updated = announcements.filter((ann) => ann.id !== id);
    onAnnouncementsChange(updated);
    toast.success("Announcement deleted");
  };

  const handleAddNew = () => {
    if (!newTitle.trim() || !newContent.trim()) {
      toast.error("Title and content are required");
      return;
    }
    const newAnn: Announcement = {
      id: Date.now().toString(),
      title: newTitle,
      content: newContent,
      date: new Date().toLocaleDateString(),
      createdAt: new Date().toISOString(),
    };
    onAnnouncementsChange([...announcements, newAnn]);
    setNewTitle("");
    setNewContent("");
    setShowNewDialog(false);
    toast.success("Announcement added");
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Announcements</h3>
        {isAdmin && (
          <Button
            size="sm"
            onClick={() => setShowNewDialog(true)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            + Add Announcement
          </Button>
        )}
      </div>

      <div className="space-y-3">
        {announcements.map((ann) => (
          <div
            key={ann.id}
            className="bg-card border border-border rounded-lg p-4"
          >
            {editingId === ann.id ? (
              <div className="space-y-2">
                <Input
                  placeholder="Title"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <Textarea
                  placeholder="Content"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={() => handleSaveEdit(ann.id)}
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    <CheckCircle2 className="w-4 h-4 mr-1" />
                    Save
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setEditingId(null)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-foreground">{ann.title}</h4>
                    <p className="text-xs text-muted-foreground">{ann.date}</p>
                  </div>
                  {isAdmin && (
                    <div className="flex gap-1">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(ann)}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(ann.id)}
                        className="text-red-600 border-red-300 hover:bg-red-50"
                      >
                        <XCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{ann.content}</p>
              </>
            )}
          </div>
        ))}
      </div>

      <Dialog open={showNewDialog} onOpenChange={setShowNewDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Announcement</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Title</Label>
              <Input
                placeholder="Announcement title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </div>
            <div>
              <Label>Content</Label>
              <Textarea
                placeholder="Announcement content"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handleAddNew}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                Add Announcement
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setShowNewDialog(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AnnouncementManager;
