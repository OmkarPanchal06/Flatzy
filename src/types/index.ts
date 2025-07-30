export interface Property {
  id: string;
  title: string;
  type: 'Flat' | 'Hostel' | 'Room';
  furnishing: 'Furnished' | 'Semi-Furnished' | 'Unfurnished';
  preference: 'Family' | 'Students' | 'Professionals' | 'Any';
  available_from: string;
  rent: number;
  location: string;
  image_url: string;
  description?: string;
  created_at?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: string;
  created_at?: string;
}

export interface Inquiry {
  id: string;
  property_id: string;
  name: string;
  phone: string;
  message: string;
  created_at?: string;
}