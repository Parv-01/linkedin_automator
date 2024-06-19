document.getElementById('applyButton').addEventListener('click', async () => {
    const jobTitle = document.getElementById('jobTitle').value;
    const resume = document.getElementById('resume').files[0];
    const reader = new FileReader();
  
    reader.onload = function(event) {
      const resumeContent = event.target.result;
      browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        browser.tabs.sendMessage(tabs[0].id, {
          action: 'applyJobs',
          jobTitle: jobTitle,
          resume: resumeContent
        });
      });
    };
  
    reader.readAsDataURL(resume);
  });
  