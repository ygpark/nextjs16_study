import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// LocalStorage for recent IPs
const RECENT_IPS_KEY = "recentIPs";
const MAX_RECENT_IPS = 10;

export interface RecentIPEntry {
  ip: string;
  timestamp: number;
}

export function isValidIP(ip: string): boolean {
  const ipRegex =
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return ipRegex.test(ip);
}

export function getRecentIPs(): RecentIPEntry[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(RECENT_IPS_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function addRecentIP(ip: string) {
  if (typeof window === "undefined") return;
  if (!isValidIP(ip)) return;
  const recent = getRecentIPs();
  if (recent.some((existing) => existing.ip === ip)) return;
  const filtered = recent.filter((existing) => existing.ip !== ip);
  filtered.unshift({ ip, timestamp: Date.now() });
  const updated = filtered.slice(0, MAX_RECENT_IPS);
  localStorage.setItem(RECENT_IPS_KEY, JSON.stringify(updated));
}
