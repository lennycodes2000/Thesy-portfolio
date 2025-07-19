
    // Modal handling
    function toggleModal() {
      const modal = document.getElementById("contactModal");
      modal.classList.toggle("active");
      modal.setAttribute("aria-modal", modal.classList.contains("active"));

      // Focus on first input when opening
      if (modal.classList.contains("active")) {
        document.getElementById("name").focus();
      }
    }

    function handleSubmit(event) {
      event.preventDefault();
      alert("Thank you for your message! I'll get back to you soon.");
      toggleModal();
      document.getElementById('contactForm').reset();
    }

    function scrollToContact() {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }

    // Accessibility: Close modal on ESC key
    document.addEventListener('keydown', function(e) {
      const modal = document.getElementById("contactModal");
      if (e.key === "Escape" && modal.classList.contains("active")) {
        toggleModal();
      }
    });

    // Close modal when clicking outside content
    document.getElementById("contactModal").addEventListener('click', function(e) {
      if (e.target === this) {
        toggleModal();
      }
    });