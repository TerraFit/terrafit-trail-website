-- Members table
CREATE TABLE IF NOT EXISTS members (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  id_number VARCHAR(50) UNIQUE NOT NULL,
  date_of_birth DATE NOT NULL,
  address TEXT NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  medical_aid VARCHAR(255),
  emergency_contact_person VARCHAR(255),
  emergency_contact_phone VARCHAR(20),
  location VARCHAR(100) DEFAULT 'J-Bay Zebra Lodge',
  registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Check-ins table
CREATE TABLE IF NOT EXISTS check_ins (
  id SERIAL PRIMARY KEY,
  member_id INTEGER NOT NULL REFERENCES members(id),
  location VARCHAR(100) DEFAULT 'J-Bay Zebra Lodge',
  check_in_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  payment_status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_members_id_number ON members(id_number);
CREATE INDEX IF NOT EXISTS idx_members_location ON members(location);
CREATE INDEX IF NOT EXISTS idx_check_ins_member_id ON check_ins(member_id);
CREATE INDEX IF NOT EXISTS idx_check_ins_location ON check_ins(location);
CREATE INDEX IF NOT EXISTS idx_check_ins_time ON check_ins(check_in_time);
