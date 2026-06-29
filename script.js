const jobs = [
    {
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-time",
      company: "TechCorp",
    },
    {
      title: "Backend Developer",
      location: "Bangalore",
      type: "Part-time",
      company: "CodeSoft",
    },
    {
      title: "UI/UX Designer",
      location: "Chennai",
      type: "Freelance",
      company: "Creative Minds",
    }
  ];
  
  function displayJobs(filteredJobs = jobs) {
    const jobList = document.getElementById("job-list");
    jobList.innerHTML = "";
  
    filteredJobs.forEach(job => {
      const card = document.createElement("div");
      card.className = "job-card";
  
      card.innerHTML = `
        <h3>${job.title}</h3>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Type:</strong> ${job.type}</p>
        <button class="apply-btn">Apply Now</button>
      `;
  
      jobList.appendChild(card);
    });
  }
  
  function searchJobs() {
    const keyword = document.getElementById("searchInput").value.toLowerCase();
    const filtered = jobs.filter(job => 
      job.title.toLowerCase().includes(keyword) ||
      job.company.toLowerCase().includes(keyword) ||
      job.location.toLowerCase().includes(keyword)
    );
    displayJobs(filtered);
  }
  
  window.onload = displayJobs;
  