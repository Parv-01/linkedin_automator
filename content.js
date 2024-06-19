browser.runtime.onMessage.addListener(async (message) => {
    if (message.action === 'applyJobs') {
      const jobTitle = message.jobTitle.toLowerCase();
      const resume = message.resume;
  
      const jobs = document.querySelectorAll('.job-card-list__title');
      jobs.forEach((job) => {
        if (job.textContent.toLowerCase().includes(jobTitle)) {
          // Click on the job listing
          job.click();
  
          // Wait for the job details to load
          setTimeout(() => {
            // Click on the Easy Apply button
            const applyButton = document.querySelector('.jobs-apply-button');
            if (applyButton) {
              applyButton.click();
  
              // Fill out the application form
              setTimeout(() => {
                const uploadButton = document.querySelector('input[type="file"]');
                uploadButton.files[0] = new File([resume], 'resume.pdf', { type: 'application/pdf' });
  
                // Click submit
                const submitButton = document.querySelector('button[aria-label="Submit application"]');
                if (submitButton) {
                  submitButton.click();
                }
              }, 2000); // Adjust time as needed for form to load
            }
          }, 2000); // Adjust time as needed for job details to load
        }
      });
    }
  });
  