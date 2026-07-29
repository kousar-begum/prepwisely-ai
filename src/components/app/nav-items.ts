import {
  Bell,
  BookOpen,
  Brain,
  Camera,
  CalendarClock,
  CalendarDays,
  ClipboardList,
  Clock,
  Compass,
  FileText,
  Gauge,
  HeartPulse,
  HelpCircle,
  LayoutDashboard,
  LineChart,
  MessageSquare,
  Search,
  Settings,
  Sparkles,
  Target,
  Upload,
  User,
  Users,
  UsersRound,
} from "lucide-react";

export interface NavItem {
  label: string;
  to: string;
  icon: typeof LayoutDashboard;
}

export const primaryNav: NavItem[] = [
  { label: "Dashboard", to: "/app", icon: LayoutDashboard },
  { label: "Study Planner", to: "/app/planner", icon: Compass },
  { label: "AI Chat", to: "/app/chat", icon: MessageSquare },
  { label: "Quiz", to: "/app/quiz", icon: ClipboardList },
  { label: "Progress", to: "/app/analytics", icon: LineChart },
  { label: "Reports", to: "/app/report", icon: FileText },
  { label: "Community", to: "/app/community", icon: Users },
  { label: "Profile", to: "/app/profile", icon: User },
  { label: "Settings", to: "/app/settings", icon: Settings },
];

export const learningNav: NavItem[] = [
  { label: "Syllabus Upload", to: "/app/upload", icon: Upload },
  { label: "Topic Explanation", to: "/app/explain", icon: BookOpen },
  { label: "Image to Notes", to: "/app/image-notes", icon: Camera },
  { label: "Adaptive Learning", to: "/app/adaptive", icon: Brain },
  { label: "Goal Tracker", to: "/app/goals", icon: Target },
  { label: "Revision Scheduler", to: "/app/revision", icon: CalendarClock },
  { label: "Weakness Detector", to: "/app/weakness", icon: Gauge },
  { label: "Performance Prediction", to: "/app/prediction", icon: Sparkles },
  { label: "Focus Timer", to: "/app/focus", icon: Clock },
  { label: "Exam Countdown", to: "/app/countdown", icon: CalendarDays },
  { label: "Burnout Detection", to: "/app/burnout", icon: HeartPulse },
  { label: "Study Buddy", to: "/app/study-buddy", icon: UsersRound },
];

export const utilityNav: NavItem[] = [
  { label: "Search", to: "/app/search", icon: Search },
  { label: "Notifications", to: "/app/notifications", icon: Bell },
  { label: "Help & Support", to: "/app/help", icon: HelpCircle },
];