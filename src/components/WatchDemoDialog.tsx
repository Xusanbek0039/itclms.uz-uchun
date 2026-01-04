import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Play, X } from 'lucide-react';

interface WatchDemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WatchDemoDialog({ open, onOpenChange }: WatchDemoDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-10 text-white hover:bg-white/20"
            onClick={() => onOpenChange(false)}
          >
            <X className="w-4 h-4" />
          </Button>
          
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            {/* Placeholder for video - replace with actual video component */}
            <div className="text-center text-white">
              <Play className="w-16 h-16 mx-auto mb-4 text-white/80" />
              <h3 className="text-2xl font-bold mb-2">Course Demo Video</h3>
              <p className="text-white/80 max-w-md">
                Get a preview of our premium course content and teaching methodology. 
                See how our expert instructors break down complex topics into easy-to-understand lessons.
              </p>
              <Button 
                className="mt-6 bg-gradient-primary hover:scale-105 transition-all duration-300"
                size="lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Play Demo
              </Button>
            </div>
          </div>
          
          <div className="p-6 bg-background">
            <h4 className="text-lg font-semibold mb-2">What you'll see in this demo:</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                Interactive learning modules and real-world projects
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                Expert instructor explanations and teaching style
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                Platform features and student progress tracking
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                Community interaction and peer learning
              </li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}