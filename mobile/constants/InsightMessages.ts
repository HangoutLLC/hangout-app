export interface InsightMessage {
    primaryLabel: string;
    secondaryLabel?: string;
}
  
export const InsightMessages: Record<string, InsightMessage> = {
  attended: {
    primaryLabel: 'Events Attended',
    secondaryLabel: 'Last month',
  },
  bestFriend: {
    primaryLabel: 'Best Friend',
    secondaryLabel: 'Last month',
  },
  streak: {
    primaryLabel: 'Hangout Streak',
  },
};
