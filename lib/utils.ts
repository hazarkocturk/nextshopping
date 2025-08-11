import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//convert prisma data to regular JSON

export function convertToPlainObject<T>(data: T): T {
  return JSON.parse(JSON.stringify(data));
}