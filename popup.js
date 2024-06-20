document.getElementById('applyButton').addEventListener('click', async () => {
  const jobTitle = document.getElementById('jobTitle').value;
  const resumeFile = document.getElementById('resume').files[0];
  
  if (!jobTitle || !resumeFile) {
    alert('Please enter a job title and select a resume file.');
    return;
  }

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
  reader.readAsDataURL(resumeFile);
});
