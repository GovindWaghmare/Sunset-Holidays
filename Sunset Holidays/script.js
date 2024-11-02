function toggleMenu() {
    const menu = document.querySelector('.menu ul');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  }
  
document.querySelectorAll('.card-content a').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
        }
    });
});

// date validation
document.getElementById("checkin").addEventListener("change", function() {
    const checkinDate = new Date(this.value);
    const checkoutInput = document.getElementById("checkout");
    checkoutInput.min = this.value; // Set minimum checkout date based on checkin date
  });
  
  document.getElementById("checkout").addEventListener("change", function() {
    const checkoutDate = new Date(this.value);
    const checkinInput = document.getElementById("checkin");
    if (checkoutDate <= new Date(checkinInput.value)) {
      alert("Checkout date must be after check-in date.");
      this.value = ""; // Reset the checkout date
    }
  });



  // code for Rooms images
// Sample data for room details (images and descriptions)
const roomDetails = {
    1: {
      images: ['room1.jpg', 'room1b.jpg', 'room1c.jpg'],
      description: "18 Bed Mixed Dorm - Perfect for groups. Includes shared facilities, Wi-Fi, and breakfast.",
      price: "₹ 549 / night"
    },
    2: {
      images: ['room2.jpg', 'room2b.jpg', 'room2c.jpg'],
      description: "16 Bed Mixed Dorm - Spacious for larger groups. Includes shared kitchen, lounge, and Wi-Fi.",
      price: "₹ 649 / night"
    }
    // Add more room details as needed
  };
  
  function openModal(roomId) {
    const modal = document.getElementById("roomModal");
    const imageContainer = document.getElementById("modalImageContainer");
    const infoContainer = document.getElementById("modalInfoContainer");
  
    // Set the images
    imageContainer.innerHTML = roomDetails[roomId].images
      .map(img => `<img src="${img}" alt="Room Image" class="modal-image">`)
      .join("");
  
    // Set the description and price
    infoContainer.innerHTML = `
      <p>${roomDetails[roomId].description}</p>
      <p class="price">${roomDetails[roomId].price}</p>`;
  
    modal.style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("roomModal").style.display = "none";
  }
  
  // Close modal when clicking outside
  window.onclick = function(event) {
    const modal = document.getElementById("roomModal");
    if (event.target == modal) {
      closeModal();
    }
  };
  
  function redirectTo(page) {
    window.location.href = page;
  }

  function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active');
  }
  