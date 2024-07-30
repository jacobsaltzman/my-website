import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { latitude, longitude } = await request.json();

  if (!latitude || !longitude) {
    return NextResponse.json({ error: 'Latitude and Longitude are required' }, { status: 400 });
  }

  // Perform your API logic here
  return NextResponse.json({ latitude, longitude });
}
