// src/app/dashboard/employees/joblistings/page.jsx

"use client";

import React, { useState } from "react";
import DashboardLayout from '../../components/dashboardlayout';

const JobListings = () => {
  const [jobListings, setJobListings] = useState([
    {
      id: 1,
      title: 'Software Engineer',
      description: 'We are looking for a skilled software engineer...',
      skills: 'JavaScript, React, Node.js',
      location: 'Remote',
      postedDate: '2023-10-26',
      applications: [
        { id: 101, name: 'Alice', email: 'alice@example.com' },
        { id: 102, name: 'Bob', email: 'bob@example.com' },
      ],
    },
    {
      id: 2,
      title: 'Marketing Manager',
      description: 'Seeking a creative marketing manager to lead our team...',
      skills: 'Digital Marketing, SEO, Social Media',
      location: 'New York',
      postedDate: '2023-10-25',
      applications: [
        { id: 103, name: 'Charlie', email: 'charlie@example.com' },
      ],
    },
    // Add more placeholder data as needed
  ]);

  const [jobListingFormData, setJobListingFormData] = useState({
    title: '',
    description: '',
    skills: '',
    location: '',
  });

  const [editingJobListingId, setEditingJobListingId] = useState(null);
  const [selectedJobIdForApplications, setSelectedJobIdForApplications] = useState(null);

  const handleJobListingChange = (e) => {
    setJobListingFormData({ ...jobListingFormData, [e.target.name]: e.target.value });
  };

  const handleAddJobListing = () => {
    if (editingJobListingId) {
      setJobListings(jobListings.map((listing) =>
        listing.id === editingJobListingId ? { ...listing, ...jobListingFormData } : listing
      ));
      setEditingJobListingId(null);
    } else {
      setJobListings([...jobListings, { id: Date.now(), ...jobListingFormData, postedDate: new Date().toISOString().split('T')[0], applications: [] }]);
    }
    setJobListingFormData({ title: '', description: '', skills: '', location: '' });
  };

  const handleDeleteJobListing = (id) => {
    setJobListings(jobListings.filter((listing) => listing.id !== id));
    if (editingJobListingId === id) {
      setEditingJobListingId(null);
      setJobListingFormData({ title: '', description: '', skills: '', location: '' });
    }
  };

  const handleEditJobListing = (listing) => {
    setEditingJobListingId(listing.id);
    setJobListingFormData({
      title: listing.title,
      description: listing.description,
      skills: listing.skills,
      location: listing.location,
    });
  };

  const handleShowApplications = (jobId) => {
    setSelectedJobIdForApplications(jobId);
  };

  const handleCloseApplications = () => {
    setSelectedJobIdForApplications(null);
  };

  return (
    <DashboardLayout>
      <div className="p-4 text-[#2F2F2F]">
        <h1 className="text-lg font-semibold mb-4">Job Listings</h1>
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="w-full lg:w-3/4 flex flex-col gap-4">
            {jobListings.map((listing) => (
              <div key={listing.id} className="p-4 border border-[#2F2F2F] rounded-xl">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-lg font-semibold">{listing.title}</h2>
                    <p className="text-sm text-gray-600">Posted: {listing.postedDate}</p>
                    <p className="mt-2 text-sm"><strong>Skills:</strong> {listing.skills}</p>
                    <p className="text-sm"><strong>Location:</strong> {listing.location}</p>
                    <p className="mt-2 text-sm">{listing.description.substring(0, 100)}...</p>
                  </div>
                  <button onClick={() => handleShowApplications(listing.id)} className="p-2 bg-blue-500 text-white rounded">
                    View Applications ({listing.applications.length})
                  </button>
                </div>
                {selectedJobIdForApplications === listing.id && (
                  <div className="mt-4">
                    <h3 className="text-md font-semibold mb-2">Applications</h3>
                    {listing.applications.length > 0 ? (
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2">Name</th>
                            <th className="border border-gray-300 p-2">Email</th>
                          </tr>
                        </thead>
                        <tbody>
                          {listing.applications.map((app) => (
                            <tr key={app.id}>
                              <td className="border border-gray-300 p-2">{app.name}</td>
                              <td className="border border-gray-300 p-2">{app.email}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p>No applications yet.</p>
                    )}
                    <button onClick={handleCloseApplications} className="mt-2 p-2 bg-gray-300 rounded">Close</button>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/4 p-4 border border-[#2F2F2F] rounded-xl flex flex-col">
            <h2 className="text-lg font-semibold mb-4">
              {editingJobListingId ? 'Update Job Listing' : 'Add Job Listing'}
            </h2>
            <div className="flex flex-col gap-2">
              <input type="text" name="title" value={jobListingFormData.title} onChange={handleJobListingChange} placeholder="Job Title" className="p-2 border rounded text-[#2F2F2F]" />
              <textarea name="description" value={jobListingFormData.description} onChange={handleJobListingChange} placeholder="Job Description" className="p-2 border rounded text-[#2F2F2F]" />
              <input type="text" name="skills" value={jobListingFormData.skills} onChange={handleJobListingChange} placeholder="Skills Needed" className="p-2 border rounded text-[#2F2F2F]" />
              <input type="text" name="location" value={jobListingFormData.location} onChange={handleJobListingChange} placeholder="Job Location" className="p-2 border rounded text-[#2F2F2F]" />
              <button onClick={handleAddJobListing} className="mt-2 p-2 bg-blue-500 text-white rounded">
                {editingJobListingId ? 'Update' : 'Add'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default JobListings;