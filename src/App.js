import React, { useState } from 'react';
import { guidelines, categories } from './data/guidelines';
import { videos, videoCategories } from './data/videos';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('guidelines');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGuideline, setSelectedGuideline] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedTutorialSeries, setSelectedTutorialSeries] = useState(null);
  const [selectedVideoCategory, setSelectedVideoCategory] = useState('All');

  const filteredGuidelines = guidelines.filter(guideline => {
    const matchesCategory = selectedCategory === 'All' || guideline.category === selectedCategory;
    const matchesSearch = guideline.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guideline.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const formatContent = (content) => {
    return content.split('\n').map((line, index) => {
      if (line.trim() === '') return <br key={index} />;
      
      // Handle main bullet points (•)
      if (line.startsWith('• ')) {
        return (
          <div key={index} className="bullet-point">
            {line.substring(2)}
          </div>
        );
      }
      
      // Handle sub-bullet points (-)
      if (line.trim().startsWith('- ')) {
        return (
          <div key={index} className="sub-bullet-point">
            {line.trim().substring(2)}
          </div>
        );
      }
      
      // Handle numbered main points
      if (/^\d+\./.test(line.trim())) {
        return (
          <div key={index} className="numbered-point">
            <strong>{line.match(/^\d+\./)[0]}</strong>
            <span>{line.replace(/^\d+\./, '').trim()}</span>
          </div>
        );
      }
      
      // Handle sub-numbered points (indented with spaces/tabs)
      if (/^\s+\d+\./.test(line)) {
        return (
          <div key={index} className="sub-numbered-point">
            {line.trim()}
          </div>
        );
      }
      
      // Handle headers - lines that don't end with punctuation and are short
      if (line.trim() && !line.trim().endsWith('.') && !line.trim().endsWith(':') && 
          !line.includes('•') && !line.includes('-') && !line.includes('(') &&
          line.length < 80 && !line.match(/^\d+\./)) {
        return (
          <h3 key={index} className="content-header">
            {line.trim()}
          </h3>
        );
      }
      
      // Handle section headers with colons
      if (line.trim().endsWith(':') && line.length < 80) {
        return (
          <h4 key={index} className="section-header">
            {line.trim()}
          </h4>
        );
      }
      
      // Regular paragraphs
      if (line.trim()) {
        return (
          <p key={index} className="content-paragraph">
            {line.trim()}
          </p>
        );
      }
      
      return null;
    }).filter(Boolean);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Project Zephyrus EC Hub</h1>
        <p>Interactive guidelines and tutorials for Project Zephyrus Expert Contributors</p>
        
        <div className="tab-navigation">
          <button 
            className={`tab-btn ${activeTab === 'guidelines' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('guidelines');
              setSelectedVideo(null);
              setSearchTerm('');
            }}
          >
            Guidelines
          </button>
          <button 
            className={`tab-btn ${activeTab === 'tutorials' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('tutorials');
              setSelectedGuideline(null);
              setSelectedVideo(null);
              setSelectedTutorialSeries(null);
              setSearchTerm('');
            }}
          >
            Tutorials
          </button>
        </div>
      </header>

      <div className="main-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="search-section">
            <input
              type="text"
              placeholder={`Search ${activeTab}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          {activeTab === 'guidelines' ? (
            <>
              <div className="filter-section">
                <h3>Categories</h3>
                <div className="category-filters">
                  <button
                    className={`category-btn ${selectedCategory === 'All' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('All')}
                  >
                    <span>📚 All Guidelines</span>
                  </button>
                  {categories.map(category => {
                    const icons = {
                      'Overview': '📋',
                      'Criteria': '🎯',
                      'Grading': '📝',
                      'Rates': '💰',
                      'Updates': '🔄',
                      'UI Guide': '🖥️',
                      'Examples': '✅'
                    };
                    return (
                      <button
                        key={category}
                        className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        <span>{icons[category]} {category}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </>
          ) : (
            <>
              <div className="guidelines-list">
                <h3>Tutorial Series</h3>
                <div
                  className={`guideline-item tutorial-series-item ${selectedTutorialSeries === 'submission' ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedTutorialSeries('submission');
                    setSelectedVideo(null);
                  }}
                >
                  <h4>Submission Walkthrough</h4>
                  <p className="video-description-preview">Complete step-by-step guide through the Project Zephyrus submission process (3 parts)</p>
                </div>
                <div
                  className={`guideline-item tutorial-series-item ${selectedTutorialSeries === 'chart-analysis' ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedTutorialSeries('chart-analysis');
                    setSelectedVideo(null);
                  }}
                >
                  <h4>Logarithmic Charts</h4>
                  <p className="video-description-preview">Essential skills for reading and interpreting charts with logarithmic axes</p>
                </div>
              </div>
            </>
          )}
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {activeTab === 'guidelines' ? (
            selectedCategory && selectedCategory !== 'All' ? (
              <div className="category-guidelines">
                <div className="category-header">
                  <h2>{selectedCategory} Guidelines</h2>
                  <p>All guidelines in the {selectedCategory} category</p>
                </div>
                <div className="guidelines-grid">
                  {filteredGuidelines.map(guideline => (
                    <div key={guideline.id} className="guideline-card">
                      <h3>{guideline.title}</h3>
                      <div className="guideline-content">
                        {formatContent(guideline.content)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="welcome-screen">
                <div className="welcome-content">
                  <h2>Project Zephyrus Guidelines</h2>
                  <p>Everything you need to know about creating high-quality submissions for Project Zephyrus.</p>
                  <p className="instruction-text">Select a category from the sidebar to view guidelines.</p>
                </div>
              </div>
            )
          ) : (
            selectedTutorialSeries ? (
              <div className="tutorial-series-detail">
                <div className="tutorial-series-header">
                  <h2>
                    {selectedTutorialSeries === 'submission' ? 'Submission Walkthrough' : 'Logarithmic Charts'}
                  </h2>
                  <p>
                    {selectedTutorialSeries === 'submission' 
                      ? 'Complete step-by-step guide through the Project Zephyrus submission process'
                      : 'Essential skills for reading and interpreting charts with logarithmic axes'
                    }
                  </p>
                </div>
                
                {selectedVideo ? (
                  <div className="video-content">
                    <div className="video-player">
                      <video 
                        controls 
                        width="100%" 
                        style={{ maxHeight: '500px', borderRadius: '8px' }}
                      >
                        <source src={`/videos/${selectedVideo.filename}`} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="video-description">
                      <p>{selectedVideo.description}</p>
                    </div>
                  </div>
                ) : null}
                
                <div className="tutorial-series-videos">
                  <h3>Tutorial Videos</h3>
                  <div className="video-grid">
                    {videos
                      .filter(video => {
                        if (selectedTutorialSeries === 'submission') {
                          return video.category === 'Submission Walkthrough';
                        } else if (selectedTutorialSeries === 'chart-analysis') {
                          return video.category === 'Logarithmic Charts';
                        }
                        return false;
                      })
                      .map(video => (
                        <div 
                          key={video.id} 
                          className={`video-preview-card ${selectedVideo?.id === video.id ? 'active-video' : ''}`}
                          onClick={() => setSelectedVideo(video)}
                        >
                          <div className="video-thumbnail">
                            <div className="play-icon">▶</div>
                          </div>
                          <div className="video-info">
                            <h4>{video.title}</h4>
                            <p>{video.description}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="welcome-screen">
                <div className="welcome-content">
                  <h2>Tutorial Videos</h2>
                  <p>Watch step-by-step video guides to master Project Zephyrus submissions.</p>
                  
                  <div className="tutorial-series-overview">
                    <div className="series-card" onClick={() => setSelectedTutorialSeries('submission')}>
                      <h3>🎥 Submission Walkthrough</h3>
                      <p>Complete 3-part guide through the submission process</p>
                    </div>
                    <div className="series-card" onClick={() => setSelectedTutorialSeries('chart-analysis')}>
                      <h3>📊 Logarithmic Charts</h3>
                      <p>Essential skills for reading logarithmic charts</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
