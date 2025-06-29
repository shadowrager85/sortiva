import { NextRequest, NextResponse } from 'next/server';

// Mock leaderboard data
const leaderboard = [
    { id: 1, username: 'Alice', score: 120 },
    { id: 2, username: 'Bob', score: 110 },
    { id: 3, username: 'Charlie', score: 100 },
];

// GET: Return the leaderboard sorted by score descending
export async function GET() {
    const sorted = leaderboard.sort((a, b) => b.score - a.score);
    return NextResponse.json(sorted);
}

// POST: Add a new score to the leaderboard
export async function POST(req: NextRequest) {
    const body = await req.json();
    const { username, score } = body;

    if (!username || typeof score !== 'number') {
        return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }

    const newEntry = {
        id: leaderboard.length + 1,
        username,
        score,
    };

    leaderboard.push(newEntry);

    // Return updated leaderboard
    const sorted = leaderboard.sort((a, b) => b.score - a.score);
    return NextResponse.json(sorted, { status: 201 });
}