import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: 'terrafit_trail',
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      full_name,
      id_number,
      date_of_birth,
      address,
      phone_number,
      medical_aid,
      emergency_contact_person,
      emergency_contact_phone,
      location = 'J-Bay Zebra Lodge',
    } = body;

    // Validate required fields
    if (!full_name || !id_number || !date_of_birth || !address || !phone_number) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const client = await pool.connect();
    try {
      const result = await client.query(
        `INSERT INTO members (
          full_name, id_number, date_of_birth, address, phone_number,
          medical_aid, emergency_contact_person, emergency_contact_phone, location
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING id, full_name, id_number, registration_date`,
        [
          full_name,
          id_number,
          date_of_birth,
          address,
          phone_number,
          medical_aid || null,
          emergency_contact_person || null,
          emergency_contact_phone || null,
          location,
        ]
      );

      const member = result.rows[0];

      return NextResponse.json(
        {
          success: true,
          message: 'Member registered successfully',
          member,
        },
        { status: 201 }
      );
    } finally {
      client.release();
    }
  } catch (error: any) {
    console.error('Registration error:', error);
    
    if (error.code === '23505') {
      return NextResponse.json(
        { error: 'ID number already registered' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Registration failed' },
      { status: 500 }
    );
  }
}
