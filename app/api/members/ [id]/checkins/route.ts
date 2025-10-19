import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const memberId = params.id;

    const client = await pool.connect();
    
    try {
      const checkinsResult = await client.query(
        `SELECT 
          ci.check_in_time,
          loc.name as location_name,
          loc.address as location_address
         FROM check_ins ci
         JOIN locations loc ON ci.location_id = loc.id
         WHERE ci.member_id = $1
         ORDER BY ci.check_in_time DESC`,
        [memberId]
      );

      return NextResponse.json({
        success: true,
        checkIns: checkinsResult.rows.map(row => ({
          location: row.location_name,
          address: row.location_address,
          checkInTime: new Date(row.check_in_time).toLocaleString('en-ZA'),
          date: new Date(row.check_in_time).toLocaleDateString('en-ZA'),
          time: new Date(row.check_in_time).toLocaleTimeString('en-ZA')
        }))
      });

    } finally {
      client.release();
    }

  } catch (error) {
    console.error('Check-in history error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
