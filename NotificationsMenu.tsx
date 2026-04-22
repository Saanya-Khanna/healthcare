import { Bell, Calendar, Clock, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const notifications = [
  {
    id: 1,
    icon: CheckCircle,
    title: 'Appointment confirmed',
    description: 'Your appointment with Dr. Sarah Johnson is confirmed',
    time: '2 hours ago',
    type: 'success',
  },
  {
    id: 2,
    icon: Clock,
    title: 'Reminder: Upcoming appointment',
    description: 'You have an appointment tomorrow at 10:00 AM',
    time: '5 hours ago',
    type: 'warning',
  },
  {
    id: 3,
    icon: Calendar,
    title: 'New appointment available',
    description: 'Dr. Michael Lee has new slots available this week',
    time: '1 day ago',
    type: 'info',
  },
];

export function NotificationsMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative" aria-label="Open notifications">
          <Bell className="w-5 h-5" aria-hidden="true" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" aria-label="Unread notifications"></span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>
          <div className="flex items-center justify-between">
            <span>Notifications</span>
            <span className="text-xs text-blue-600 font-normal">Mark all as read</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="max-h-96 overflow-y-auto">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <div
                key={notification.id}
                className="px-3 py-3 hover:bg-gray-50 cursor-pointer transition-colors border-b last:border-b-0"
              >
                <div className="flex gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      notification.type === 'success'
                        ? 'bg-green-100'
                        : notification.type === 'warning'
                        ? 'bg-yellow-100'
                        : 'bg-blue-100'
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        notification.type === 'success'
                          ? 'text-green-600'
                          : notification.type === 'warning'
                          ? 'text-yellow-600'
                          : 'text-blue-600'
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-gray-900">{notification.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{notification.description}</p>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <DropdownMenuSeparator />
        <div className="px-3 py-2">
          <Button variant="ghost" className="w-full text-sm text-blue-600 hover:text-blue-700">
            View all notifications
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
