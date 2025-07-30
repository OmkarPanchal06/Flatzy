import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Home, Wifi, Car, Shield, Zap, ArrowLeft, Heart, Share2 } from 'lucide-react';
import { Property } from '../types';
import PropertyCard from '../components/PropertyCard';

// Mock detailed property data
const mockDetailedProperty = {
  id: '1',
  title: 'Modern 2BHK Apartment in Koramangala',
  type: 'Flat' as const,
  furnishing: 'Furnished' as const,
  preference: 'Family' as const,
  available_from: '2024-02-01',
  rent: 25000,
  location: 'Koramangala, Bangalore',
  description: 'Beautiful modern apartment with all amenities in the heart of Koramangala. Perfect for families looking for a comfortable and convenient living space.',
  images: [
    'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  image_url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=500',
  details: {
    bedrooms: 2,
    bathrooms: 2,
    area: '1200 sq ft',
    floor: '3rd Floor',
    parking: 'Available',
    deposit: '₹75,000',
    maintenance: '₹2,000/month'
  },
  amenities: [
    { icon: Wifi, name: 'High-Speed WiFi' },
    { icon: Car, name: 'Parking Space' },
    { icon: Shield, name: '24/7 Security' },
    { icon: Zap, name: 'Power Backup' }
  ],
  landlord: {
    name: 'Rajesh Kumar',
    phone: '+91 98765 43210',
    verified: true
  }
};

// Mock recommendations
const mockRecommendations: Property[] = [
  {
    id: '2',
    title: 'Cozy Student Room',
    type: 'Room',
    furnishing: 'Semi-Furnished',
    preference: 'Students',
    available_from: '2024-01-15',
    rent: 8000,
    location: 'Whitefield, Bangalore',
    image_url: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Perfect for students with study area'
  },
  {
    id: '3',
    title: 'Premium Hostel Accommodation',
    type: 'Hostel',
    furnishing: 'Furnished',
    preference: 'Students',
    available_from: '2024-01-20',
    rent: 12000,
    location: 'Electronic City, Bangalore',
    image_url: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Modern hostel with all facilities'
  },
  {
    id: '4',
    title: 'Spacious 3BHK Flat',
    type: 'Flat',
    furnishing: 'Unfurnished',
    preference: 'Family',
    available_from: '2024-02-10',
    rent: 35000,
    location: 'Indiranagar, Bangalore',
    image_url: 'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Large family apartment in prime location'
  }
];

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(mockDetailedProperty);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [recommendations, setRecommendations] = useState<Property[]>([]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProperty(mockDetailedProperty);
      setRecommendations(mockRecommendations);
      setLoading(false);
    }, 1000);
  }, [id]);

  const handleWhatsAppClick = (type: 'visit' | 'inquire') => {
    const message = type === 'visit' 
      ? `Hi, I would like to schedule a visit for the property: ${property.title} at ${property.location}`
      : `Hi, I would like to inquire about the property: ${property.title} at ${property.location}`;
    
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Check out this property: ${property.title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading property details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-sky-600 hover:text-sky-700 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Properties
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md mb-6">
              <div className="relative">
                <img
                  src={property.images[selectedImage]}
                  alt={property.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={handleShare}
                    className="bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full shadow-md transition-colors"
                  >
                    <Share2 size={20} />
                  </button>
                  <button className="bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full shadow-md transition-colors">
                    <Heart size={20} />
                  </button>
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="p-4">
                <div className="grid grid-cols-4 gap-2">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative rounded-lg overflow-hidden ${
                        selectedImage === index ? 'ring-2 ring-sky-500' : ''
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Property ${index + 1}`}
                        className="w-full h-20 object-cover hover:opacity-80 transition-opacity"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{property.title}</h1>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin size={16} className="mr-1" />
                    <span>{property.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-sky-600">₹{property.rent.toLocaleString()}</div>
                  <div className="text-gray-500">per month</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Home className="w-6 h-6 text-sky-500 mx-auto mb-1" />
                  <div className="text-sm font-medium">{property.details.bedrooms} Bedrooms</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Users className="w-6 h-6 text-sky-500 mx-auto mb-1" />
                  <div className="text-sm font-medium">{property.details.bathrooms} Bathrooms</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm font-medium">{property.details.area}</div>
                  <div className="text-xs text-gray-500">Area</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm font-medium">{property.details.floor}</div>
                  <div className="text-xs text-gray-500">Floor</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <span className="font-medium text-gray-700">Type:</span>
                  <span className="ml-2 text-gray-600">{property.type}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Furnishing:</span>
                  <span className="ml-2 text-gray-600">{property.furnishing}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Preference:</span>
                  <span className="ml-2 text-gray-600">{property.preference}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Available From:</span>
                  <span className="ml-2 text-gray-600">{new Date(property.available_from).toLocaleDateString()}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Security Deposit:</span>
                  <span className="ml-2 text-gray-600">{property.details.deposit}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Maintenance:</span>
                  <span className="ml-2 text-gray-600">{property.details.maintenance}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {property.amenities.map((amenity, index) => {
                    const IconComponent = amenity.icon;
                    return (
                      <div key={index} className="flex items-center space-x-2 text-gray-600">
                        <IconComponent size={16} className="text-sky-500" />
                        <span className="text-sm">{amenity.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Card */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Property Owner</h3>
              
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-medium text-gray-700">{property.landlord.name}</span>
                  {property.landlord.verified && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Verified</span>
                  )}
                </div>
                <div className="text-sm text-gray-600">{property.landlord.phone}</div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => handleWhatsAppClick('visit')}
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white px-4 py-3 rounded-md font-medium transition-colors"
                >
                  Schedule Visit
                </button>
                
                <button
                  onClick={() => handleWhatsAppClick('inquire')}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-md font-medium transition-colors"
                >
                  Inquire Now
                </button>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Info</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Property ID:</span>
                  <span className="font-medium">#{property.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Posted:</span>
                  <span className="font-medium">2 days ago</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Views:</span>
                  <span className="font-medium">127</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="text-green-600 font-medium">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;