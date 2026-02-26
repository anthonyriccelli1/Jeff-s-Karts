import { NextResponse } from 'next/server';
import { getInventory } from '@/lib/sheets';

export const revalidate = 60; // Cache for 60 seconds

export async function GET() {
  try {
    const inventory = await getInventory();
    return NextResponse.json(inventory);
  } catch (error) {
    console.error('Error fetching inventory:', error);
    return NextResponse.json([], { status: 500 });
  }
}
