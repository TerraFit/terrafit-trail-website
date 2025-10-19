import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';
import { v4 as uuidv4 } from 'uuid';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function POST(request: NextRequest) {
  try {
    const { 
      fullName, 
      idNumber, 
      dateOfBirth, 
      postalAddress,
      physicalAddress,  
      phone, 
      emergencyContact
    } = await request.json();

    if (!fullName || !idNumber || !dateOfBirth || !postalAddress || !physicalAddress || !phone || !emergencyContact) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const client = await pool.connect();
    
    try {
      const existingMember = await client.query(
        'SELECT id FROM members WHERE id_number = $1',
        [idNumber]
      );

      if (existingMember.rows.length > 0) {
        return NextResponse.json(
          { error: 'Member with this ID number already registered' },
          { status: 409 }
        );
      }

      const memberId = uuidv4();
      
      await client.query(
        `INSERT INTO members (id, full_name, id_number, date_of_birth, postal_address, physical_address, phone, emergency_contact)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
        [memberId, fullName, idNumber, dateOfBirth, postalAddress, physicalAddress, phone, emergencyContact]
      );

      return NextResponse.json({
        success: true,
        message: 'Member registered successfully',
        memberId: memberId,
        registrationDate: new Date().toISOString()
      });

    } finally {
      client.release();
    }

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
