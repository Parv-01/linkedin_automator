browser.runtime.onMessage.addListener((message) => {
  if (message.action === 'applyJobs') {
    const jobTitle = message.jobTitle.toLowerCase();
    const resume = message.resume;

    const jobs = document.querySelectorAll('.job-card-list__title');
    jobs.forEach((job) => {
      if (job.textContent.toLowerCase().includes(jobTitle)) {
        job.click();

        setTimeout(() => {
          const applyButton = document.querySelector('.jobs-apply-button');
          if (applyButton) {
            applyButton.click();

            setTimeout(() => {
              const uploadButton = document.querySelector('input[type="file"]');
              const dataTransfer = new DataTransfer();
              dataTransfer.items.add(new File([resume], 'resume.pdf', { type: 'application/pdf' }));
              uploadButton.files = dataTransfer.files;

              const submitButton = document.querySelector('button[aria-label="Submit application"]');
              if (submitButton) {
                submitButton.click();
              }
            }, 2000);
          }
        }, 2000);
      }
    });
  }
});
