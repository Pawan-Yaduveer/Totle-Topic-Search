import React, { useState } from 'react';
import './TopicSearch.css';

const allTopics = [
  { id: 1, name: "Thermodynamics", category: "Physics" },
  { id: 2, name: "JavaScript Basics", category: "Web Development" },
  { id: 3, name: "Quantum Mechanics", category: "Physics" },
  { id: 4, name: "React Hooks", category: "Web Development" },
  { id: 5, name: "Organic Chemistry", category: "Chemistry" },
  { id: 6, name: "Data Structures", category: "Computer Science" },
  { id: 7, name: "Electromagnetism", category: "Physics" },
  { id: 8, name: "Advanced CSS", category: "Web Development" },
  { id: 9, name: "Algorithms", category: "Computer Science" }
];

function TopicSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const query = searchTerm.trim().toLowerCase();
  const filteredTopics = allTopics.filter(topic =>
    topic.name.toLowerCase().includes(query)
  );

  return (
    <div className="topic-search-container">
      <h2>Totle Topic Search</h2>

      <input
        type="text"
        placeholder="Search by topic name..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="topic-list">
        {filteredTopics.length > 0 ? (
          filteredTopics.map(topic => {
            const categorySlug = topic.category.toLowerCase().replace(/\s+/g, '-');
            return (
              <div key={topic.id} className={`topic-card category-${categorySlug}`}>
                <div className="topic-card-header">
                  <h3 className="topic-title">{topic.name}</h3>
                  <span className="topic-category-badge">{topic.category}</span>
                </div>
              </div>
            );
          })
        ) : (
          <p className="no-topics-found">No topics found</p>
        )}
      </div>
    </div>
  );
}

export default TopicSearch;