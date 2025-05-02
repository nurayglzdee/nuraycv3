document.addEventListener("DOMContentLoaded", function() {
  const cvData = {
      name: "Nuray Quluzadə",
      title: "İnformasiya Təhlükəsizliyi Tələbəsi",
      contact: {
          phone: "+994-70-864-19-05",
          email: "nurayquluzade2006@icloud.com",
          location: "Bakı, Azərbaycan",
          website: "aztu.edu.az"
      },
      education: [
          "AZTU – İnformasiya Təhlükəsizliyi",
          "Fakültə: İnformasiya Texnologiyaları və Təhlükəsizlik",
          "I kurs (2024-2028)"
      ],
      skills: [
          "Office proqramları",
          "Problem həll etmə",
          "Analitik düşüncə",
          "Komanda işi",
          "Zamanın idarə olunması"
      ],
      languages: [
          "İngilis dili (B1)",
          "Rus dili (A2)",
          "Azərbaycan dili (C1)"
      ],
      profile: "İnformasiya təhlükəsizliyi sahəsində təhsil alan 1-ci kurs tələbəsiyəm... ",
      experience: "Hələ ki iş təcrübəm yoxdur... ",
      reference: "Mövcuddur, istək əsasında təqdim oluna bilər."
  };

  document.getElementById("name").innerText = cvData.name;
  document.getElementById("title").innerText = cvData.title;
  document.getElementById("phone").innerText = cvData.contact.phone;
  document.getElementById("email").innerText = cvData.contact.email;
  document.getElementById("location").innerText = cvData.contact.location;
  document.getElementById("website").innerText = cvData.contact.website;
  document.getElementById("profile").innerText = cvData.profile;
  document.getElementById("experience").innerText = cvData.experience;
  document.getElementById("reference").innerText = cvData.reference;

  const educationList = document.getElementById("education-list");
  cvData.education.forEach(item => {
      let li = document.createElement("li");
      li.innerText = item;
      educationList.appendChild(li);
  });

  const skillsList = document.getElementById("skills-list");
  cvData.skills.forEach(item => {
      let li = document.createElement("li");
      li.innerText = item;
      skillsList.appendChild(li);
  });

  const languagesList = document.getElementById("languages-list");
  cvData.languages.forEach(item => {
      let li = document.createElement("li");
      li.innerText = item;
      languagesList.appendChild(li);
  });

  document.querySelectorAll('.toggle').forEach(function(title) {
      title.addEventListener('click', function() {
          const content = this.nextElementSibling;
          if (content.style.display === 'block') {
              content.style.display = 'none';
          } else {
              content.style.display = 'block';
          }
      });
  });

  const editableSections = document.querySelectorAll("[contenteditable='true']");
  editableSections.forEach(section => {
      section.addEventListener("blur", function() {
          cvData.name = document.getElementById("name").innerText;
          cvData.title = document.getElementById("title").innerText;
          cvData.contact.phone = document.getElementById("phone").innerText;
          cvData.contact.email = document.getElementById("email").innerText;
          cvData.contact.location = document.getElementById("location").innerText;
          cvData.contact.website = document.getElementById("website").innerText;
          cvData.profile = document.getElementById("profile").innerText;
          cvData.experience = document.getElementById("experience").innerText;
          cvData.reference = document.getElementById("reference").innerText;
      });
  });
});