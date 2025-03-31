"use client";

import React, { useState } from 'react';
import { FaUserCircle, FaBars } from 'react-icons/fa';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const jobListings = [
  {
    id: 1,
    title: 'Software Engineer',
    location: 'New York',
    type: 'Full-time',
    description: 'Develop and maintain web applications.',
    qualifications: ['Bachelor\'s degree in Computer Science', '3+ years of experience'],
    company: 'Tech Innovations Inc.',
    salary: 100000,
    workType: 'Remote',
  },
  {
    id: 2,
    title: 'Web Developer',
    location: 'London',
    type: 'Part-time',
    description: 'Create and design user-friendly websites.',
    qualifications: ['Proficiency in HTML, CSS, JavaScript', '1+ year of experience'],
    company: 'Web Solutions Ltd.',
    salary: 60000,
    workType: 'On-site',
  },
  {
    id: 3,
    title: 'Data Analyst',
    location: 'New York',
    type: 'Full-time',
    description: 'Analyze data to provide insights for business decisions.',
    qualifications: ['Strong analytical skills', 'Experience with SQL and Python'],
    company: 'Data Insights Corp.',
    salary: 80000,
    workType: 'Hybrid',
  },
  {
    id: 4,
    title: 'Marketing Manager',
    location: 'Los Angeles',
    type: 'Full-time',
    description: 'Lead marketing campaigns and brand strategy.',
    qualifications: ['Bachelor\'s degree in Marketing', '5+ years of experience'],
    company: 'Marketing Solutions Group',
    salary: 90000,
    workType: 'Hybrid',
  },
  {
    id: 5,
    title: 'Sales Representative',
    location: 'Chicago',
    type: 'Part-time',
    description: 'Generate leads and close sales deals.',
    qualifications: ['Excellent communication skills', '1+ year of sales experience'],
    company: 'Sales Dynamics Inc.',
    salary: 50000,
    workType: 'On-site',
  },
  {
    id: 6,
    title: 'UX/UI Designer',
    location: 'San Francisco',
    type: 'Full-time',
    description: 'Design user-friendly interfaces.',
    qualifications: ['Proficiency in Figma, Adobe XD', '3+ years of experience'],
    company: 'Design Innovators Ltd.',
    salary: 110000,
    workType: 'Remote',
  },
];

