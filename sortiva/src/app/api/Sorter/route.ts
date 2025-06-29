import { NextRequest, NextResponse } from 'next/server';

// /src/app/api/Sorter/route.ts


// POST /api/Sorter
export async function POST(req: NextRequest) {
    try {
        const { array, order } = await req.json();

        if (!Array.isArray(array) || !['asc', 'desc'].includes(order)) {
            return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
        }

        const sorted = [...array].sort((a, b) => {
            if (order === 'asc') return a - b;
            else return b - a;
        });

        return NextResponse.json({ sorted });
    } catch {
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}