export default function JobListingsPage() {
  const [showLogout, setShowLogout] = useState(false);
  const [locationFilter, setLocationFilter] = useState('');
  const [fullTimeFilter, setFullTimeFilter] = useState(false);
  const [partTimeFilter, setPartTimeFilter] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [salaryRange, setSalaryRange] = useState([0, 150000]);
  const [workTypeFilter, setWorkTypeFilter] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const uniqueLocations = [...new Set(jobListings.map((listing) => listing.location))];

  const filteredListings = jobListings.filter((listing) => {
    const locationMatch = !locationFilter || listing.location.toLowerCase().includes(locationFilter.toLowerCase());
    const fullTimeMatch = !fullTimeFilter || listing.type.toLowerCase() === 'full-time';
    const partTimeMatch = !partTimeFilter || listing.type.toLowerCase() === 'part-time';
    const salaryMatch = listing.salary >= salaryRange[0] && listing.salary <= salaryRange[1];
    const workTypeMatch = workTypeFilter.length === 0 || workTypeFilter.includes(listing.workType);

    if (fullTimeFilter && partTimeFilter) {
      return locationMatch && salaryMatch && workTypeMatch;
    } else if (fullTimeFilter) {
      return locationMatch && fullTimeMatch && salaryMatch && workTypeMatch;
    } else if (partTimeFilter) {
      return locationMatch && partTimeMatch && salaryMatch && workTypeMatch;
    } else {
      return locationMatch && salaryMatch && workTypeMatch;
    }
  });

  const handleLocationInputChange = (e) => {
    setLocationFilter(e.target.value);
    setShowLocationDropdown(true);
  };

  const handleLocationSelect = (location) => {
    setLocationFilter(location);
    setShowLocationDropdown(false);
  };

  const clearFilters = () => {
    setLocationFilter('');
    setFullTimeFilter(false);
    setPartTimeFilter(false);
    setSalaryRange([0, 150000]);
    setWorkTypeFilter([]);
  };

  const handleWorkTypeChange = (type) => {
    if (workTypeFilter.includes(type)) {
      setWorkTypeFilter(workTypeFilter.filter((item) => item !== type));
    } else {
      setWorkTypeFilter([...workTypeFilter, type]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FEFEFF] text-black w-full">
      <header className="p-4 border-b border-gray-300 flex justify-between items-center">
        <div className="flex items-center">
          <button className="md:hidden" onClick={() => setShowFilters(!showFilters)}>
            <FaBars className="text-2xl cursor-pointer" />
          </button>
        </div>
        <div className="flex items-center">
          <h1 className="mr-2">Hi User!</h1>
          <div className="relative">
            <FaUserCircle className="text-2xl cursor-pointer" onClick={() => setShowLogout(!showLogout)} />
            {showLogout && (
              <button
                className="absolute right-0 mt-2 bg-white text-black px-4 py-2 rounded shadow-md border border-gray-300"
                onClick={() => console.log('Logging out...')}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </header>
      <div className="flex flex-row w-full">
        <aside
          className={`w-full md:w-64 p-4 border-r border-gray-300 ${
            showFilters ? 'block' : 'hidden md:block'
          }`}
        >
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              value={locationFilter}
              onChange={handleLocationInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              onBlur={() => setTimeout(() => setShowLocationDropdown(false), 200)}
              onFocus={() => setShowLocationDropdown(true)}
            />
            {showLocationDropdown && (
              <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md z-10">
                {uniqueLocations
                  .filter((loc) => loc.toLowerCase().includes(locationFilter.toLowerCase()))
                  .map((location) => (
                    <div
                      key={location}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleLocationSelect(location)}
                    >
                      {location}
                    </div>
                  ))}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Type</label>
            <div className="flex flex-col">
              <label className="inline-flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={fullTimeFilter}
                  onChange={() => setFullTimeFilter(!fullTimeFilter)}
                  className="form-checkbox h-5 w-5 text-indigo-600"
                />
                <span className="ml-2 text-sm text-gray-700">Full-time</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={partTimeFilter}
                  onChange={() => setPartTimeFilter(!partTimeFilter)}
                  className="form-checkbox h-5 w-5 text-indigo-600"
                />
                <span className="ml-2 text-sm text-gray-700">Part-time</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Salary Range</label>
            <Slider
              range
              min={0}
              max={150000}
              defaultValue={[0, 150000]}
              value={salaryRange}
              onChange={(value) => setSalaryRange(value)}
            />
            <div className="mt-2 text-sm">
              {`$${salaryRange[0]} - $${salaryRange[1]}`}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Work Type</label>
            <div className="flex flex-col">
              <label className="inline-flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={workTypeFilter.includes('Remote')}
                  onChange={() => handleWorkTypeChange('Remote')}
                  className="form-checkbox h-5 w-5 text-indigo-600"
                />
                <span className="ml-2 text-sm text-gray-700">Remote</span>
              </label>
              <label className="inline-flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={workTypeFilter.includes('On-site')}
                  onChange={() => handleWorkTypeChange('On-site')}
                  className="form-checkbox h-5 w-5 text-indigo-600"
                />
                <span className="ml-2 text-sm text-gray-700">On-site</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={workTypeFilter.includes('Hybrid')}
                  onChange={() => handleWorkTypeChange('Hybrid')}
                  className="form-checkbox h-5 w-5 text-indigo-600"
                />
                <span className="ml-2 text-sm text-gray-700">Hybrid</span>
              </label>
            </div>
          </div>
          <button onClick={clearFilters} className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md w-full">
            Clear Filters
          </button>
        </aside>

        <div className="flex-1 p-4 overflow-y-auto w-full">
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredListings.map((listing) => (
              <div key={listing.id} className="border border-gray-300 rounded-md p-4 mb-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-lg font-semibold">{listing.title}</h2>
                <p className="text-sm text-gray-600">{listing.company}</p>
                <p className="mt-2">Location: {listing.location}</p>
                <p>Type: {listing.type}</p>
                <p className="mt-2">Salary: ${listing.salary}</p>
                <p className="mt-2">Work Type: {listing.workType}</p>
                <p className="mt-2">Description: {listing.description}</p>
                <p className="mt-2">Qualifications:</p>
                <ul className="list-disc list-inside">
                  {listing.qualifications.map((qualification, index) => (
                    <li key={index} className="text-sm">{qualification}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}